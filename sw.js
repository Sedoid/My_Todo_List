// Service Workers sit between your site an the network
// it can intercept request to the network and divert them to the cache
// when this happends, the fetch event is triggered
// to respond to this event, we find the file we cached earlier


const cacheName = 'cache-v1';
const resourcesToPrecache = [
    './',
    './index.html',
    './assets/images/scloud0.png',
    './assets/scripts/sweetalert.min.js',
    './assets/scripts/todo.js',
    './assets/styles/home.css'
]



self.addEventListener('install',(event)=>{
    console.log('Service Worker Install event');
    event.waitUntill(
        caches.open(cacheName)
        .then(cache =>{
            return cache.addAll(resourcesToPrecache);
        })
    )
});

self.addEventListener('activate', (event)=>{
    console.log('Activate event');
});

self.addEventListener('fetch',(event)=>{
    
    console.log('Fetch intercepted for:',event.request.url);
    
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});