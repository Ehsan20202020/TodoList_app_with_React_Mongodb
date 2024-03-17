const mongoose = require('mongoose')
const mogoose = require('mongoose')

const TodooSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model("todos", TodooSchema)
module.exports = TodoModel