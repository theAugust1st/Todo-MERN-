const Todo = require('../models/todoModel.js')

const createTodo = async (req,res) =>{
    try {
        const todo = new Todo({
            title: req.body.title,
            tasks: req.body.tasks || []  // default empty array if no tasks provided in request body
        })
        if(!todo.title){
            throw new Error('Title is required')
        }
        const createNewTodo = await todo.save();
        res.status(200).json({
            success: true,
            message: 'Todo created successfully',
            data: createNewTodo
        })
    } catch (error) {
        console.error(error);
         res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {createTodo}