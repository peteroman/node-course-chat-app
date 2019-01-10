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
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    });
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined the chat',
        createdAt: new Date().getTime()
    });
    socket.on('createMessage', (newMsg) => {
        console.log('createMessage received', newMsg);
        io.emit('newMessage', {
            from: newMsg.from,
            text: newMsg.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: newMsg.from,
        //     text: newMsg.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});