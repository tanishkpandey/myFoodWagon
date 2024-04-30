const express = require("express");
const userRouter = require("./routes/userRoutes");
const dishesRoutes = require("./routes/dishesRoutes");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/foodwagon")
  .then(() => console.log("DB connected successfully....."));

app.use("/api", userRouter);
app.use("/api", dishesRoutes);

app.listen(5000, () => {
  console.log("Your server is up and running on port 5000...");
});
