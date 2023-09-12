/** @format */

import prisma from "../../config/prismaClient.js";

const allUserData = async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        posts: true,
      },
    });
    if (users.length <= 0) {
      const error = new Error("No Data Found!");
      error.status = 400;
      next(error);
      return;
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    next(error);
  }
};

export { allUserData };
