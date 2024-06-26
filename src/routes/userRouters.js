const express = require('express');
const {register} = require('../controllers/userControllers.js');
const router = express.Router();

router.post('/api/v1/user/register',register)

module.exports = router;