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

    socket.emit('newMessage', {
        from: 'Mike',
        text: 'Hey, whazzap?',
        createdAt: 123
    });

    socket.on('createMessage', (newMsg) => {
        console.log('createMessage received', newMsg);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});