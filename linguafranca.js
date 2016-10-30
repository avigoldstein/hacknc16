var express = require('express')();
var http = require('http').Server(express);

express.get('/', function(req, res){
  res.send('<h1>Hello World</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
