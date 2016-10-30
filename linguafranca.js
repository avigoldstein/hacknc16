var express = require('express');
var expr = express();
var http = require('http').Server(expr);
var path = require('path');
var io = require('socket.io')(http);

expr.get('/', function(req, res){
  res.sendFile(__dirname + '/linguafranca.html');
});

expr.use(express.static(path.join(__dirname + '/public')));

io.on('connection', function(socket){
  console.log("a user connected");
  socket.on('chat message', function(msg){
      console.log("trying to get values");
      //console.log(msg.my_message);
      //socket.emit("chat message", "hello");
      socket.emit('chat message', msg.my_message);
      socket.broadcast.emit('chat message', msg.message);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
