const mongoose = require("mongoose");

// const users = require("../users.json");
const model = require("../model/user");

const User = model.User;
// POST user

const createUser = async (req, res) => {
  const user = new User(req.body); // This is new Instance for the first time only
  //   user.name = "Saurabh";
  //   user.username = "Saurabhchandel007";
  await user.save();
  res.status(201).send("User Added Succesfully");
};

// GET All Users
const getUsers = async (req, res) => {
  //   const users = await User.find({});   // this is use to add some condition like
  // I want to see user which has age grater than 50, so I can put it from backend also
  const users = await User.find();
  res.send(users);
};

// GET particular user
const getSingleUser = async (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  // console.log({ id });
  const user = await User.findById(id).exec();
  res.send(user);
};

// DELETE user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.send(user);
};

// Update user PUT
const updateUserPut = async (req, res) => {
  const id = req.params.id;
  // const user = await User.findByIdAndUpdate(id, req.body, { new: false });  // I tried but no changes with the results 
  const user = await User.findByIdAndUpdate(id, req.body);
  res.end("User Updated Success !");
};

// Update user PATCH
const updateUserPatch = (req, res) => {
  const id = req.params.id;
  //   const userIndex = users.findIndex((ele) => ele.id === id);
  //   const user = users[userIndex];
  //   users.splice(userIndex, 1, { ...user, ...req.body });
  //   res.send("Updated Successfuly !!");
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUserPut,
  updateUserPatch,
  deleteUser,
};
