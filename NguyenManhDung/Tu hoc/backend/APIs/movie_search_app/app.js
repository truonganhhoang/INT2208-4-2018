var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

// search
app.get("/", function (req, res) {
    res.render("search");
});

// result
app.get("/results", function (req, res) {
    var movie = req.query.movie;
    request("http://www.omdbapi.com/?s=" + movie + "&apikey=f7148b5e", function (err, response, body) {
        if (!err && response.statusCode === 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});


// running app
app.listen(3000, function () {
    console.log("App is running!");
});