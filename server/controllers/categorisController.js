/** @format */

import { deleteCategory } from "../services/categoryServices/deleteCategory.js";
import { getCategoris } from "../services/categoryServices/getCategory.js";
import { updateCategory } from "../services/categoryServices/updateCategory.js";
import { createCategory } from "../services/categoryServices/postCategory.js";

export const getCategory = getCategoris;
export const postCategory = createCategory;
export const deleteCategories = deleteCategory;
export const updateCategories = updateCategory;
