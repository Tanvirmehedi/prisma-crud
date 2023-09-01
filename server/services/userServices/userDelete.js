/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const deleteSingleUser = async (req, res) => {
  try {
    const { userEmail } = req.params;

    const findUser = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!findUser) {
      res.json({
        message: "User Not FOund",
      });
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
  } catch (error) {
    myError(error, res);
  }
};

export { deleteSingleUser };
