const CACHE_NAME = 'offline-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
    '/logo512.png',
    '/robots.txt',
    '/sw.js',
    '/favicon.ico',
    '/house.svg',
    '/assets/images/facebook.svg',
    '/assets/images/house.svg',
    '/assets/images/instagram.svg',
    '/assets/images/linkedin.svg',
    '/assets/images/play.svg',
    '/assets/images/stop.svg',
    '/aboutus.css',
    '/App.css',
    '/footer.css',
    '/header.css',
    '/home.css',
    '/house.css',
    '/onsale.css',
    '/reset.css',
    '/index.js',
    '/reportWebVitals.js',
    '/src/components/Footer.js',
    '/src/components/Header.js',
    '/src/components/LocMap.js',
    '/src/components/Logo.js',
    '/src/components/MediaPlayer.js',
    '/src/components/OnlineStatus.js',
    '/src/models/Apartment.js',
    '/src/models/House.js',
    '/src/models/Property.js',
    '/src/pages/AboutUs.js',
    '/src/pages/Home.js',
    '/src/pages/OnSale.js',
];

// Install event
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
    console.log("Instaling....")
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response; // Return the cached version
                }
                return fetch(event.request); // Fetch from network if not in cache
            })
    );
});

// Activate event
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});