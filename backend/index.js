import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

// connection to mongoDB database
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to the database successfully");
} catch (error) {
  console.error("Error connecting to the database:", error);
}

app.listen(port, () => {
  console.log(`Server Started at port: ${port}`);
});
