var mongoose = require("mongoose");

var DeckSchema = new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId, // user's (author) id
        ref: "User"
    },
    description: String,
    themeImage: String,
    cards: [{
        front: String,
        back: String
    }],
    favourites: Number
});

module.exports = mongoose.model("Decks", DeckSchema);