import { Router } from "express";
import { addMenu, deleteMenu, getAllMenu, getMenu, updateMenu } from "../controllers/menu.controller.js";


//Create users router
const router = Router();


//Define routes
router.post('/', addMenu);

router.get('/', getAllMenu);

router.get('/:id', getMenu);

router.patch('/:id', updateMenu);

router.delete('/:id', deleteMenu);



export default router;