/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const allPostDelete = async (req, res) => {
  try {
    const { postEmail } = req.params;
    const findPost = await prisma.post.findMany({
      where: {
        authorEmail: postEmail,
      },
    });

    if (!findPost) {
      res.json({
        message: "Email Or PostID is Incorrect",
        postData: {
          postEmail,
        },
      });
      return;
    }

    res.json({
      message: "Your Post Details!",
      data: findPost,
    });
  } catch (err) {
    myError(err, res);
  }
};

const deletePost = async (req, res) => {
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
        message: "Email Or PostID is Incorrect",
        postData: {
          postEmail,
          postId,
        },
      });
      return;
    }

    res.json({
      message: "Your Post Details!",
      data: findPost,
    });
  } catch (err) {
    myError(err, res);
  }
};

export { deletePost, allPostDelete };
