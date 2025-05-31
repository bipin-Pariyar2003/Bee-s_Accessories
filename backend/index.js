import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import accesoryRoute from "./route/accessories.route.js";
import cors from "cors";
import usersRoute from "./route/users.route.js";

const app = express();
app.use(express.json());
app.use(cors());
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

//define routes
app.use("/accessories", accesoryRoute);
app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Server Started at port: ${port}`);
});
