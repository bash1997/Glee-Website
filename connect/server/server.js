const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

app.use(express.static('public'));

const server = http.createServer(app);

const io = new Server(server, {
  cors:{
    origin:"*",
    methods: ["GET", "POST"],
  },
});
// If you plan to deply the server, you will need to change the files public/script.js and index.html to use your public IP
server.listen(3000, () => { 
    console.log('listening on port 3000');
  });
  
  const users = {}
  
  // Socket has has not been changed
  io.on('connection', socket => {
    socket.on('new-user', name => {
      users[socket.id] = name
      socket.broadcast.emit('user-connected', name);
    })
    socket.on('send-chat-message', message => {
      socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] });
    })
    socket.on('disconnect', () => {
      socket.broadcast.emit('user-disconnected', users[socket.id], users);
      delete users[socket.id]
    })
  })