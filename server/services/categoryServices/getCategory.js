/** @format */

import prisma from "../../config/prismaClient.js";

export const getCategoris = async (req, res, next) => {
  try {
    const findCategories = await prisma.category.findMany({});
    if (findCategories <= 0) {
      const error = new Error("No Category Found");
      error.status = 404;
      next(error);
      return;
    }
    res.json({
      findCategories,
    });
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    next(error);
  }
};
