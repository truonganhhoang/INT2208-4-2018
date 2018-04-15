var User                  = require("./models/User"),          // User model
    Deck                  = require("./models/Deck"),          // Deck model
    express               = require("express"),                // express framework
    mongoose              = require("mongoose"),               // mongo database
    passport              = require("passport"),               // authentication
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),         // authentication
    expressSession        = require("express-session"),        // user session
    passportLocalMongoose = require("passport-local-mongoose");// authentication

var url = "mongodb+srv://admin:nopassword@cluster0-bmqym.mongodb.net";
mongoose.connect(url, {dbName: 'tinycards'});

var app = express();

// app configuration
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
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
app.get("/", isNotLoggedIn, function (req, res) {
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
app.get("/user/:username", isLoggedIn, function (req, res) {
    if (req.params.username !== req._passport.session.user) {
        return res.redirect("/user/" + req._passport.session.user);
    }
    User.findOne({username: req._passport.session.user}, function (error, user) {
        if (!error) {
            Deck.find({}, function (error1, decks) {
                if (!error1) {
                    res.render("2", {user: user, decks: decks});
                } else res.send("SOWETHING WENT WRONG WHEN LOAD DECKS DATA!")
            })
        } else res.send("SOMETHING WENT WRONG WHEN LOAD USERS DATA!")
    })
});

// about page (duy)
app.get("/press", function (req, res) {
    res.render("1-2");
});

// handle user sign up
app.post("/register", function (req, res) {
    User.register({username: req.body.username, name: req.body.name.substr(0, 35), email: req.body.email}, req.body.password, function (error, user) {
        if (error) {
            return res.send(error);
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/user/" + user.username);
        })
    })
});

// handle user log in
app.post("/login", passport.authenticate("local", {
    failureRedirect: "/"
}), function(req, res){
    res.redirect("/user/" + req.body.username);
});

// all other routes
app.get("/*", function (req, res) {
    res.redirect("/");
});

// middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } res.redirect("/");
}

function isNotLoggedIn(req, res, next) {
    if (req.isUnauthenticated()) {
        return next();
    }
    res.redirect("/user/" + req._passport.session.user);
}

// Running app
app.listen(3000, function () {
    console.log("App is running!");
});

// add decks
// Deck.create({
//     name: "House",
//     themeImage: "https://d9np3dj86nsu2.cloudfront.net/image/e53dcbd93f705d72c23fbac007760b84",
//     description: '',
//     favourites: 106
// });

// User.findByUsername("dung").then(function(user){
//     if (user){
//         user.setPassword("123456", function(){
//             user.save();
//             // res.status(200).json({message: 'password reset successful'});
//         });
//     } else {
//         // res.status(500).json({message: 'This user does not exist'});
//     }
// },function(err){
//     console.error(err);
// });