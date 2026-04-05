const CACHE_NAME = 'chippingdales-v1';

// Alle Dateien die offline verfügbar sein sollen
const ASSETS = [
    './index.html',
    './script.js',
    './style.css',
    './logo.png',
    './logo_chipping.png',
    './icon-192.png',
    './icon-512.png',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap'
];

// Installation – alle Assets cachen
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Aktivierung – alten Cache löschen
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(
                keys.filter(function (k) { return k !== CACHE_NAME; })
                    .map(function (k) { return caches.delete(k); })
            );
        })
    );
    self.clients.claim();
});

// Fetch – Cache first, dann Netzwerk
// YouTube-Thumbnails: Netzwerk first, Cache als Fallback
self.addEventListener('fetch', function (e) {
    var url = e.request.url;

    // YouTube-Requests: immer Netzwerk versuchen, offline kein Thumbnail
    if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('ytimg.com')) {
        e.respondWith(
            fetch(e.request).catch(function () {
                // Offline: leere Antwort für Thumbnails
                return new Response('', { status: 503 });
            })
        );
        return;
    }

    // Google Fonts: Cache first
    if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
        e.respondWith(
            caches.match(e.request).then(function (cached) {
                return cached || fetch(e.request).then(function (response) {
                    var clone = response.clone();
                    caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, clone); });
                    return response;
                });
            })
        );
        return;
    }

    // Alles andere: Cache first
    e.respondWith(
        caches.match(e.request).then(function (cached) {
            return cached || fetch(e.request).then(function (response) {
                var clone = response.clone();
                caches.open(CACHE_NAME).then(function (cache) { cache.put(e.request, clone); });
                return response;
            }).catch(function () {
                // Offline-Fallback: index.html
                return caches.match('./index.html');
            });
        })
    );
});