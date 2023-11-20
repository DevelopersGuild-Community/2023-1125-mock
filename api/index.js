const express = require('express')
const postRouter = require('./posts')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/posts', postRouter)

// run
app.listen(3080)
console.log('listen on port 3080')
console.log('http://localhost:3080')
