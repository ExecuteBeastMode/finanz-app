const V='finanz-v1',A=['./','index.html','manifest.webmanifest','icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))))});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
