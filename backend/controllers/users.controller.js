import {UserModel} from '../models/user.js';
import { hashPassword} from '../helpers/auth.js';

export const addUser = async (req, res, next) => {
    try {
        //Check if name was entered
        const {userName, userEmail, userTelephone, userPassword} = req.body
        if (!userName) {
            return res.json({
                error: 'Name is required'
            })
        };

        //Check if password is good
        if (!userPassword || userPassword.length < 6) {
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };

        //Check if email exist
        const exist = await UserModel.findOne({userEmail});
        if (exist) {
            return res.json({
                error: 'Email already exist'
            })
        };

        //Check if telephone number is up to 10
        if (!userTelephone || userTelephone.length !== 10) {
            return res.json({
                error: 'Telephone number is required and should be 10 characters long'
            })
        };


        //Add a user to the database
        const hashedPassword = await hashPassword(userPassword)
        const createResult = await UserModel.create({...req.body,
        userPassword: hashedPassword,});
        
        // Return response
        res.status(201).json(createResult);
    } catch (error) {
        next(error);
    }
};