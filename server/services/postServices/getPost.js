/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const getAllPosts = async (req, res) => {
  try {
    const { postEmail } = req.params;
    const findPost = await prisma.post.findMany({
      where: {
        authorEmail: postEmail,
      },
    });
    if (!findPost) {
      res.json({
        message: "Email Or Id is Incorrect",
        input: {
          postEmail,
        },
      });
      return;
    }
    res.json({
      message: "Get The All Posts",
      findPost,
    });
  } catch (error) {
    myError(error, res);
  }
};

const getPost = async (req, res) => {
  try {
    const { postEmail, postId } = req.params;
    const findPost = await prisma.post.findFirst({
      where: {
        authorEmail: postEmail,
        id: postId,
      },
    });
    if (!findPost) {
      res.json({
        message: "Email Or Id is Incorrect",
        input: {
          postEmail,
          postId,
        },
      });
      return;
    }
    res.json({
      message: "Get The Single Post",
      findPost,
    });
  } catch (error) {
    myError(error, res);
  }
};

export { getPost, getAllPosts };
