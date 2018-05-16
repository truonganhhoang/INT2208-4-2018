const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

const app = express()

app.use(session({
	secret: 'donotgentleintothatgoodnight'
}))

app.use(bodyParser.json())

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/tynicardsdb')
.then(() => console.log('Database server up'))

const User = require('./models/users')
const Deck = require('./models/decks')

app.post('/api/login', async (req, res) => {
	const {username, password} = req.body
	const result = await User.findOne({username, password})
	if(!result) {
		res.json({
			success: false
		})
		console.log('login failed')
	} else {
		res.json({
			success: true
		})
		req.session.user = username
		req.session.save()
		console.log(username, 'logged in')
	}
})

app.get('/api/logout', (req, res) => {
	console.log(req.session.user, 'logged out')
	req.session.destroy()
	res.json({
		success: true
	})
})

app.post('/api/register', async (req, res) => {
	const {username, password} = req.body
	const usernameExists = await User.findOne({username})
	if(usernameExists) {
		res.json({
			success: false,
			message: "Username already in use. Give another."
		})
		console.log("Register fail. Username already in use.")
		return
	}
	
	const user = new User({
		username,
		password
	})
	await user.save();
	
	req.session.user = username
	req.session.save()
	res.json({
		success: true
	})
	console.log("Register successfully.", username, 'logged in')
})

app.get('/api/loginstatus', (req, res) => {
	if(req.session.user == undefined) {
		res.json({
			status: false
		})
		return
	}
	res.json({
		status: true
	})
	
})

app.get('/api/currentuser', (req, res) => {
	res.json({
		username: req.session.user
	})
})

app.get('/api/getdecks', (req, res) => {
	Deck.find({owner: req.session.user},  function (error, decks) {
		if(!error) {
			res.send(decks)
		} else {
			console.log(error)
		}
	})
})

app.post('/api/getdeckbyid', (req, res) => {
	Deck.findById(req.body.id, function(error, deck) {
		if(!error) {
			res.send(deck)
		} else {
			console.log(error)
		}
	})
})

app.post('/api/getlesson', (req, res) => {
	console.log(req.body)
	Deck.findById(req.body.deckId, function(error, deck) {
		if(!error) {
			for(let lesson of deck.lessons) {
				if(lesson.orderNum == req.body.lessonOrderNum) {
					res.send(lesson)
				}
			}
		} else {
			console.log(error)
		}
	})
	
})

app.post('/api/updatelesson', (req, res) => {

	json = JSON.parse(req.body.lessons);
	
	Deck.updateOne(
		{ "_id" : mongoose.Types.ObjectId(req.body.deckId) },
		{ $set: { "lessons" : json} },
		function (error) {
			if(error) {
				console.log(error)
				res.json({
					success : false
				})
			} else {
				res.json({
					success : true
				})
			}
		}
	)
	
})

app.listen(1234, () => console.log('Listening at port 1234'))