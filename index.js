require('dotenv').config();
const {app} = require('./app.js')
const {connect} = require('./src/config/database.js')
const port = process.env.PORT;

app.listen(port, (req,res) => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
connect()