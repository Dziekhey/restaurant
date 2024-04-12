import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

const orderSchema = new Schema({
    foodName: {type: String, required: true},
    foodImage: {type: String, required: true},
    foodPrice: {type: Number, required: true},
    foodCategory: {type: String, required: true},
    foodIngredient: [String],
    totalAmount: {type: String, required: true},
    totalPrice: {type: String, required: true},
    orderStatus: {type: String, required: true},
    userName: {type: String, required: true},
    userTelephone: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()},
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
});

export const OrderModel = model('Order', orderSchema, 'orders');