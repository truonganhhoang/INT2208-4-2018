const express = require("express");
const jsonParser = require("body-parser").json();
const app = express();
const fileUpload = require('express-fileupload');
app.use(fileUpload());

var control = require("./Control/control")

app.use((req, res, next) => {   // hỗ trợ nhận request post/get chứa cookie dạng json từ client
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  next();
});

app.get("/", (req, res) => res.send("hadfadfasdfsdf"));
app.get("/list/CardCollection", (req, res) => control.sendListCardColection(res));
app.get("/list/FavoriteCardCollection/userName=:userName", (req, res) => control.sendListFavoriteCollectionCardColection(req,res));
app.get("/CardCollection/cardID=:cardID", (req, res) => control.sendCardCollection(req, res));
app.get("/addFavorite/collectionID=:collectionID/userName=:userName", (req,res)=> control.addFavoriteForUser(req,res));
app.get("/removeFavorite/collectionID=:collectionID/userName=:userName", (req,res)=> control.removeFavoriteForUser(req,res));
app.post("/newCardCollection", (req, res) => control.createNewCardCollection(req, res));
app.post("/signup", jsonParser, (req, res) => control.signUp(req, res));
app.post("/login", jsonParser, (req, res) => control.logIn(req, res));


app.listen(process.env.PORT || 9000);
