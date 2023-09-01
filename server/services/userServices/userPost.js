/** @format */

import prisma from "../../config/prismaClient.js";
import { myError } from "../../Errors/error.js";

const userPost = async (req, res) => {
  try {
    const { email, profile, posts } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      const createUser = await prisma.user.create({
        data: {
          email: email,
          profile: {
            create: profile,
          },
          posts: {
            create: [posts],
          },
        },
        include: {
          profile: true,
          posts: true,
        },
      });

      res.json({
        message: "User Sucess Fully Created",
        user: createUser,
      });
      return;
    }

    res.json({
      message: "You Are Already In Database",
      user: existingUser,
    });
  } catch (error) {
    myError(error, res);
  }
};

export { userPost };
