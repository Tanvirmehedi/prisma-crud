/** @format */

import { createPost } from "../services/postServices/createPost.js";
import {
  deletePost,
  allPostDelete,
} from "../services/postServices/deletePost.js";
import { getPost, getAllPosts } from "../services/postServices/getPost.js";
import { updatePost } from "../services/postServices/updatePost.js";

const singlePostCreate = createPost;
const singlePostDelete = deletePost;
const singlePostData = getPost;
const singlePostUpdate = updatePost;
const getPosts = getAllPosts;
const allPostsDelete = allPostDelete;
export {
  getPosts,
  singlePostCreate,
  singlePostDelete,
  singlePostUpdate,
  singlePostData,
  allPostsDelete,
};
