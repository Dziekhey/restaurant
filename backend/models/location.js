import { Schema, model} from 'mongoose';

const locationSchema = new Schema({
    region: {type: String, required: true}, 
    town: {type: String, required: true}, 
    street: {type: String, required: true}, 
});

export const LocationModel = model('Location', locationSchema, 'locations');