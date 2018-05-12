const express = require("express");
const jsonParser = require("body-parser").json();
const app = express();

var control = require("./Control/control")

app.use((req, res, next) => {   // hỗ trợ nhận request post/get chứa cookie dạng json từ client
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  next();
});

app.get("/",(req,res) => res.send("hadfadfasdfsdf"));
app.get("/list/CardCollection",(req,res)=> control.sendListCardColection(res));
app.get("/CardCollection/cardID=:cardID",(req,res)=> control.sendCardCollection(req,res));
app.post("/newCardCollection",jsonParser,(req,res)=> control.createNewCardCollection(req,res) )


app.listen(9000, function () {
    console.log("server dang chay");
  });
  