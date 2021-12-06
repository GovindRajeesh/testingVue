const CACHE_NAME = 'offlineofths';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      '/','/js/chunk-vendors.c1b5370f.js.map','/js/chunk-vendors.c1b5370f.js','/js/app.084cc681.js','/js/app.084cc681.js.map','/css/app.f0d5f44a.css','/favicon.ico']);
  })());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }else if(event.request[0]=="/"){
        return fetch("/index.html?url="+event.request)
        }
        return fetch(event.request);
      }
    )
  );
});
