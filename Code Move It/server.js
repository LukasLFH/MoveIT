const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('Ein Benutzer hat sich verbunden');

    setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        socket.emit('time', currentTime);
    }, 1000);

    socket.on('disconnect', () => {
        console.log('Ein Benutzer hat die Verbindung getrennt');
    });
});

server.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
