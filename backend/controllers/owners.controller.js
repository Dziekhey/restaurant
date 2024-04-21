import { ObjectId } from "mongodb";
import { comparePassword, hashPassword } from "../helpers/auth.js";
import { OwnerModel } from "../models/owner.js";

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
    //Check if user exists
    const user = await OwnerModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: "No user found",
      });
    }

    //Check if password match

    const match = await comparePassword(password, user.password);
    if (match) {
      return res.status(200).json("Password match");
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
export const getProfile = (req, res, next) => {
  const { token } = req;
};

// Endpoint for logging out
export const logOut = async (req, res, next) => {};

//Endpoint for getting an owner
export const getOwner = async (req, res, next) => {
  try {
    // Get a user by id
    const findByIdResult = await OwnerModel.findById(req.params.id).populate(
      "restaurantId"
    );
    // Return 404 if no user is found
    if (findByIdResult === null) {
      res.status(404).json({
        message: `User with ID: ${req.params.id} not found`,
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
      $set: { restaurant: req.body.restaurant },
    };

    const newUpdate = await OwnerModel.updateOne(findByIdResult, update);
    // Return response
    res.status(202).json(newUpdate);
  } catch (error) {
    next(error);
  }
};

//Endpoint for deleting a user
export const deleteOwner = async (req, res, next) => {
  try {
    // Get a user by id
    const findByIdResult = await OwnerModel.findById(req.params.id);

    const user = await findByIdResult.deleteOne({});

    // Return response
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
