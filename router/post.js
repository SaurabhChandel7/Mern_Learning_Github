const express = require("express");
const postController = require("../controller/post");

const postRouter = express.Router();

// but still it's not connect to server
postRouter
  .get("/", postController.getPosts)
  .get("/:id", postController.getSinglePost)
  .post("/", postController.createPost)
  .put("/:id", postController.updatePostPut)
  .patch("/:id", postController.updatePostPatch)
  .delete("/:id", postController.deletePost);

module.exports = postRouter;
