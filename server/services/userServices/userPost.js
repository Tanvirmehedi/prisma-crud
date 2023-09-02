/** @format */

import prisma from "../../config/prismaClient.js";

const userPost = async (req, res,next) => {
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
    const error = new Error("You Are Already In Database");
    error.status = 400;
    next(error)

  } catch (err) {
    const error = new Error("Something Went Wrong!")
    next(error)
  }
};

export { userPost };
