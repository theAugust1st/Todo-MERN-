const Todo = require("../models/todoModel.js");
// create a new todo
const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      tasks: req.body.tasks || [], // default empty array if no tasks provided in request body
    });
    if (!todo.title) {
      throw new Error("Title is required");
    }
    const createNewTodo = await todo.save();
    res.status(200).json({
      success: true,
      message: "Todo created successfully",
      data: createNewTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// get all the todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) {
      throw new Error("No todos found");
    }
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    if (error === "No todos found") {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    res.status(500).json({
      success: false,
    });
  }
};
// update a todo
const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!todoId) {
      res.status(404).json({
        success: false,
        message: "Todo ID not provided",
      })
    }
    const update = await Todo.findByIdAndUpdate(todoId, req.body);
    res.status(200).json({
      success: "true",
      message: "Todo has been update successfully",
    });
  } catch (error) {
    console.error(error.message);
  }
};
// delete a todo
const deleteTodo = async (req, res) => {
    try {
      const todoId = req.params.id;
      if (!todoId) {
        res.status(404).json({
          success: false,
          message: "Todo ID not provided",
        });
      }
      const deleteTodo = await Todo.findByIdAndDelete(todoId);
      if (!deleteTodo) {
        res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Todo has been deleted successfully",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

module.exports = { createTodo, getTodos, updateTodo , deleteTodo};
