const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim:true,
    },
    email:{
        type: String,
        require: true,
        trim:true,
        lowercase:true,
    },
    password:{
        type: String,
        require: true,
        minlength:6,
        maxlength:20
    }
})

const User = mongoose.model('user',userSchema);

module.exports = User;