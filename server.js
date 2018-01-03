var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.sendfile(__dirname + "/index.html");
});

var port=process.env.port || 8085;

var server=app.listen(port,function(req,res){
    console.log("server started at port 8080");
});
