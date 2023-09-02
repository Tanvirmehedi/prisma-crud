/** @format */

import prisma from "../../config/prismaClient.js";

const deleteSingleUser = async (req, res, next) => {
  try {
    const { userEmail } = req.params;

    const findUser = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!findUser) {
      const error = new Error("User Not Found");
      error.status = 400;
      next(error);
      return;
    }

    await prisma.$transaction(async (prismaClient) => {
      await prismaClient.profile.deleteMany({
        where: { userEmail: userEmail },
      });
      await prismaClient.post.deleteMany({
        where: { authorEmail: userEmail },
      });
      await prismaClient.user.deleteMany({
        where: { email: userEmail },
      });
    });

    res.json({
      message: "User deleted & Associated Profile and Posts Deleted.",
    });
  } catch (err) {
    const error = new Error(err);
    error.status = 500;
    next(error);
  }
};

export { deleteSingleUser };
