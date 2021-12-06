const CACHE_NAME = 'offline';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([
      '/index.html','/script.js','/styles/components.css','/styles/index.css','/styles/animation.css','/icons/Computer.png','/icons/User.png']);
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
