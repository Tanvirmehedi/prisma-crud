/** @format */

import express from "express";
import {
  deleteCategories,
  getCategory,
  postCategory,
  updateCategories,
} from "../controllers/categorisController.js";

const router = express.Router();

router.post("/category", postCategory);
router.get("/category", getCategory);
router.put("/category/:categoryId", updateCategories);
router.delete("/category/:categoryId", deleteCategories);

export { router as categoryRouter };
