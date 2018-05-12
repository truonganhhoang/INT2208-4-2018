var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");

// one-many

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);
// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "nguyenmanhdungtk@gmail.com",
    name: "Dung Nguyen",
});

newUser.posts.push({
    title: "Great anime",
    content: "You can try Franxx"
});

newUser.save(function (error, user) {
    if (error) {
        console.log(error);
    } else {
        user.posts.push({
            title: "Should we play this game?",
            content: "Well, I wouldn't play it if I were you!"
        });
        user.save(function (error, user) {
            if (!error) console.log(user);f
        })
    }
});

// var newPost = new Post({
//     title: "Great anime",
//     content: "You can try Franxx"
// });
//
// newPost.save(function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });