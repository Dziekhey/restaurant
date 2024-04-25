import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  // restaurantId: {type: mongoose.Schema.Types.ObjectId},
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: [
      "All",
      "Seafood",
      "Barbecue and Grilling",
      "Desserts and Sweets",
      "Breakfast and Brunch",
      "Street Food",
      "Gourmet and Fine Dining",
    ],
  },
  availability: { type: String },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
});

export const MenuModel = model("Menu", menuSchema);
