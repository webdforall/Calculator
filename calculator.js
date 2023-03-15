//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    res.send("Thanks for posting that");
});

app.listen(5000, function(){
    console.log("server started at port 5000");
});