import { Schema, model} from 'mongoose';

const userSchema = new Schema({
    userName: {type: String, required: true},
    userEmail: {type: String, required: true},
    userTelephone: {type: String, required: true},
    userPassword: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now()} 
});

export const UserModel = model('User', userSchema, 'users');