var express = require("express");
var app = require("express")(), server = require("http").createServer(app);

server.listen(4030);
app.use(express.static("./dist"));
app.get("/", function(req, res){
    res.sendFile(__dirname + "index.html");
})