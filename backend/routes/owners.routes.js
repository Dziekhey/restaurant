import { Router } from "express";
import {
  addOwner,
  deleteOwner,
  getAllOwners,
  getOwner,
  loginOwner,
  updateOwner,
} from "../controllers/owners.controller.js";

//Create owners router
const router = Router();

//Define routes
router.post("/register", addOwner);

router.post("/login", loginOwner);

router.get("/", getAllOwners);

router.get("/:id", getOwner);

router.patch("/:id", updateOwner);

router.delete("/:id", deleteOwner);

export default router;
