const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const pubpath = path.join(__dirname, '../public');

const port = process.env.PORT|| 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(pubpath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (newMsg) => {
        console.log('createMessage received', newMsg);
        io.emit('newMessage', {
            from: newMsg.from,
            text: newMsg.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});