import mongoose, { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
  image: {type: String, required: true},
  name: { type: String, required: true},
  email: { type: String, required: true},
  telephone: { type: String, required: true},
  description: { type: String, required: true},
  cuisineType: { type: String, required: true},
  openingDays: { type: String, required: true},
  openingHours: { type: String, required: true},
  region: { type: String, required: true},
  city: { type: String, required: true},
  town: { type: String, required: true},
  status: { type: String, required: true},
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
