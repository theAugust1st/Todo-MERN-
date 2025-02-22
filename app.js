const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./src/routes/userRouters');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(userRouter);
module.exports = {app};