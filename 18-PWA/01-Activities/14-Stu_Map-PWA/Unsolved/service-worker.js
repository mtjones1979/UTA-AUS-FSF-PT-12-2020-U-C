// TODO: add listener and handler to cache static assets

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/manifest.webmanifest',
    '/assets/css/style.css',
    
    '/assets/images/bradenburg.jpg',
    '/assets/images/logo16.png',
    '/assets/images/logo48.png',
    '/assets/images/logo128.png',
    '/assets/images/logo512.png',
    '/assets/images/map.png',
    '/assets/images/reichstag.png',
]
  
    self.addEventListener("install",
    function (evt) {
        evt.waitUntil(
            caches.open(DATA_CACHE_NAME).then((cache) => 
            cache.add("/api/images"))
            );

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => 
        cache.addAll(FILES_TO_CACHE))
    );
        self.skipWaiting();
    });

   

// TODO: add listener and handler to retrieve static assets from the Cache Storage in the browser 

self.addEventListener("activate", function (evt) {
    evt.waitUntil(caches.keys().then (keyList => {
        return Promise.all(
            keyList.map(key => {
                if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                    console.log("Removing old cache data", key);
                    return caches.delete(key);
                }
            })
        );
    })
    )
    self.clients.claim();
})

self.addEventListener('fetch', function(evt) {
    if (evt.request.url.includes('/api/')) {
        console.log('[Service Worker] Fetch (data)', evt.request.url);

        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                .then (response => {
                    if(response.status === 200) {
                        cache.put(evt.request.url, response.clone())
                    };
                    return response;
                })
                .catch(err => {
                    return cache.match(evt.request);
                });
            })
        );
        return;
    }
    evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(evt.request).then(response => {
                return response || fetch (evt.request);
            });
        })
    );
});