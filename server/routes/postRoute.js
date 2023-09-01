/** @format */

import express from "express";
import {
  singlePostCreate,
  singlePostDelete,
  singlePostData,
  singlePostUpdate,
  getPosts,
  allPostsDelete
} from "../controllers/postController.js";

const router = express.Router();

router.post("/users/posts", singlePostCreate);
router.get("/users/posts/:postEmail", getPosts);
router.get("/users/posts/:postEmail/:postId", singlePostData);
router.put("/users/posts/:postEmail/:postId", singlePostUpdate);
router.delete("/users/posts/:postEmail/:postId", singlePostDelete);
router.delete("/users/posts/:postEmail", allPostsDelete);

export { router as postRouter };
