import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

const restaurantSchema = new Schema({
    restaurantName: {type: String, required: true},
    restaurantEmail: {type: String, required: true},
    restaurantTelephone: {type: String, required: true},
    restaurantDescription: {type: String, required: true},
    cuisineType: {type: String, required: true},
    openingDays: {type: String, required: true},
    openingHours: {type: String, required: true},
    location: [{type: String, required: true}],
    status: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()},
    menuId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }],
    orderId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
});

export const RestaurantModel = model('Restaurant', restaurantSchema, 'restaurants');