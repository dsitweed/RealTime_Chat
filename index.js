const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/ver1.html');
});

io.on('connection', (socket) => {
    console.log("a user connnected");
    // socket.on( 'disconnect', () => {
    //     console.log("User disconnected");
    // });
    //Name cua goi tin la chatmessage phai giong nhau
    socket.on("chat message", (msg) => {
        console.log("message:" + msg);
        io.emit('chat message', msg);
    });
});

server.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});