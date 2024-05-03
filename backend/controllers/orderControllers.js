const Order = require("../model/Order");
const User = require("../model/User");

const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const order = new Order({
      user: user._id,
      items,
      totalAmount,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getUserOrderHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ user: userId });

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createOrder,
  getUserOrderHistory,
};
