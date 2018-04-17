var Deck                  = require("./models/Deck"),          // Deck model
    User                  = require("./models/User"),          // User model
    express               = require("express"),                // express framework
    mongoose              = require("mongoose"),               // mongo database
    passport              = require("passport"),               // authentication
    bodyParser            = require("body-parser"),
    cookieParser          = require("cookie-parser"),
    LocalStrategy         = require("passport-local"),         // authentication
    expressSession        = require("express-session"),        // user session
    passportLocalMongoose = require("passport-local-mongoose");// authentication

var url = "mongodb+srv://admin:nopassword@cluster0-bmqym.mongodb.net";
mongoose.connect(url, {dbName: 'tinycards'});
var app = express();
// app configuration
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({
    secret: "123456",       // random text
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize()); // authentication configuration
app.use(passport.session());    // authentication configuration

passport.use(new LocalStrategy(User.authenticate()));   // authentication
passport.serializeUser(User.serializeUser());           // authentication
passport.deserializeUser(User.deserializeUser());       // authentication

// ROUTES
// home (not logged in)

app.get("/home", isNotLoggedIn, function (req, res) {
    User.find({}, function (error, users) {
        if (!error) {
            Deck.find({}, function (error1, decks) {
                if (!error1) {
                    return res.render("1", {users: users, decks: decks})
                } else res.send("SOMETHING WENT WRONG WITH DECKS!")
            })
        } else res.send("SOMETHING WENT WRONG WITH USERS!")
    })
});

// home (after logged in)
app.get("/home/:username", isLoggedIn, function (req, res) {
    if (req.params.username !== req._passport.session.user) {
        return res.redirect("/home/" + req._passport.session.user);
    }
    User.findOne({username: req._passport.session.user}).populate("learningData.deck").exec(function (error, user) {
        if (!error) {
            Deck.find({}).populate("author").exec(function (error1, decks) {
                if (!error1) {
                    res.cookie('userID', user._id);
                    res.render("2", {user: user, decks: decks});
                } else res.send("SOWETHING WENT WRONG WHEN LOAD DECKS DATA!")
            })
        } else res.send("SOMETHING WENT WRONG WHEN LOAD USERS DATA!")
    });
});

// about page (duy)
app.get("/press", function (req, res) {
    res.render("1-2");
});

// get user data for ANGULAR
app.get("/getdata", isLoggedIn, function (req, res) {
    User.findOne({username: req._passport.session.user}, function (error, user) {
        if (!error) {
            res.send(user);
        } else {
            res.send("SOMETHING WENT WRONG!");
            console.log(error);
        }
    })
});

// set user data for ANGULAR
app.put("/updatedata", bodyParser.json(), function (req, res) {
    User.findOneAndUpdate({username: req._passport.session.user}, {
        name: "???",
        username: "???",
        email: "???"
    }, function (error, user) {
        if (!error) {
            res.redirect("/home");
        } else {
            res.send("SOMETHING WENT WRONG WHEN YOU UPDATE!");
            console.log(error);
        }
    });
});

// handle user sign up
app.post("/register", bodyParser.json(), function (req, res) {
    User.register({
        username: req.body.username,
        name: req.body.name.substr(0, 35),
        email: req.body.email
    }, req.body.password, function (error, user) {
        if (error) {
            return res.send(error);
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/home/" + user.username);
        })
    })
});

// handle user log in
app.post("/login", passport.authenticate("local", {
    failureRedirect: "/home"
}), function (req, res) {
    res.redirect("/home/" + req.body.username);
});

// all other routes
app.get("/*", function (req, res) {
    res.redirect("/home");
});

// change user's password
app.put("/home/:username", function (req, res) {
    User.findByUsername(req.params.username).then(function (user) {
        if (user) {
            user.setPassword(req.body.newpassword, function () { // newpassword là thuộc tính name của input tag
                user.save();
                res.render("/");
            });
        } else {
            res.send("SOMETHING WENT WRONG WITH USERS!")
        }
    }, function (err) {
        console.error(err);
    });
});

// middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

function isNotLoggedIn(req, res, next) {
    if (req.isUnauthenticated()) {
        return next();
    }
    res.redirect("/home/" + req._passport.session.user);
}

// Running app
app.listen(3000, function () {
    console.log("App is running!");
});

// add decks

// app.get("/api/deck/:id", function (req, res) {
//     Deck.findOne({ _id: req.params.id }).populate("author").exec(function (error, deck) {
//         if (!error) {
//             User.findOne({ username: deck.author.username }).populate("learningData.deck").exec(function (error1, author) {
//                 if (!error1) {
//                     res.send(deck);
//                 } else {
//                     res.send({
//                         err: "id_not_found",
//                         message: "IO ERROR: deck id "
//                     });
//                     console.log(error1);
//                 }
//             })
//         } else console.log(error);
//     });
// });