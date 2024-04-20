import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  menuId: { type: mongoose.Schema.Types.ObjectId},
  userId: {type: mongoose.Schema.Types.ObjectId},
  selected_ingredients: [String]
 
});

export const CartModel = model("Cart", cartSchema, "carts");
