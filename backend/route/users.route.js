import express from "express";
import { signup } from "../controller/users.controller.js";
const router = express.Router();

router.post("/signup", signup);
export default router;
