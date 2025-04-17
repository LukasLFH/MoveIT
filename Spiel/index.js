const express = require('express');
const app = express();

app.use(express.static("./public"));

let port = process.env.PORT || 3000;
const server = app.listen(port)

const io = require("./io/io.js")(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/startseite/index.html");
})

app.get("/lobby", (req, res) => {
    res.sendFile(__dirname + "/public/pages/lobby.htm");
})

app.get("/anleitung", (req, res) => {
    res.sendFile(__dirname + "/public/pages/Spielanleitung-MoveIt.html");
})

//
