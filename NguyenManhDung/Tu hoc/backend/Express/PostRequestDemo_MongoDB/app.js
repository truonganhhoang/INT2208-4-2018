var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/friends"); // friends is database name
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friendSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String
});

var Friend = mongoose.model("Friend", friendSchema); // friend is collection name - automatically added 's' in DB

// homepage
app.get("/", function (req, res) {
    res.render("home");
});

// add friend
app.post("/addFriend", function (req, res) {
    var friend = new Friend({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    });
    friend.save(function (error, newFriend) {
        if (error) {
            console.log("SOMETHING WENT WRONG!");
            console.log(error);
        } else {
            console.log("WE JUST ADDED NEW FRIEND TO THE DB!");
            console.log(newFriend);
        }
    });
    res.redirect('/friends');
});

// friends page
app.get("/friends", function (req, res) {
    Friend.find({}, function (error, friend) {
        if (error) {
            console.log("SOMETHING WENT WRONG!");
            console.log(error);
        } else {
            res.render("friends", {friends: friend});
        }
    });
});

app.listen(3000, function () {
    console.log("app is running!");
});