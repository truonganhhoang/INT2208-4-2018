var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose"); // authentication

var UserSchema = new mongoose.Schema({
    name: String,
    userName: String,
    userAvatar: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    bio: String,
    learningData: [{
        favourite: Boolean,
        progress: [{
            front: String,
            cardId: String,
            correct: Number
        }],
        deck: {
            type: mongoose.Schema.Types.ObjectId, // deck's id
            ref: "Deck"
        }
    }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);