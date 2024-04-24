import { Router } from "express";
import {
  addMenu,
  deleteMenu,
  getAllMenu,
  getMenu,
  updateMenu,
} from "../controllers/menu.controller.js";
import multer from "multer";

// Create multer upload middleware
const upload = multer({ dest: "uploads" });

//Create users router
const router = Router();

//Define routes
router.post("/:restaurantId", upload.single('image'), addMenu);

router.get("/", getAllMenu);

router.get("/:id", getMenu);

router.patch("/:id", updateMenu);

router.delete("/:id", deleteMenu);

export default router;
