import mongoose from "mongoose";

const accessorySchema = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
  price: Number,
  image: String,
  quantity: Number,
});

const Accessory = mongoose.model("Accessory", accessorySchema);
export default Accessory;
