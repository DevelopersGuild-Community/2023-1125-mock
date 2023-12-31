const express = require('express')
const cors = require('cors')
const postRouter = require('./posts')
const profileRouter = require('./profile')

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/posts', postRouter)
app.use('/profile', profileRouter)

// run
app.listen(3080)
console.log('listen on port 3080')
console.log('http://localhost:3080')
