const express = require('express')

const app = express()

// connect to db
require('./db')

// use bodyparser to pass urls
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// routes
let pizzeriaRoutes = require('./routes/pizzeriaRoutes')

app.use('/api/pizzeria', pizzeriaRoutes)

app.listen(3000, console.log('Server started'))