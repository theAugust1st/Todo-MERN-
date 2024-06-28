const express = require("express");
const { userRegister, getUsers, userUpdate } = require("../controllers/userControllers.js");
const { createTodo, getTodos, updateTodo , deleteTodo} = require("../controllers/todoControllers.js");
const router = express.Router();


// user routes
router.post("/userRegister", userRegister);
router.get("/getUsers", getUsers);
router.put('/userUpdate/:id',userUpdate)

// todo routes
router.post('/createTodo', createTodo);
router.get('/getTodos', getTodos);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id', deleteTodo);

module.exports = router;