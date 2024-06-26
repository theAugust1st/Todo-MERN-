const mongoose = require('mongoose');
const uri = process.env.DATABASE
const connect = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(uri)
        console.log('Connected to database');
        // console.log(connectionInstance) get knowledge about it more
        
    }catch(err){
        console.log(err);
    }
}
module.exports = {connect}