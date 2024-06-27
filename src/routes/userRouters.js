const express = require("express");
const { userRegister, getUsers } = require("../controllers/userControllers.js");
const router = express.Router();

router.post("/userRegister", userRegister);
router.get("/getUsers", getUsers);

module.exports = router;