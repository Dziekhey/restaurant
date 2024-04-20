import { CartModel } from "../models/cart.js";
import { ObjectId } from "mongodb";



export const addCart = async (req, res, next) => {
    try {
      // Check if user exist
      // const userExist = await UserModel.exists({ _id: req.params.restaurantId });
      // if (!userExist) {
      //   return res.status(404).json("User not found");
      // }
      // Add cart to database
      const createResult = await CartModel.create(req.body);
        //  Update user cart
      // await UserModel.findByIdAndUpdate(req.params.userId, {
      //   $push: { cart: createResult._id },
      // });
      // Return response
      res.status(201).json(createResult);
    } catch (error) {
      next(error);
    }
  };


  export const getAllCarts = async (req, res, next) => {
    try {
      //  Get all carts from database
      const findResults = await CartModel.find();
  
      // Return response
      res.status(200).json(findResults);
    } catch (error) {
      next(error);
    }
  };



  export const getCart = async (req, res, next) => {
    try {
      // Get a single cart by id
      const findByIdResult = await CartModel.findById(req.params.id);
  
      // Return 404 if no cart is found
      if (findByIdResult === null) {
        res.status(404).json({
          message: `Cart item with ID: ${req.params.id} not found`,
        });
      } else {
        // Return response
        res.status(200).json(findByIdResult);
      }
    } catch (error) {
      next(error);
    }
  };


  export const updateCart = async (req, res, next) => {
    try {
      // Get a cart item by id
      const findByIdResult = { _id: new ObjectId(req.params.id) };
      const update = { $set: req.body };
  
      const newUpdate = await CartModel.updateOne(findByIdResult, update);
      // Return response
      res.status(202).json(newUpdate);
    } catch (error) {
      next(error);
    }
  };


  export const deleteCart = async (req, res, next) => {
    try {
      // Get a cart item by id
      const findByIdResult = await CartModel.findById(req.params.id);
  
      const owner = await findByIdResult.deleteOne({});
  
      // Return response
      res.status(200).json(owner);
    } catch (error) {
      next(error);
    }
  };