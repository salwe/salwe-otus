if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(reg => {
            console.info('Registration succeeded');
        }).catch(error => {
        console.error('Registration failed with ' + error);
    });

    navigator.serviceWorker.addEventListener('message', event => {
        console.log(`The service worker sent me a message: ${event.data}`);
    });
}