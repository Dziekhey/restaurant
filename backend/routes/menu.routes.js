import { Router } from "express";
import {
  addMenu,
  deleteMenu,
  getAllMenu,
  getMenu,
  updateMenu,
} from "../controllers/menu.controller.js";
import multer from "multer";
import {multerSaveFilesOrg} from 'multer-savefilesorg'; 


//Create users router
const router = Router();


// Create multer upload middleware
const upload = multer({
  storage: multerSaveFilesOrg({
      serverPath: `https://savefiles.org/api/v1/uploads`,
      apiAccessToken: process.env.SAVEFILESORG_API_KEY,
      relativePath: '/admin/menus/images/*'
  })
});

//Define routes
router.post("/:restaurantId", upload.single('image'), addMenu);

router.get("/", getAllMenu);

router.get("/:id", getMenu);

router.patch("/:id", updateMenu);

router.delete("/:id", deleteMenu);

export default router;
