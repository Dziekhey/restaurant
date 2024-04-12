import { UserModel } from "../models/user.js";
import {OwnerModel} from "../models/owner.js";
import { LoginModel } from "../models/login.js";
import { comparePassword } from "../helpers/auth.js";


export const logIns = async (req, res, next) => {
    try {
        const {userEmail, userPassword} = req.body;
        //Check if user exists
        const user = await UserModel.findOne({userEmail});
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        };

        //Check if password match
        
        const match =  await comparePassword(userPassword, user.userPassword);
        if (match) {
            return res.json('Password match');
        };
       
    } catch (error) {
        next(error);
    }
};