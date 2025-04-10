const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('a new client connected');

  socket.emit('message', 'Hello, World!'); // send a message to the newly connected client

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});