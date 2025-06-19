import express from "express";
import { signup, login, logout } from "../controller/users.controller.js";

console.log("Users route loaded");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Example for users.route.js
console.log(
  "Users routes:",
  router.stack.map((layer) => layer.route?.path)
);

export default router;
