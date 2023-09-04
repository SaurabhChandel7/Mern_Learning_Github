const posts = require("../post.json");

const model = require("../model/post");

const Post = model.Post;

// POST Post
const createPost = (req, res) => {
  //   posts.push(req.body);
  const post = new Post(req.body);
  post.save();
  res.send("Post Added Succesfully");
};

// GET All posts
const getPosts = (req, res) => {
  res.send(posts);
};

// GET particular user
const getSinglePost = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const user = posts.find((ele) => ele.id === id);
  res.send(user);
};

// Update user PUT
const updatePostPut = (req, res) => {
  const id = +req.params.id;
  const postIndex = posts.findIndex((ele) => ele.id === id);
  posts.splice(postIndex, 1, { ...req.body, id: id });
  res.send("Updated Successfuly !!");
};

// Update user PATCH
const updatePostPatch = (req, res) => {
  const id = +req.params.id;
  const postIndex = posts.findIndex((ele) => ele.id === id);
  const user = posts[postIndex];
  posts.splice(postIndex, 1, { ...user, ...req.body });
  res.send("Updated Successfuly !!");
};

// DELETE user
const deletePost = (req, res) => {
  const id = +req.params.id;
  const postIndex = posts.findIndex((ele) => ele.id === id);
  posts.splice(postIndex, 1);
  res.send("Deleted Succefully");
};

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  updatePostPut,
  updatePostPatch,
  deletePost,
};
