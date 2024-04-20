import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const menuSchema = new Schema({
  restaurantId: {type: mongoose.Schema.Types.ObjectId},
  foodName: { type: String, required: true },
  foodImage: { type: String, required: true },
  foodDescription: { type: String, required: true },
  foodPrice: { type: Number, required: true },
  foodCategory: { type: String, required: true },
  foodIngredients: [{
    category: { type: String, required: true },
    sub_category: [String],
  }],
});

export const MenuModel = model("Menu", menuSchema, "menus");
