const User = require("../models/userModel.js");
const asyncHandler = require("../utils/asyncHandler.js")
const userRegister = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      throw new Error("All fields must be provided");
    }
    const existance = await User.findOne({ email });
    if (existance) {
      throw new Error("User already exists");
    }
    const user = await User.create({ name, email, password });
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    if (error.message === "All fields must be provided") {
      return res.status(400).json({
        success: false,
        message: "please fill all the required fields",
      });
    }
    if (error.message === "User already exists") {
      return res.status(400).json({
        success: false,
        message: "User with the email already exists",
      });
    }
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

const getUsers = async (req,res)=>{
  try {
    const user = await User.find();
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
  }  
}
const userUpdate = async (req,res)=>{
  try {
    const id = req.params.id
    if(!id){
      throw new Error("User not found");
    }
    const update = await User.findByIdAndUpdate(id,req.body);
    res.status(200).json({
      success:true,
      message:"Your selected user is updated successfully."
    })
  } catch (error) {
    if(error.message === "User not found"){
      res.status(404).json({
        sucess: false,
        message: "User not found"
      })
    }
    res.status(500).json({
      success: false,
      message: "Something went wrong(in server error)"
    })
  }
}

module.exports = { userRegister , getUsers, userUpdate};
