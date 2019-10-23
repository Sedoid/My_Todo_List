
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
    event.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            return cache.addAll(resourcesToPrecache);
        }).catch(error =>{
            console.log('Failed to open a Promise ' + error );
            return 0;
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
