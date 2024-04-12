import { Router } from "express";
import { addOwner } from "../controllers/owners.controller.js";


//Create owners router
const router = Router()


//Define routes
router.post('/owners', addOwner);