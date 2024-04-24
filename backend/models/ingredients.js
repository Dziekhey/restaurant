import { Schema, model } from "mongoose";

const ingredientSchema = new Schema({
  category: { type: String, required: true },
  sub_category: [String],
});

export const ingredientModel = model(
  "Ingredient",
  ingredientSchema,
);
