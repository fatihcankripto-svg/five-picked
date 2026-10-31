from pathlib import Path
from html.parser import HTMLParser
from collections import Counter,defaultdict
class Page(HTMLParser):
 def __init__(self): super().__init__();self.links=set();self.title='';self.desc='';self.canonical='';self.noindex=False;self.h1=0;self.main=0;self.intitle=False;self.schemas=[];self.injson=False;self.json=''
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='a': self.links.add(d.get('href','').split('#')[0].split('?')[0])
  if t=='title': self.intitle=True
  if t=='h1': self.h1+=1
  if t=='main': self.main+=1
  if t=='meta' and d.get('name')=='description':self.desc=d.get('content','')
  if t=='meta' and d.get('name')=='robots':self.noindex='noindex' in d.get('content','')
  if t=='link' and d.get('rel')=='canonical':self.canonical=d.get('href','')
 def handle_endtag(self,t):
  if t=='title':self.intitle=False
 def handle_data(self,s):
  if self.intitle:self.title+=s
pages={}
for f in Path('.next/server/app').rglob('*.html'):
 path='/'+str(f.relative_to('.next/server/app'))[:-5];path='/' if path=='/index' else path
 if path.startswith('/_'):continue
 p=Page();p.feed(f.read_text());pages[path]=p
incoming=defaultdict(set);broken=defaultdict(set)
for path,p in pages.items():
 for href in p.links:
  href=href.removeprefix('https://fivepicked.com')
  if href.startswith('/'):
   if href not in pages and href not in ['/blog']:broken[href].add(path)
   if href!=path:incoming[href].add(path)
assert len(pages) > 50, 'Run next build first; expected generated HTML pages'
print('pages',len(pages),'noindex',[p for p,v in pages.items() if v.noindex])
for attr in ['title','desc','canonical']:
 c=Counter(getattr(p,attr) for p in pages.values() if not p.noindex)
 print(attr,'duplicates',[(k,v) for k,v in c.items() if v>1])
print('broken',dict(broken))
print('weak incoming',[(p,len(incoming[p])) for p,v in pages.items() if not v.noindex and len(incoming[p])<3])
print('heading/landmark',[(p,v.h1,v.main) for p,v in pages.items() if v.h1!=1 or v.main!=1])

assert not broken, f'Broken internal links: {dict(broken)}'
for attr in ['title', 'desc', 'canonical']:
 values = [getattr(p, attr) for p in pages.values() if not p.noindex]
 assert all(values), f'Missing {attr}'
 assert len(values) == len(set(values)), f'Duplicate {attr}'
assert all(v.h1 == 1 and v.main == 1 for v in pages.values()), 'Invalid heading or main landmark count'
assert all(len(incoming[p]) >= (2 if p == '/travel/flights' else 3) for p,v in pages.items() if not v.noindex), 'Insufficient distinct referring pages within the available topic cluster'
import xml.etree.ElementTree as ET
root=ET.fromstring(Path('.next/server/app/sitemap.xml.body').read_text())
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
sitemap_paths={e.text.removeprefix('https://fivepicked.com') or '/' for e in root.findall('s:url/s:loc',ns)}
expected={p for p,v in pages.items() if not v.noindex} | {'/blog'}
assert sitemap_paths == expected, f'Sitemap mismatch: missing {expected-sitemap_paths}, extra {sitemap_paths-expected}'
print('PASS: unique metadata, valid canonical, no broken links, topic-appropriate referring pages, sitemap parity and heading landmarks')

# FAQ markup must describe visible text, never hidden extra answers.
import json, re, html
class VisibleText(HTMLParser):
 def __init__(self): super().__init__(); self.skip=0; self.parts=[]
 def handle_starttag(self,tag,attrs):
  if tag in ('script','style'): self.skip+=1
 def handle_endtag(self,tag):
  if tag in ('script','style'): self.skip-=1
 def handle_data(self,data):
  if not self.skip:self.parts.append(data)
def normalized(text):return ' '.join(html.unescape(text).split())
def schema_nodes(value):
 if isinstance(value,list):
  for item in value:yield from schema_nodes(item)
 elif isinstance(value,dict):
  yield value
  if '@graph' in value:yield from schema_nodes(value['@graph'])
faq_count=0
for file in Path('.next/server/app').rglob('*.html'):
 raw=file.read_text(); visible=VisibleText(); visible.feed(raw); text=normalized(' '.join(visible.parts))
 for data in re.findall(r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>',raw,re.S):
  for node in schema_nodes(json.loads(data)):
   assert node.get('@type') != 'AggregateRating', f'Invented rating in {file}'
   if node.get('@type')=='FAQPage':
    for q in node['mainEntity']:
     assert normalized(q['name']) in text, f'Non-visible FAQ question in {file}'
     assert normalized(q['acceptedAnswer']['text']) in text, f'Non-visible FAQ answer in {file}'
     faq_count+=1
   if node.get('@type')=='BreadcrumbList':
    entries=node['itemListElement']
    assert [e['position'] for e in entries]==list(range(1,len(entries)+1)), f'Invalid breadcrumb order in {file}'
print(f'PASS: JSON-LD parses, breadcrumb order is valid, {faq_count} FAQ answers match visible text')

# Retired guide URLs must not remain in navigation or the sitemap.
assert not any(path == '/guides' or path.startswith('/guides/') for path in sitemap_paths), 'Retired guide URL in sitemap'
assert not any(href == '/guides' or href.startswith('/guides/') for page in pages.values() for href in page.links), 'Retired guide link in generated HTML'
for prefix in ('blog', 'compare', 'free', 'quiz', 'reviews', 'alternatives'):
 assert '/' + prefix in sitemap_paths, f'Sitemap index missing: {prefix}'
 assert any(path.startswith('/' + prefix + '/') for path in sitemap_paths), f'Sitemap detail family missing: {prefix}'
print('PASS: six active sitemap families; retired guide URLs absent from sitemap and internal links')

# Authorship descriptions and review dates must match visible article content.
reviewed_posts = 0
for file in Path('.next/server/app/blog').glob('*.html'):
 raw = file.read_text()
 visible = VisibleText(); visible.feed(raw)
 text = normalized(' '.join(visible.parts))
 for data in re.findall(r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>', raw, re.S):
  for node in schema_nodes(json.loads(data)):
   if node.get('@type') != 'BlogPosting': continue
   author = node['author']
   page = node['mainEntityOfPage']
   assert author['name'] in text and normalized(author['description']) in text, f'Hidden or inconsistent author biography: {file}'
   assert author['@type'] == 'Organization', f'The collective byline must not be represented as a fictional person: {file}'
   assert page['@type'] == 'WebPage' and 'reviewedBy' not in node, f'Review properties must be attached to WebPage: {file}'
   assert page['reviewedBy']['name'] in text, f'Reviewer not visible: {file}'
   assert node['dateModified'] == page['lastReviewed'] == '2026-10-31', f'Inconsistent review dates: {file}'
   assert 'Last reviewed: October 31, 2026' in text and 'Reviewed by: Five Picked Editors' in text and 'How this article was researched' in text, f'Missing visible review disclosure: {file}'
   assert '/how-we-choose' in raw, f'Missing research-method link: {file}'
   reviewed_posts += 1
assert reviewed_posts == 13, f'Expected 13 reviewed blog posts, got {reviewed_posts}'
print('PASS: all 13 article biographies, visible review dates and WebPage reviewer metadata agree')
