if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
    // .then(reg => {
    //     console.log('Service Worker registered', reg)
    // }).catch(err => {
    //     console.error('Service Worker not registered', err)
    // });
}
fetch('https://fakestoreapi.com/products/1')