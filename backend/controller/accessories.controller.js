import Accessory from "../model/accessories.model.js";

export const getAccessories = async (req, res) => {
  try {
    const accessories = await Accessory.find();
    res.status(200).json(accessories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching accessories", error });
  }
};
