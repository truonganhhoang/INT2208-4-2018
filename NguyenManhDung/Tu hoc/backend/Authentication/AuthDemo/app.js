var User                  = require("./models/user"),
    express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Just find it",
    resave: false,
    saveUninitialized: false
}));
app.set("view engine", 'ejs');
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes
app.get("/", function (req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

// SIGN UP ROUTE
// show sign-up form
app.get("/register", function (req, res) {
    res.render("register");
});

//handling user sign up
app.post("/register", function (req, res) {
    User.register({username: req.body.username}, req.body.password, function (error, user) {
        if (error) {
            console.log(error);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/secret");
        });
    })
});

// LOGIN ROUTE
// login form
app.get("/login", function (req, res) {
    res.render("login");
});

// handle login
// middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

// run app
app.listen(3000, function () {
    console.log("App is running")
});