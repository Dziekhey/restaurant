import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  // restaurantId: {type: mongoose.Schema.Types.ObjectId},
  image: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  availability: { type: String },
  ingredients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
    
}]
});

export const MenuModel = model("Menu", menuSchema);
