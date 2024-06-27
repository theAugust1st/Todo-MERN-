const User = require("../models/userModel");

const userRegister = async (req, res) => {
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
};

module.exports = { userRegister };
