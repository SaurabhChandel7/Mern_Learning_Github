// this userRouter needs app.use("/users", userRouter); which will come from
// const app = express();  // this should be only 1 , but we can't make it 2 times as sever will be one
const express = require("express");
const userController = require("../controller/user");

const userRouter = express.Router();

// but still it's not connect to server
userRouter
  .get("/", userController.getUsers)
  .get("/:id", userController.getSingleUser)
  .post("/", userController.createUser)
  .put("/:id", userController.updateUserPut)
  .patch("/:id", userController.updateUserPatch)
  .delete("/:id", userController.deleteUser);

module.exports = userRouter;
