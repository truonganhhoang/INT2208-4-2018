var express = require("express");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/time_demo");

app.set("view engine", "ejs");

var timeSchema = new mongoose.Schema({
    time: {
        type: Date,
        default: Date.now()
    }
});

var Time = mongoose.model("Time", timeSchema);

app.get("/", function (req, res) {
    Time.findOne().exec(function (error, time) {
        if (!error) {
            // time.time.setDate(time.time.getDate() + 30);
            var now = new Date(Date.now());
            var now1;
            now.setDate(now.getDate() + 3);
            now1 = now.getTime() - Date.now();
            res.send(now1.toString());
        } else console.log(error)
    })
});

app.listen(3000, function () {
    console.log("App is running!");
});

// Time.create({}, function (error, time) {
//     if (!error) {
//         console.log("success!")
//     } else console.log(error)
// });