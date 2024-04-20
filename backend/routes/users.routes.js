import { Router} from "express";
import { addUser, deleteUser, getUser, loginUser, updateUser } from "../controllers/users.controller.js";
import { verifyToken } from "../helpers/auth.js";

// Create recipes router
const router = Router();


// Define routes
router.post('/register', addUser);

router.post('/login', loginUser);

router.get('/profile', getUser, verifyToken);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);


export default router;