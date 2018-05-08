
var express = require("express");
var mysql = require("mysql");
var app = express();
app.use("/images",express.static(__dirname + "/images"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/music", express.static(__dirname + "/music"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.set('views',__dirname + '/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1",
	database: "test"
});



app.get("/", function(req, res){
	connection.query("SELECT * FROM words", function(error, rows, fields){
		if(error){
			console.log("Error in the query");
		}else{
			console.log("successful query");
		}
	});
	res.render("1.html");
	// res.send("Hi");
	// console.log("connected");
});

app.get("/2.html", function(req, res){
	connection.query("SELECT * FROM words", function(error, rows, fields){
		if(error){
			console.log("Error in the query");
		}else{
			console.log("successful query");
		}
	});
	res.render("2.html");
	// res.send("Hi");
	// console.log("connected");
});

app.get("/2.1.html", function(req, res){
	connection.query("SELECT * FROM words", function(error, rows, fields){
		if(error){
			console.log("Error in the query");
		}else{
			console.log("successful query");
		}
	});
	res.render("2.1.html");
	// res.send("Hi");
	// console.log("connected");
});
app.get("/2.2.html", function(req, res){
	connection.query("SELECT * FROM words", function(error, rows, fields){
		if(error){
			console.log("Error in the query");
		}else{
			console.log("successful query");
		}
	});
	res.render("2.2.html");
	// res.send("Hi");
	// console.log("connected");
});
app.get("/1.html", function(req, res){
	connection.query("SELECT * FROM words", function(error, rows, fields){
		if(error){
			console.log("Error in the query");
		}else{
			console.log("successful query");
		}
	});
	res.render("1.html");
	// res.send("Hi");
	// console.log("connected");
});
app.listen(3000);
