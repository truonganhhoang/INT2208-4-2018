var expressSanitizer = require("express-sanitizer"),
    methodOverride   = require("method-override"),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    express          = require("express"),
    app              = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app"); // db name is restful_blog_app
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());                // forced to be after body-parser
app.use(express.static("public"));
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema); // 1 object is blog(s)

// RESTFUL ROUTES

app.get("/", function (req, res) {
    res.redirect("/blogs");
});


// index route
app.get("/blogs", function (req, res) {
    Blog.find({}, function (error, blogs) {
        if (error) {
            console.log("SOMETHING WENT WRONG!");
            console.log(error);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// new route
app.get("/blogs/new", function (req, res) {
    res.render("new")
});

// create route
app.post("/blogs", function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function (error, newPost) {
        if (error) {
            res.render("new")
        } else {
            res.redirect("/blogs");
        }
    });
});

// show route
app.get("/blogs/:id", function (req, res) {
    Blog.findById(req.params.id, function (error, post) {
        if (error) {
            res.redirect("/blogs");
        } else {
            res.render("show", {post: post})
        }
    });
});

// edit route
app.get("/blogs/:id/edit", function (req, res) {
    Blog.findById(req.params.id, function (error, blog) {
        if (error) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: blog});
        }
    })
});

// update route
app.put("/blogs/:id", function (req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body); // drop the script tag
    Blog.findByIdAndUpdate(req.params.id, req.body.blog ,function (error, blog) {
        if (error) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
});

// delete route
app.delete("/blogs/:id", function (req, res) {
    Blog.findByIdAndRemove(req.params.id, function (error) {
        if (error) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    })
});

// App is running
app.listen(3000, function () {
    console.log("App is running!");
});