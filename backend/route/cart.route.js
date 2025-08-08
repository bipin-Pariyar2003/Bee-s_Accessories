// route/cart.route.js
import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import User from "../model/users.model.js";

console.log("Cart Route Loaded");

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  try {
    const populatedUser = await req.user.populate("cart.product");
    res.json(populatedUser.cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to get cart", error: err.message });
  }
});

router.put("/", requireAuth, async (req, res) => {
  try {
    const { cart } = req.body;
    req.user.cart = cart;
    await req.user.save();
    res.json({ message: "Cart saved" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save cart", error: err.message });
  }
});

export default router;
