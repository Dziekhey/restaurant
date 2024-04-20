import { Router } from "express";
import multer from "multer";
import { addRestaurant, deleteRestaurant, getAllRestaurants, getRestaurant, updateRestaurant } from "../controllers/restaurants.controller.js";


// Create multer upload middleware
const upload = multer({dest: 'uploads'});

//Create users router
const router = Router();


//Define routes
router.post('/:ownerId', upload.single('image'), addRestaurant);

router.get('/', getAllRestaurants);

router.get('/:id', getRestaurant);

router.patch('/:id', updateRestaurant);

router.delete('/:id', deleteRestaurant);



export default router;