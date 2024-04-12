import { Schema, model} from 'mongoose';

const restaurantSchema = new Schema({
    restaurantName: {type: String, required: true},
    restaurantEmail: {type: String, required: true},
    restaurantTelephone: {type: String, required: true},
    restaurantDescription: {type: String, required: true},
    cuisineType: {type: String, required: true},
    openingDays: {type: String, required: true},
    openingHours: {type: String, required: true},
    locationId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    status: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()}
});

export const RestaurantModel = model('Restaurant', restaurantSchema, 'restaurants');