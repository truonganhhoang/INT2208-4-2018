const mongoose = require('mongoose')

const DeckSchema = new mongoose.Schema({
	owner: String,
	title: String,
	description: String,
	lessons: [{
		orderNum: Number,
		cards: [{
			front: String,
			back: String,
			box: Number
		}]
	}]
})

module.exports = mongoose.model('Deck', DeckSchema)