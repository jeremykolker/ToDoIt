const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000
const mongoURI = 'mongodb://localhost:27017/budget'
const Todo = require('./models/todos.js')
const Todoschema = require('./models/schema.js')


app.use(express.urlencoded({extended: true}))

// first route, host address established \\
app.get("/todoit/", (req, res) => {
    res.send('hey')
})



  
app.use(express.urlencoded({extended: true}))

mongoose.connect(mongoURI)

app.listen(3000, () => {
  console.log("listening...")
})


