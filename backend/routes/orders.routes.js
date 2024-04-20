import { Router } from "express";
import { addOrder, deleteOrder, getAllOrders, getOrder, updateOrder } from "../controllers/orders.controller.js";


//Create users router
const router = Router();


//Define routes
router.post('/', addOrder);

router.get('/', getAllOrders);

router.get('/:id', getOrder);

router.patch('/:id', updateOrder);

router.delete('/:id', deleteOrder);



export default router;