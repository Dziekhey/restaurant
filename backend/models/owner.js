import mongoose from 'mongoose';
import { Schema, model} from 'mongoose';

const ownerSchema = new Schema({
    ownerName: {type: String, required: true},
    ownerEmail: {type: String, required: true},
    ownerTelephone: {type: String, required: true},
    ownerPassword: {type: String, required: true},
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
});

export const OwnerModel = model('Owner', ownerSchema, 'owners');