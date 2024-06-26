const User = require('../models/userModel.js');
const register = async (req,res)=>{
    const {name, email, password} = req.body;
    if(!(name && email && password)){
        res.status(404).json({
            success: false, 
            message: 'Please fill all the fields'
        })
    }
    const existing = await User.findOne({email: email});
    if(existing){
        res.status(404).json({
            success: false, 
            message: 'User already exists'
        })
    }
    const user = await User.create({name, email, password})
    res.status(201).json({
        success: true, 
        message: 'User created successfully'
    })
}
module.exports = {register}