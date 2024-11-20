const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Place a new order
router.post("/", async (req, res) => {
  const { user, products, totalAmount } = req.body;

  try {
    const newOrder = new Order({ user, products, totalAmount });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all orders for a user
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate("products.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update order status
router.put("/:id", async (req, res) => {
  const { status } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order status updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
