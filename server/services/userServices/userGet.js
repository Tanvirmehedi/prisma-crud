/** @format */

import { myError } from "../../Errors/error.js";
import prisma from "../../config/prismaClient.js";

const allUserData = async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
        posts:true
      },
    });
    if (users.length <= 0) {
      res.json({ message: "No Data Found" });
      return;
    } else {
      res.json(users);
    }
  } catch (error) {
    myError(error, res);
  }
};

export { allUserData };
