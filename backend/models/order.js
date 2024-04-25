import mongoose, { Schema, model } from "mongoose";

const orderSchema = new Schema({
  restaurantId: { type: String, required: true },
  restaurant_name: { type: String, required: true },
  image: { type: String, required: true },
  foodname: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalprice: { type: Number, required: true },
  status: { type: String },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  telephone: { type: String, required: true },
});

export const OrderModel = model("Order", orderSchema);
