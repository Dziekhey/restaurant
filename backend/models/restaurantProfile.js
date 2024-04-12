import { Schema, model} from 'mongoose';

const restaurantprofileSchema = new Schema({
    personalId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Owner'
    },
    restaurantId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    menuId: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }],
    orderId: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    createdAt: {type: Date, default: () => Date.now()},
    updatedAt: {type: Date, default: () => Date.now()}
});

export const RestaurantprofilesModel = model('Restaurantprofile', restaurantprofileSchema, 'restaurant-profiles');