const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')

app.use(session({
	secret: 'donotgentleintothatgoodnight'
}))

app.use(bodyParser.json())

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/tynicardsdb')
.then(() => console.log('Database server up'))

const User = require('./models/users')	

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

app.listen(1234, () => console.log('Listening at port 1234'))