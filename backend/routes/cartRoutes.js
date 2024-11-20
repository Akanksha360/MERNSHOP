const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const router = express.Router();

// Get cart by user ID
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate("items.product");
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Add item to cart
router.post("/:userId", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Find user's cart
    let cart = await Cart.findOne({ user: req.params.userId });

    if (cart) {
      // If cart exists, check if the product is already in the cart
      const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

      if (itemIndex > -1) {
        // Update quantity if item exists
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new item if it doesn't exist
        cart.items.push({ product: productId, quantity });
      }
    } else {
      // Create a new cart if it doesn't exist
      cart = new Cart({
        user: req.params.userId,
        items: [{ product: productId, quantity }],
      });
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update item quantity in cart
router.put("/:userId", async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

    if (itemIndex > -1) {
      // Update quantity if item exists
      cart.items[itemIndex].quantity = quantity;

      if (quantity === 0) {
        // Remove item if quantity is set to 0
        cart.items.splice(itemIndex, 1);
      }
    } else {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    await cart.save();
    res.status(200).json({ message: "Cart updated", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Remove item from cart
router.delete("/:userId/:productId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex((item) => item.product.toString() === req.params.productId);

    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      await cart.save();
      return res.status(200).json({ message: "Item removed from cart", cart });
    }

    res.status(404).json({ message: "Item not found in cart" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Clear cart
router.delete("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ user: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
