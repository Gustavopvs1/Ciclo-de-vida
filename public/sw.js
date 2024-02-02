// ciclo de vida del sw
//1.- install
self.addEventListener('install', event => {
    console.log('Service Worker installed 1', event);
    const instalation = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finished pre-caching static assets.');
            self.skipWaiting();
            resolve();
        }, 1);
    });
    event.waitUntil(instalation);
});
//2.- activate
self.addEventListener('activate', event => {
    console.log('Service Worker activated 2', event);
});
//3.- fetch
self.addEventListener('fetch', event => {
    console.log('Service Worker fetching 3', event.request.url);
    // event.respondWith(fetch(event.request));
});