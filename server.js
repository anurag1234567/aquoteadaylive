var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.sendfile(__dirname + "/index.html");
});

var port=process.env.port || 3000;

var server=app.listen(port,function(req,res){
    console.log("server started at port 3000");
});
