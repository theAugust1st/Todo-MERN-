const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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
userSchema.pre('save', async function (next){
    const user = this;
    if(!user.isModified('password'))
        return next();
    const hashedPassword = await bcrypt.hash(user.password);
    user.password = hashedPassword;
    next();
})

const User = mongoose.model('user',userSchema);

module.exports = User;