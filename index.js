var express = require("express");
var app = express();
app.use(express.static("./public"));
var server = require("http").Server(app);
server.listen(3001);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id + ': connected');

    socket.on('changeName', function(value) {
        io.emit('returnChangeName', value);
    });
    socket.on('changeScore', function(value) {
        io.emit('returnchangeScore', value);
    });
    socket.on('changeCheck', function(value) {
        io.emit('returnChangeCheck', value);
    });
    socket.on('timeDown', function(value) {
        io.emit('returnTimeDown', value);
    });
    socket.on('ShenShu', function(value) {
        io.emit('returnShenShu', value);
    });
    socket.on('countRound', function(value) {
        io.emit('returnCountRound', value);
    });
    socket.on('disconnect', function() {
        console.log(socket.id + ': disconnected');
    })

})