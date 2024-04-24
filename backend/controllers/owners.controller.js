import { ObjectId } from "mongodb";
import { comparePassword, hashPassword } from "../helpers/auth.js";
import { OwnerModel } from "../models/owner.js";
import jwt from "jsonwebtoken";

//Register Endpoints for owners
export const addOwner = async (req, res, next) => {
  try {
    //Check if name was entered
    const { name, email, telephone, password } = req.body;
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    //Check if password is good
    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    //Check if email exist
    const exist = await OwnerModel.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "Email already exist",
      });
    }

    //Check if telephone number is up to 10
    if (!telephone || telephone.length !== 10) {
      return res.status(400).json({
        error: "Telephone number is required and should be 10 characters long",
      });
    }

    // const restaurant = new RestaurantModel();
    //Add a user to the database
    const hashedPassword = await hashPassword(password);
    // restaurant.save().then((savedRestaurant) => {
    //   const newOwner = OwnerModel({
    //     name: name,
    //     telephone: telephone,
    //     email: email,
    //     password: hashedPassword,
    //     restaurantId: savedRestaurant,
    //   });
    //   newOwner.save();
    //   return res.status(201).json(newOwner);
    // });
    const createResult = await OwnerModel.create({
      ...req.body,
      password: hashedPassword,
    });

    // Return response
    res.status(201).json(createResult);
  } catch (error) {
    next(error);
  }
};

//Login Endpoint
export const loginOwner = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //Check if owner exists
    const owner = await OwnerModel.findOne({ email });
    if (!owner) {
      return res.status(404).json({
        error: "No owner found",
      });
    }

    //Check if password match
    const match = await comparePassword(password, owner.password);
    if (match) {
      jwt.sign(
        { email: owner.email, id: owner._id, name: owner.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          return res.status(200).json({ owner, token });
        }
      );
    } else {
      return res.status(404).json({
        error: "Password don't match",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Endpoint for getting profile
// export const getProfile = (req, res, next) => {
//   const { token } = req;
// };

// Endpoint for all owners
export const getAllOwners = async (req, res, next) => {
  try {
    //  Get all owners from database
    const findResults = await OwnerModel.find().populate({
      path: "restaurant",
      populate: {
        path: "menus",
        model: "Menu",
      },
    });

    // Return response
    res.status(200).json(findResults);
  } catch (error) {
    next(error);
  }
};

//Endpoint for getting an owner
export const getOwner = async (req, res, next) => {
  try {
    // Get an owner by id
    const findByIdResult = await OwnerModel.findById(req.params.id).populate({
      path: "restaurant",
      populate: {
        path: "menus",
        model: "Menu",
      },
    });
    // Return 404 if no owner is found
    if (findByIdResult === null) {
      res.status(404).json({
        message: `Owner with ID: ${req.params.id} not found`,
      });
    } else {
      // Return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

//Endpoint for updating an owner
export const updateOwner = async (req, res, next) => {
  try {
    // Get a user by id
    const findByIdResult = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: { ...req.body },
    };

    const newUpdate = await OwnerModel.updateOne(findByIdResult, update);
    // Return response
    res.status(202).json(newUpdate);
  } catch (error) {
    next(error);
  }
};

//Endpoint for deleting an owner
export const deleteOwner = async (req, res, next) => {
  try {
    // Get an owner by id
    const findByIdResult = await OwnerModel.findById(req.params.id);

    const user = await findByIdResult.deleteOne({});

    // Return response
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
