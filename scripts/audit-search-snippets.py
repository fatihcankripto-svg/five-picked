"""Audit the production HTML for every sitemap URL after pnpm build.

Starts a local production server; no third-party requests or content writes.
"""
import concurrent.futures
from html.parser import HTMLParser
import json
from pathlib import Path
import socket
import subprocess
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]


class Head(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.titles = []
        self.meta = {}
        self.canonicals = []
        self.in_title = False
        self.h1_count = 0
        self.schema = None
        self.schema_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title':
            self.titles.append('')
            self.in_title = True
        if tag == 'h1':
            self.h1_count += 1
        if tag == 'meta':
            key = attrs.get('name') or attrs.get('property')
            self.meta.setdefault(key, []).append(attrs.get('content', ''))
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonicals.append(attrs.get('href'))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schema = ''

    def handle_data(self, data):
        if self.in_title:
            self.titles[-1] += data
        if self.schema is not None:
            self.schema += data

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.schema is not None:
            json.loads(self.schema)
            self.schema_count += 1
            self.schema = None


def main():
    source = (ROOT / 'lib/search-snippets.ts').read_text()
    expected = json.loads(source.split(' = ', 1)[1])
    with socket.socket() as sock:
        sock.bind(('127.0.0.1', 0))
        port = sock.getsockname()[1]
    base = f'http://127.0.0.1:{port}'
    server = subprocess.Popen(
        [str(ROOT / 'node_modules/.bin/next'), 'start', '--hostname', '127.0.0.1', '--port', str(port)],
        cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
    )
    try:
        for attempt in range(100):
            try:
                with urllib.request.urlopen(base + '/sitemap.xml', timeout=10) as response:
                    sitemap = ET.fromstring(response.read())
                break
            except (urllib.error.URLError, TimeoutError):
                if server.poll() is not None or attempt == 99:
                    raise RuntimeError('Production server did not start; run pnpm build first')
                time.sleep(0.1)
        urls = [node.text for node in sitemap.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
        paths = {url.removeprefix('https://fivepicked.com') or '/' for url in urls}
        assert paths == set(expected), f'Snippet/sitemap coverage differs: {paths ^ set(expected)}'

        def check(url):
            path = url.removeprefix('https://fivepicked.com') or '/'
            with urllib.request.urlopen(base + path, timeout=30) as response:
                assert response.status == 200, path
                assert response.geturl() == base + path, f'Redirect: {path}'
                page = Head()
                page.feed(response.read().decode())
            copy = expected[path]
            title = copy['title'] + ' | FIVE PICKED'
            assert page.titles == [title], f'Title mismatch/duplicate: {path}'
            assert len(title) <= 60, f'Long title: {path}'
            assert 90 <= len(copy['description']) <= 160, f'Description length: {path}'
            for key in ['description', 'og:description', 'twitter:description']:
                assert page.meta.get(key) == [copy['description']], f'{key}: {path}'
            for key in ['og:title', 'twitter:title']:
                assert page.meta.get(key) == [title], f'{key}: {path}'
            assert page.canonicals == [url], f'Canonical: {path}'
            assert page.meta.get('og:url') == [url], f'OG URL: {path}'
            assert 'noindex' not in ','.join(page.meta.get('robots', [])), path
            assert page.h1_count == 1, f'H1 count: {path}'
            return title, copy['description']

        with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
            results = list(pool.map(check, urls))
        for index, label in [(0, 'titles'), (1, 'descriptions')]:
            assert len({row[index] for row in results}) == len(results), f'Duplicate {label}'
        print(f'PASS: {len(results)} URLs; complete unique snippets, length budgets, social consistency, canonical URLs, HTTP 200, H1 and JSON-LD')
    finally:
        server.terminate()
        server.wait(timeout=10)


if __name__ == '__main__':
    main()
