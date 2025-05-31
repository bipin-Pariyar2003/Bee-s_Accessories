import express from "express";
import { getAccessories } from "../controller/accessories.controller.js";

const router = express.Router();
router.get("/", getAccessories);
export default router;
