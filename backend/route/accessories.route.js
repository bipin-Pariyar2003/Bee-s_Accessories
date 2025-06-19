import express from "express";
import { getAccessories } from "../controller/accessories.controller.js";

console.log("Accessories route loaded");
const router = express.Router();
router.get("/", getAccessories);
export default router;
