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

})

server.get('/api/users/:id', (req, res) => {

})
server.delete('/api/users/:id', (req, res) => {

})
server.put('/api/users/:id', (req, res) => {

})

server.listen(5000, ()=>{
	console.log('\n***Server is listening on port 5000\n')
})
