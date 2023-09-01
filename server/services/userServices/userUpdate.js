/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const updateSingleUser = async (req, res) => {
  try {
    const { userEmail } = req.params;

    const { email, profile, posts } = req.body;

    const existingUser = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
    });

    const checkUserBody = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      res.json({
        message: `${userEmail} Not found in Database`,
      });
      return;
    } else {
      if (checkUserBody) {
        res,
          json({
            message: `${email} is already in database !`,
          });
        return;
      }
      const updateUser = await prisma.user.update({
        where: {
          email: userEmail,
        },
        data: {
          email: email,
          profile: {
            update: profile,
          },
          posts: {
            update: {
              where: {
                id: email,
              },
              data: {},
            },
          },
        },
        include: {
          profile: true,
          posts: true,
        },
      });
      res.json({
        updateUser,
      });
    }
  } catch (error) {
    myError(error,res)
  }
};

export { updateSingleUser };
