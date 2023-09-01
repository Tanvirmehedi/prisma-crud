/** @format */

import { deleteSingleUser } from "../services/userServices/userDelete.js";
import { allUserData } from "../services/userServices/userGet.js";
import { userPost } from "../services/userServices/userPost.js";
import { updateSingleUser } from "../services/userServices/userUpdate.js";
// Create a new user and profile

const createUser = userPost;

// Get all users
const getUserData = allUserData;

// Delete a user
const deleteUser = deleteSingleUser;

// Update a user's email
const updateUserData = updateSingleUser;

export { createUser, getUserData, updateUserData, deleteUser };
