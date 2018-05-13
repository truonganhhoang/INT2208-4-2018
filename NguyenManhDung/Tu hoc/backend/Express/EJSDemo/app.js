var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// homepage
app.get("/", function (req, res) {
    res.render("home");
});

// fall in love page
app.get("/fallinlove/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", {thing: thing});
});

// posts page
app.get("/posts", function (req, res) {
    var posts = [
        {title: "Big challenge", author: "Anonymous"},
        {title: "How to fit in?", author: "Anonymous-1"},
        {title: "How to take it easy?", author: "Anonymous-2"}
    ];
    res.render("posts", {posts: posts});
});

// running server
app.listen(3000, function () {
    console.log("App is running!");
});