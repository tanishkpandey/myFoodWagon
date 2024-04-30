const UserModel = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      res.send("User does not exists");
    }
    const ispasswordMatchingfromDB = await bcrypt.compare(
      password,
      user.password
    );
    if (ispasswordMatchingfromDB) {
      const token = jwt.sign({ userID: user._id }, "randomsecret");
      return res.status(200).json({
        user: user,
        token: token,
      });
    }
    return res.send(401).send("Incorrect login credentials");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const signupUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    console.log(email, password, name);
    const emailExists = await UserModel.findOne({ email: email });
    if (emailExists) {
      return res.status(200).send("User Already Exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });
    const saveUser = newUser.save();
    const token = jwt.sign({ userId: saveUser._id }, "randomsecret");
    return res.status(200).json({
      user: newUser,
      token: token,
    });
  } catch (error) {
    console.error(error);
  }
};

const forgotPassword = (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);

    res.send("THis is forgot password page").status(200);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  signupUser,
  loginUser,
  forgotPassword,
};
