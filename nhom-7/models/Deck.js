var mongoose = require("mongoose");

var DeckSchema = new mongoose.Schema({
    name: String,
    description: String,
    themeImage: String,
    cards: [{
        front: String,
        back: String
    }],
    favourites: Number
});

module.exports = mongoose.model("Decks", DeckSchema);