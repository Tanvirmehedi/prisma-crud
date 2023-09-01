/** @format */

import express from "express";

import {
  createUser,
  getUserData,
  updateUserData,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getUserData);
router.put("/users/:userEmail", updateUserData);
router.delete("/users/:userEmail", deleteUser);

export { router as userRouter };
