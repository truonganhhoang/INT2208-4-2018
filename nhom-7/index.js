var User                  = require("./models/User"),          // User model
    Deck                  = require("./models/Deck"),          // Deck model
    express               = require("express"),                // express framework
    mongoose              = require("mongoose"),               // mongo database
    passport              = require("passport"),               // authentication
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),         // authentication
    expressSession        = require("express-session"),        // user session
    passportLocalMongoose = require("passport-local-mongoose");// authentication

mongoose.connect("mongodb://localhost/tinycards");

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
// home

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

app.get("/:username", isLoggedIn, function (req, res) {
    if (req.params.username !== req._passport.session.user) {
        return res.redirect("/" + req._passport.session.user);
    }
    User.findOne({username: req._passport.session.user}, function (error, user) {
        if (!error) {
            res.render("2", {user: user});
        } else console.log(error)
    })
});

// handle user sign up
app.post("/register", function (req, res) {
    User.register({username: req.body.username, email: req.body.email}, req.body.password, function (error, user) {
        if (error) {
            return res.send(error);
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/" + user.username);
        })
    })
});

// handle user log in
app.post("/login", passport.authenticate("local", {
    failureRedirect: "/"
}), function(req, res){
    res.redirect("/" + req.body.username);
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
    res.redirect("/" + req._passport.session.user);
}

// Running app
app.listen(3000, function () {
    console.log("App is running!");
});

// add decks
Deck.create({
    name: "Harry Potter Quotes",
    themeImage: "https://d9np3dj86nsu2.cloudfront.net/image/1df6d9ae25f8614222e016b836bdbbb8",
    description: "One from each character that is either insightful, humorous, or memorable.",
    favourites: 598
});