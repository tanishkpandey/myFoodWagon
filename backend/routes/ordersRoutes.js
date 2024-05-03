const express = require("express");
const orderRouter = express.Router();
const {
  createOrder,
  getUserOrderHistory,
} = require("../controllers/orderControllers");

orderRouter.post("/ordercreate", createOrder);

orderRouter.get("/:userId/orderhistory", getUserOrderHistory);

module.exports = orderRouter;
