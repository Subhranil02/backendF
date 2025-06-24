import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../multer.middleware.js"; // Assuming you have a multer setup for file uploads

const router = Router();
// Route to register a new user
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImages", maxCount: 5 },
  ]),
  registerUser
);

export default router;
