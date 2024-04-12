import { Router} from "express";
import { addUser } from "../controllers/users.controller.js";

// Create recipes router
const router = Router();


// Define routes
router.post('/users', addUser);


export default router;