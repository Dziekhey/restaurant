import mongoose, { Schema, model } from "mongoose";

const ownerSchema = new Schema({
  name: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

export const OwnerModel = model("Owner", ownerSchema);
