const express = require('express');
const User = require('./src/models/userModel');
const app = express();
const userRouter = require('./src/routes/userRouters');
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/api/v1/user/register',userRouter);
module.exports = {app};