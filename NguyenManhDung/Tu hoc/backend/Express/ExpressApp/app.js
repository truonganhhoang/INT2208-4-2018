var express = require("express");
var app = express();

// hompage
app.get('/', function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// speak route
app.get('/speak/:animalName', function (req, res) {
    var voice = {
        dog: "Wolf Wolf!",
        pig: "Oink",
        cow: "Mow",
        cat: "I hate human!"
    };
    var animal = req.params.animalName.toLowerCase();

    res.send("The " + animal + " says '" + voice[animal] + "'");
});

// repeat route
app.get('/repeat/:action/:repeatingTime', function (req, res) {
    var times = (Number)(req.params.repeatingTime);
    var actions = "";
    for (var i = 0; i < times; i++) {
        actions = actions.concat(req.params.action + " ");
    }
    res.send(actions);
});

// other route
app.get('/*', function (req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

// start express app
app.listen(3000, function () {
    console.log("App is running!");
});