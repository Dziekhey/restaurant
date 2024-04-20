import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  menuId: { type: mongoose.Schema.Types.ObjectId },
  selected_ingredients: [String],
  totalAmount: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  orderStatus: { type: String, required: true },
  userName: { type: String, required: true },
  userTelephone: { type: String, required: true },
});

export const OrderModel = model("Order", orderSchema, "orders");
