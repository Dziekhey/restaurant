import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

const restaurantSchema = new Schema({
    ownerId: {type: mongoose.Schema.Types.ObjectId},
    restaurantName: {type: String, required: true},
    restaurantEmail: {type: String, required: true},
    restaurantTelephone: {type: String, required: true},
    restaurantDescription: {type: String, required: true},
    cuisineType: {type: String, required: true},
    openingDays: {type: String, required: true},
    openingHours: {type: String, required: true},
    location: {
        region: {type: String, required: true},
        city: {type: String, required: true},
        town: {type: String, required: true}
},
    status: {type: String, required: true}
});

export const RestaurantModel = model('Restaurant', restaurantSchema, 'restaurants');