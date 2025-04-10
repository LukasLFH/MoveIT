const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Speicher für die Lobby-Informationen
let lobbyName;
let players = {};

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log('Neuer Spieler verbunden');

  // Wenn ein neuer Spieler sich anmeldet, fragen wir nach dem Lobby-Namen und speichern ihn in der Datenbank
  socket.emit('requestLobbyName');
  socket.on('lobbyName', (name) => {
    lobbyName = name;
    players[socket.id] = { name: 'Spieler' + Object.keys(players).length, connected: true };
    io.to(socket.id).emit('joinLobby', lobbyName);
  });

  // Wenn ein Spieler eine Nachricht sendet
  socket.on('sendChatMessage', (message) => {
    console.log(`Nachricht von ${players[socket.id].name}: ${message}`);
    io.emit('newChatMessage', players[socket.id].name, message);
  });

  // Wenn ein Spieler sich abmelden möchte
  socket.on('disconnect', () => {
    delete players[socket.id];
    console.log(`${players[socket.id].name} hat die Lobby verlassen`);
  });
});

server.listen(3000, () => {
  console.log('Lobby-Server läuft auf Port 3000');
});