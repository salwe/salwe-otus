const app = require('express')();
const http = require('http').createServer(app);
const server = require('socket.io')(http);

const sequenceNumberByClient = new Map();

server.on('connection', (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    sequenceNumberByClient.set(socket, 1);

    socket.on('disconnect', () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});

setInterval(() => {
    for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
        client.emit('seq-num', sequenceNumber);
        sequenceNumberByClient.set(client, sequenceNumber + 1);
    }
}, 3000);

http.listen(8080, () => {
    console.log('listening on *:8080');
});