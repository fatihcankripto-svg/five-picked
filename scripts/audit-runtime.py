import runpy,urllib.request,concurrent.futures,xml.etree.ElementTree as ET,subprocess,time
scope=runpy.run_path('scripts/audit-seo.py');Page=scope['Page'];base='http://127.0.0.1:3005'
server=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3005'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
 for attempt in range(25):
  try:xml=urllib.request.urlopen(base+'/sitemap.xml',timeout=2).read();break
  except OSError:time.sleep(.2)
 else:raise RuntimeError('Runtime server did not become available')
 root=ET.fromstring(xml);ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
 paths=[e.text.removeprefix('https://fivepicked.com') or '/' for e in root.findall('s:url/s:loc',ns)]
 def check(path):
  with urllib.request.urlopen(base+path) as response:
   assert response.status==200,path
   assert response.headers.get('Set-Cookie') is None,path
   p=Page();p.feed(response.read().decode())
   assert p.h1==1 and p.main==1,(path,p.h1,p.main)
   assert p.canonical.rstrip('/')==('https://fivepicked.com'+path).rstrip('/'),(path,p.canonical)
   return path
 with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(check,paths))
 for path in ['/website-builders','/gaming','/refurbished-electronics','/diy-legal']:
  p=Page();p.feed(urllib.request.urlopen(base+path).read().decode());assert p.noindex,path
 r=urllib.request.urlopen(base+'/marketing-and-seo');assert r.url.endswith('/ai-tools/marketing-and-seo')
 print('PASS: runtime HTTP checks for',len(results),'sitemap URLs; no cookies; hidden categories noindex; old URL redirects')
finally:server.terminate();server.wait(timeout=5)
