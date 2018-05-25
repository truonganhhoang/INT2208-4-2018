var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get("/", function (req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function (req, res) {
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function (req, res) {
    res.send("MEOW!");
});

// route paramater
app.get("/r/:subredditName", function (req, res) {
    res.send("WELCOME TO " + req.params.subredditName.toUpperCase() + " PAGE");
});

app.get("/*", function (req, res) {
    res.send("You are a star!")
});

app.listen(3000, function () {
   console.log("Server has started!");
});