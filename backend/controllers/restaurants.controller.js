import { ObjectId } from "mongodb";
import { OwnerModel } from "../models/owner.js";
import { RestaurantModel } from "../models/restaurant.js";

export const addRestaurant = async (req, res, next) => {
  try {
    // Check if user exist
    const userExist = await OwnerModel.exists({ _id: req.params.ownerId });
    if (!userExist) {
      return res.status(404).json("User not found");
    }
    // Add restaurant to database
    const createResult = await RestaurantModel.create(req.body);
    // Update user restaurant
    await OwnerModel.findByIdAndUpdate(req.params.ownerId, {
      $push: { restaurantId: createResult._id },
    });
    // Return response
    res.status(201).json(createResult);
  } catch (error) {
    next(error);
  }
};

export const getAllRestaurants = async (req, res, next) => {
  try {
    //  Get all restaurants from database
    const findResults = await RestaurantModel.find();

    // Return response
    res.status(200).json(findResults);
  } catch (error) {
    next(error);
  }
};

export const getRestaurant = async (req, res, next) => {
  try {
    // Get a single restaurant by id
    const findByIdResult = await RestaurantModel.findById(req.params.id);

    // Return 404 if no restaurant is found
    if (findByIdResult === null) {
      res.status(404).json({
        message: `Restaurant with ID: ${req.params.id} not found`,
      });
    } else {
      // Return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

export const updateRestaurant = async (req, res, next) => {
  try {
    // Get a restaurant by id
    const findByIdResult = { _id: new ObjectId(req.params.id) };
    const update = { $set: req.body };

    const newUpdate = await RestaurantModel.updateOne(findByIdResult, update);
    // Return response
    res.status(202).json(newUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurant = async (req, res, next) => {
  try {
    // Get a restaurant by id
    const findByIdResult = await RestaurantModel.findById(req.params.id);

    const owner = await findByIdResult.deleteOne({});

    // Return response
    res.status(200).json(owner);
  } catch (error) {
    next(error);
  }
};
