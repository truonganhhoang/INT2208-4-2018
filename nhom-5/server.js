
var express = require("express");
var mysql = require("mysql");
var app = express();
app.use(express.static("images"));
app.use(express.static("css"));
app.use(express.static("js"));
app.use(express.static("music"));
app.use(express.static("fonts"));
app.set('views',__dirname + '/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1",
	database: "test"
});

connection.connect(function(err){
	if (err) {
		console.log("error ",err);
	}else{
		console.log("successful");
	}
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
app.get("/2.2", function(req, res){
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
