// implement your API here

const express = require('express')
const db = require('./data/db')

const server = express()

server.use(express.json())

server.get('/api/users', (req, res) => {
	db.find()
		.then((result) => {
			res.status(200).json(result)
		})
		.catch((err) => {
			console.log('err', err)
			res.status(500).json({ error: "The users information could not be retrieved." })
		})
})
server.post('/api/users', (req, res) => {
	const userBody = req.body
	console.log('user',userBody)
	if(!userBody.name || !userBody.bio){
		res.status(400).json({ errorMessage: "Please provide name and bio for the user."})
	}
	
	db.insert(userBody)
	.then((result) => {
		console.log('result',result)
		if(result){
			res.status(201).json(result)
		}
	})
	.catch((err) => {
		console.log('err', err)
		res.status(500).json({ error: "There was an error while saving the user to the database" })
	})
})

server.get('/api/users/:id', (req, res) => {
	const userId = req.params.id
	console.log('userId', userId)
	
	db.findById(userId)
	.then((user) => {
		console.log('resId', user)
		if(typeof(user) === "undefined"){
			res.status(404).json({ message: "The user with the specified ID does not exist." })
		}else{
			res.status(200).json(user)
		}
	})
	.catch((err) => {
		console.log('err', err)
		res.status(500).json({ error: "The user information could not be retrieved." })
	})
})

server.delete('/api/users/:id', (req, res) => {
	const userId = req.params.id
	db.remove(userId)
	.then((countDeleted) => {
		console.log('res', countDeleted)
		if(countDeleted > 0){
			res.status(202).json({message: 'Delete Successful'})
		}else{
			res.status(404).json({message: 'record not found'})
		}
	})
	.catch((err) => {
		res.status(500).json({ message: `there was an error deleting ${err}`})
	})
})
server.put('/api/users/:id', (req, res) => {
	const userId = req.params.id
	const userBody = req.body
	
	if(!userBody.name || !userBody.bio){
		res.status(400).json({ errorMessage: "Please provide name and bio for the user."})
	}
	
	db.update(userId, userBody)
	.then((user) => {
		console.log('user', user)
		if(user > 0){
			res.status(200).json( user)
		}else{
			res.status(404).json( { message: "The user with the specified ID does not exist." })
		}
	})
	.catch((err) => {
		res.status(500).json({ error: "The user information could not be modified." })
	})
})

server.listen(5000, ()=>{
	console.log('\n***Server is listening on port 5000\n')
})
