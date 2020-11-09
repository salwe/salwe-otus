self.addEventListener('install', function(event) {
    console.info('sW installed');
});

self.addEventListener('fetch', (event) => {
    if(
        event.request.url !== 'http://localhost:8080/' &&
        !event.request.url.includes('index.js')
    )  {
        event.respondWith(new Response('Hello!'))
    }
});

self.addEventListener('message', event => {
    // event is an ExtendableMessageEvent object
    console.log(`The client sent me a message: ${event.data}`);

    event.source.postMessage("Hi client");
});

const
    io = require('socket.io-client'),
    ioClient = io.connect('http://localhost:8080');

ioClient.on('seq-num', (msg) => console.info(msg));