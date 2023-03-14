const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema( {
    date: { type: String },
    time: { type: String },
    task: { type: String },
    location: { type: String },
    completed: { type: Boolean }
})  

const Todoit = mongoose.model('Todo', todoSchema)
module.exports = Todoit
