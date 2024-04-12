import { Router} from "express";
import {logIns} from "../controllers/logins.controller.js"


// Create recipes router
const router = Router();


//Define routes
router.post('/logins', logIns);


export default router;