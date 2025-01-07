import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  userProfile,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", userProfile);

export default router;
