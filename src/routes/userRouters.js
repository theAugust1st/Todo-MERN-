const express = require('express');
const {userRegister} = require('../controllers/userControllers.js');
const router = express.Router();

router.post('/api/v1/userRegister',userRegister);

module.exports = router;