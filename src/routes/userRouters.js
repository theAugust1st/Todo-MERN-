const express = require("express");
const { userRegister, getUsers, userUpdate } = require("../controllers/userControllers.js");
const { createTodo } = require("../controllers/todoControllers.js");
const router = express.Router();

router.post("/userRegister", userRegister);
router.get("/getUsers", getUsers);
router.put('/userUpdate/:id',userUpdate)
router.post('/createTodo', createTodo)

module.exports = router;