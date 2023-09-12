/** @format */

import prisma from "../../config/prismaClient.js";

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const findCategoris = await prisma.category.findFirst({
      where: {
        name: name,
      },
    });

    if (!findCategoris) {
      const newCategory = await prisma.category.create({
        data: {
          name: name,
        },
      });
      res.json({
        message: "Category Is SucessFully Created",
        newCategory,
      });
      return;
    }
    res.json({
      message: "Category Already Exsist",
      category: findCategoris,
    });
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    next(error);
  }
};
