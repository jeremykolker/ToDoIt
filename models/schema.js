const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema( {
    date: { type: String },
    time: { type: String },
    what: { type: String },
    where: { type: String },
    additional: { type: String },
})

const ToDoschema = mongoose.model('Todo', todoSchema)
module.exports = todoSchema




