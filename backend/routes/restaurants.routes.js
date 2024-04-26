import { Router } from "express";
import multer from "multer";
import { addRestaurant, deleteRestaurant, getAllRestaurants, getRestaurant, updateRestaurant } from "../controllers/restaurants.controller.js";
import {multerSaveFilesOrg} from 'multer-savefilesorg'; 



//Create users router
const router = Router();

// Create multer upload middleware
const upload = multer({
    storage: multerSaveFilesOrg({
        serverPath: `https://savefiles.org/api/v1/uploads`,
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/admin/restaurants/images/*'
    })
});


//Define routes
router.post('/:ownerId', upload.single('image'), addRestaurant);

router.get('/', getAllRestaurants);

router.get('/:id', getRestaurant);

router.patch('/:id', updateRestaurant);

router.delete('/:id', deleteRestaurant);



export default router;