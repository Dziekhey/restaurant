import { MenuModel } from "../models/menu.js";
import { RestaurantModel } from "../models/restaurant.js";
import { ObjectId } from "mongodb";

export const addMenu = async (req, res, next) => {
  try {
    // Check if restaurant exist
    const restaurantExist = await RestaurantModel.exists({
      _id: req.params.restaurantId,
    });
    if (!restaurantExist) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    // Add restaurant to database
    const createResult = await MenuModel.create({
      ...req.body,
      image: req.file.filename,
    });
    //  Update restaurant menu
    await RestaurantModel.findByIdAndUpdate(req.params.restaurantId, {
      $push: { menus: createResult._id },
    });
    // Return response
    res.status(201).json(createResult);
  } catch (error) {
    next(error);
  }
};

export const getAllMenu = async (req, res, next) => {
  try {
    //  Get all menu from database
    const findResults = await MenuModel.find();

    // Return response
    res.status(200).json(findResults);
  } catch (error) {
    next(error);
  }
};

export const getMenu = async (req, res, next) => {
  try {
    // Get a single menu by id
    const findByIdResult = await MenuModel.findById(req.params.id);

    // Return 404 if no menu is found
    if (findByIdResult === null) {
      res.status(404).json({
        message: `Menu with ID: ${req.params.id} not found`,
      });
    } else {
      // Return response
      res.status(200).json(findByIdResult);
    }
  } catch (error) {
    next(error);
  }
};

export const updateMenu = async (req, res, next) => {
  try {
    // Get a menu by id
    const findByIdResult = { _id: new ObjectId(req.params.id) };
    const update = { $set: req.body };

    const newUpdate = await MenuModel.updateOne(findByIdResult, update);
    // Return response
    res.status(202).json(newUpdate);
  } catch (error) {
    next(error);
  }
};

export const deleteMenu = async (req, res, next) => {
  try {
    // Get a menu by id
    const findByIdResult = await MenuModel.findById(req.params.id);

    const owner = await findByIdResult.deleteOne({});

    // Return response
    res.status(200).json(owner);
  } catch (error) {
    next(error);
  }
};
