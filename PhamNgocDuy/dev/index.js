var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var storage = require('node-persist');
var fs = require('fs');
var multer = require('multer');
// var http = require('http');
// var path = require('path');
app.listen(3000);
console.log("Server is listening on port 3000...");

// form process
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// localStorage
storage.init();

// static html/css/js file
app.use(express.static('public'));
//cookie
app.use(cookieParser());

// EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// allow post from other server (for testing only)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});


// multer
var Mstorage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null,  '' + Date.now() + '-' + file.originalname)
    }
});
var upload = multer({ storage: Mstorage }).single('image'); //multer settings
app.post('/api/upload/image/', upload, function (req, res, next) {
    console.log(req.file);
    if (req.file.mimetype === "image/jpg" || req.file.mimetype === "image/png"){
        res.send({
            message: "done",
            fileName: req.file.filename
        });
    } else {
        res.send({
            err: "type_not_match"
        });
    }
    
});



//routing

//ejs render
app.get("/ejs/:page", function (req, res) {
    res.render(req.params.page, {});

});

// root routing
app.get("/", function (req, res) {
    if (!req.cookies.userID) {
        // guest
        res.sendFile(__dirname + "/public/" + "1.html");
    } else {
        // logged in
        res.sendFile(__dirname + "/public/" + "2.html");
    }
});

//log out 
app.get("/logout", function (req, res) {
    res.clearCookie("name");
    res.clearCookie("bio");
    res.redirect("/");
});

app.get('/getDesk/:id', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var desksList = [];
    storage.getItem("desksList", function (err, value) {
        desksList = value;
    });
    var resID = parseInt(req.params.id);
    var deskIndex = desksList.findIndex(function (d) { return d.id === resID });

    if (deskIndex === -1) {
        res.send({
            err: "NULL: desk id not found in DB"
        });
    } else {
        res.send(desksList[deskIndex]);
    }
});
app.get('/get/DesksList', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var data = storage.getItem("desksList", function (err, value) {
        res.send(value);
    });
});

app.get('/getUser/:userID', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    //DB get
    var userListData;
    storage.getItem("userList", function (err, value) {
        userListData = value;
    });

    const UserList = require('./src/UserList');
    var userList = new UserList(userListData);
    var user = userList.getUserByID(parseInt(req.params.userID));
    if (user != null) {
        res.send(user);
    } else {
        res.send({
            message: "UserID not found"
        });
    }

});
app.get("/deleteDesk/:id", function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var desksList = [];
    storage.getItem("desksList", function (err, value) {
        desksList = value;
    });
    var resID = parseInt(req.params.id);
    var deskIndex = desksList.findIndex(function (d) { return d.id === resID });

    if (deskIndex === -1) {
        res.send({
            message: "NULL: desk id not found in DB"
        });
    } else {
        desksList.splice(deskIndex, 1);
        storage.setItem("desksList", desksList);
        res.redirect("/profile");
        res.send({
            message: "Đã xóa thành công"
        });
    }
});

// post method
app.post('/profile', urlencodedParser, function (req, res) {
    var name = req.body.name;
    var bio = req.body.bio;
    res.cookie("name", name, { maxAge: 86400000 });
    res.cookie("bio", bio, { maxAge: 86400000 });
    if (name === "Duy") {
        storage.setItem("name", "Duy");
    }

    res.send("Receive with name (" + name + ") and bio (" + bio + ") and storage.name=" + storage.getItem("name") + "<a href='/action-profile'>GO</a> ");
    // res.redirect('/action-profile');
});

// create new collection to DB
app.post('/create/new', bodyParser.json(), function (req, res) {
    var resJSON = {
        message: "this is default message",
    }

    var userID = req.body.userID;
    var createNew = req.body.createNew;
    var desk = req.body.desk;
    var desksList;
    storage.getItem("desksList", function (err, value) {
        desksList = value;
    });
    var deskIndex = desksList.findIndex(function (d) { return d.id === desk.id });

    if (deskIndex === -1) {
        desk.id = desksList.length > 0 ? desksList[desksList.length - 1].id + 1 : 1;
        desksList.push(desk);
        storage.setItem("desksList", desksList);
        console.log("ADD desk: " + desk.title);
        resJSON.message = "SUCCESS";
    } else if (!createNew) {
        desksList[deskIndex] = desk;
        storage.setItem("desksList", desksList);
        console.log("UPDATE desk: " + desk.title);
        resJSON.message = "SUCCESS";
    }
    res.send(resJSON);
});


// update profile
app.post('/profile/update', bodyParser.json(), function (req, res) {
    var resJSON = {
        message: "this is default message",
    }
    var data = req.body;
    var userList;
    storage.getItem("userList", function (err, value) {
        userList = value;
    });
    var userIndex = userList.findIndex(function (u) { return u.userID === data.userID });
    if (userIndex === -1) {
        resJSON.message = "Tạo user thành công";
        console.log("user create");
        userList.push(data);
    } else {
        userList[userIndex] = data;
        resJSON.message = "Đã cập nhật thông tin";
        console.log("user update");
    }

    // console.log(userList);
    storage.setItem("userList", userList);
    res.send(resJSON);
});

// update profile-pass
app.post('/profile/passupdate', bodyParser.json(), function (req, res) {
    var resJSON = {
        message: "this is default message",
    }
    var data = req.body;
    var userList;
    storage.getItem("userList", function (err, value) {
        userList = value;
    });
    var userIndex = userList.findIndex(function (u) { return u.userID === data.userID });
    if (userIndex === -1) {
        resJSON.message = "User không tồn tại";
        console.log("user not exist");
    } else {
        var user = userList[userIndex];
        if (data.currentPass === user.passWord) {
            if (data.newPass != null && data.newPass != "" && data.newPass === data.repeatPass) {
                user.passWord = data.newPass;
                resJSON.message = "Đã cập nhật mật khẩu";
                console.log("user pass update");
            } else {
                resJSON.message = "NULL PASS or repeat pass is not the same as new pass";
                console.log("NULLpass or repeat pass fail");
            }
        } else {
            resJSON.message = "Current password You've enter does not match your current password";
            console.log("Current password fail");
        }

    }

    // console.log(userList);
    storage.setItem("userList", userList);
    res.send(resJSON);
});

// update profile-pass
app.post('/login', bodyParser.json(), function (req, res) {
    var resJSON = {
        message: "this is default message",
    }
    var data = req.body;
    var userList;
    storage.getItem("userList", function (err, value) {
        userList = value;
    });
    var userIndex = userList.findIndex(function (u) { return u.userName === data.userName });
    if (userIndex === -1) {
        resJSON.message = "User không tồn tại";
        console.log("user not exist");
    } else {
        var user = userList[userIndex];
        if (data.passWord === user.passWord) {
            resJSON.message = "LOGGED IN";
            console.log(user.userName + "LOGGED IN");
        } else {
            resJSON.message = "Current password You've enter does not match your current password";
            console.log("Current password fail");
        }

    }

    // console.log(userList);
    storage.setItem("userList", userList);
    res.send(resJSON);
});

// angular routing
app.all('*', (req, res) => {
    console.log(`Angular request: ${req.originalUrl}`);
    res.status(200).sendFile(__dirname + "/public/ng/index.html");
});