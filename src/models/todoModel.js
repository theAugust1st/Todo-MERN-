const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        maxLength: [30, "title must be at least 30 characters"]
    },
    tasks:{
        type: Array,
        required : true,
    }
},{
    timestamps: true,
})

const Todo = mongoose.model('todo',todoSchema);

module.exports = Todo;