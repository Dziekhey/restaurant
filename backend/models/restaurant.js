import mongoose, { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
  restaurantName: { type: String},
  restaurantEmail: { type: String},
  restaurantTelephone: { type: String},
  restaurantDescription: { type: String},
  cuisineType: { type: String},
  openingDays: { type: String},
  openingHours: { type: String},
  region: { type: String},
  city: { type: String},
  town: { type: String},
  status: { type: String},
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  menus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
    },
  ],
});

export const RestaurantModel = model(
  "Restaurant",
  restaurantSchema,
  // "restaurants"
);
