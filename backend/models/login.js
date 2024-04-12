import { Schema, model} from 'mongoose';

const loginSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
});

export const LoginModel = model('Login', loginSchema, 'logins');