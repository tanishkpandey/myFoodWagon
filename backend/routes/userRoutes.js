const express = require("express");
const {
  loginUser,
  signupUser,
  forgotPassword,
  getDishes
} = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/signup", signupUser);
userRouter.post("/forgot-password", forgotPassword);

module.exports = userRouter;