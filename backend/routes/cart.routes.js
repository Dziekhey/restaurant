import { Router } from "express";
import { addCart, deleteCart, getAllCarts, getCart, updateCart } from "../controllers/cart.controller.js";


//Create users router
const router = Router();


//Define routes
router.post('/', addCart);

router.get('/', getAllCarts);

router.get('/:id', getCart);

router.patch('/:id', updateCart);

router.delete('/:id', deleteCart);



export default router;