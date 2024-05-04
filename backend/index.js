const express = require("express");
const userRouter = require("./routes/userRoutes");
const dishesRoutes = require("./routes/dishesRoutes");
const orderRouter = require("./routes/ordersRoutes");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://pandeytanishk:pandeytanishk@cluster0.os20vht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("DB connected successfully....."));

app.use("/api", userRouter);
app.use("/api", dishesRoutes);
app.use("/api", orderRouter);

app.listen(5000, () => {
  console.log("Your server is up and running on port 5000...");
});
