import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

const menuSchema = new Schema({
    restaurantName: {type: String, required: true},
    foodName: {type: String, required: true},
    foodImage: {type: String, required: true},
    foodDescription: {type: String, required: true},
    foodPrice: {type: Number, required: true},
    foodCategory: {type: String, required: true},
    foodIngredient: [String],
    availability: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()},
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
});

export const MenuModel = model('Menu', menuSchema, 'menus');