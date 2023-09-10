/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const createPost = async (req, res) => {
  try {
    const { email,title } = req.body;
    const findUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      res.json({
        message: "User Not In Database!",
        user: email,
      });
      return;
    }

    const createPost =await prisma.post.create({
      data: {
        authorEmail: email,
        title
      },
    });

    res.json({
      message: "Find The User in Database",
      user: createPost,
    });
  } catch (error) {
    myError(error, res);
  }
};

export { createPost };
