
var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');
var app = express();
var arr = [];
// var tempArr;
var idTheme;
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
	database: "mydb"
});
var urlCodeParser = bodyParser.urlencoded({extended: false});


app.get("/", function(req, res){
	connection.query("SELECT * FROM themes", function(error, rows, fields){
		var arr = [];
		if (rows == null || rows.length == 0) {
			var ele = {
				word: "",
				mean: ""
			};
		}
		res.render("1",{cards: rows});
	});

});
app.get("/show", function(req, res){
	idTheme = req.param("id");
	var sel = "SELECT *,(SELECT theme FROM themes WHERE idTheme=words.idTheme)theme FROM words WHERE idTheme = " + idTheme;
	connection.query(sel, function(error, rows, fields){

		res.render("5",{cards: rows});
	});
});
app.get("/edit", function(req, res){
	var sel = "SELECT *,(SELECT theme FROM themes WHERE idTheme=words.idTheme)theme FROM words WHERE idTheme = " + idTheme;
	connection.query(sel, function(error, rows, fields){

		res.render("6",{cards: rows});
	});
});
app.get("/learn", function(req, res){
	idTheme = req.param("id");
	var sel = "SELECT * FROM words WHERE idTheme = " + idTheme;
	connection.query(sel, function(error, rows, fields){

		res.render("2",{front: rows[0].word, back: rows[0].mean});
	});
});
app.get("/test", function(req, res){
	res.render("3");
});
app.get("/chucmung", function(req, res){
	res.render("4");
});
app.post('/clicked', (req, res) => {
	console.log("dabam");
});
app.get('/clicks', (req, res) => {
	
  	connection.query("SELECT * FROM words WHERE idTheme = " + idTheme, function(error, rows, fields){
  		console.log("idTheme ", idTheme);
  		console.log("rows: ",rows);
		res.send(rows);
		return;
	});
});

app.post('/save', (req, res) => {
	var body = "";
	req.on('data', function (chunk) {
		
    	body += chunk;
    });
    req.on('end', function () {
    	var tempArr = JSON.parse(body);
	    var sql = "DELETE FROM words WHERE idTheme = " + idTheme +";";
	    connection.query(sql, function(error, result){

			if(error) console.log(error);
		});
	    var sql = "INSERT INTO words(word, mean, idTheme)VALUES ";
	    for(var i = 0; i < tempArr.length; i++){
	    	if((tempArr[i].word != "" || tempArr[i].word != null) && (tempArr[i].mean != "" || tempArr[i].mean != null)){
	    		if (i == tempArr.length-1) {
	    		 	sql += "(" + "'"+tempArr[tempArr.length-1].word +"'"+ "," + "'"+tempArr[i].mean +"'" + "," + idTheme +") ";
		    	}else
		    		sql += "(" + "'"+tempArr[i].word +"'"+ "," + "'"+tempArr[i].mean +"'" + "," + idTheme +"), ";
	    	}

	    }
	   
	    
	    console.log(sql);
	    connection.query(sql, function(error, result){
	    	console.log(result);
			if(error) console.log(error);
		});
	   	console.log(tempArr);
    });
   
});
app.get("/addTheme",function(req,res){
	res.render("7");
});
app.post('/create', (req, res) => {
	var body = "";
	req.on('data', function (chunk) {
		
    	body += chunk;
    });
    req.on('end', function () {
    	var id;
    	var tempArr = JSON.parse(body);
    	
	    var sql1 = "INSERT INTO themes(theme)VALUES ('" + tempArr[0].word +"')";
	    console.log("lenh insert theme: ",sql1);
	    connection.query(sql1, function(error, result){
	    	console.log("sau khi insert: ",result);
			if(error) console.log(error);
		});
		var results;
        var sql2 = "SELECT idTheme FROM themes WHERE theme='"+ tempArr[0].word+"'";
        console.log("lenh tim idTheme: ",sql2);
		connection.query(sql2, function(error, data){
			console.log("sau khi tim: ", data);
			if(data) console.log(data);
			results= JSON.parse(JSON.stringify(data));
			id = results[0].idTheme;
			console.log("results--------: " + id + " --------");
			var sql = "INSERT INTO words(word, mean, idTheme)VALUES ";
		    setTimeout(function(){},1000);
		    for(var i = 1; i < tempArr.length; i++){
		    	if((tempArr[i].word != "" || tempArr[i].word != null) && (tempArr[i].mean != "" || tempArr[i].mean != null)){
		    		if (i == tempArr.length-1) {
		    		 	sql += "(" + "'"+tempArr[tempArr.length-1].word +"'"+ "," + "'"+tempArr[i].mean +"'" + "," + id +") ";
			    	}else
			    		sql += "(" + "'"+tempArr[i].word +"'"+ "," + "'"+tempArr[i].mean +"'" + "," + id +"), ";
		    	}

		    }
		   
		    
		    console.log("lenh insert vao words: ", sql);
		    connection.query(sql, function(error, result){
		    	if (result) 
		    		console.log("sau khi words: ",result);
				if(error) console.log(error);
			});
		});
	    
	   	
    });
   
});
app.listen(3000);