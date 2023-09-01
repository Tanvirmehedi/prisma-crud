/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const updatePost = async (req, res) => {
  try {
    const { postEmail, postId } = req.params;
    const { title } = req.body;
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
    } else if (findPost.title === title) {
      res.json({
        message: "New Title & Existing Title is Same",
        postData: {
          title,
        },
      });
      return;
    }

    const updatePost = await prisma.post.update({
      where: {
        id: postId,
        authorEmail: postEmail,
      },
      data: {
        title: {
          set: title,
        },
      },
    });

    res.json({
      message: "Update Your Post Details!",
      data: updatePost,
    });
  } catch (err) {
    myError(err, res);
  }
};

export { updatePost };
