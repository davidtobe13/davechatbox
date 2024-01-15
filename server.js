const express = require('express');
const http = require('http');
const socket = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socket(server)

const port = 3344

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('homepage')
})

io.on('connection', (socket)=>{
    socket.on('message', (data) =>{
        socket.broadcast.emit('message', data)
    })
})

server.listen(port, () =>{
    console.log(`This server is listening on port: ${port}`);
})