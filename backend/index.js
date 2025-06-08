import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

import accesoryRoute from "./route/accessories.route.js";
import usersRoute from "./route/users.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const URI = process.env.MONGO_URI;
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database successfully"))
  .catch((error) => console.error("Error connecting to the database:", error));

// API routes
app.use("/accessories", accesoryRoute);
app.use("/users", usersRoute);

// Get __dirname in ES module (since you're using `type: "module"`)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend (from Vite's `dist`)
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

// Serve index.html for SPA routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
