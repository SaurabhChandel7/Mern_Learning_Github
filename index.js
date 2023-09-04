const express = require("express");
const userRouter = require("./router/user");
const postRouter = require("./router/post");
const app = express(); // this should be only 1
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

//connection with db

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    // "mongodb+srv://saurabh:KhKOnxPTw9h1FMqL@cluster0.slyaqgt.mongodb.net/ecommerce"
    process.env.MY_DATABASE
  );
  //this is my could url for db
  // I have to add same in my compass too
  console.log("connected ...");
}

// Body Parser
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/users", userRouter); // after wrting this we are able to use userRouter on server level
app.use("/posts", postRouter); // after wrting this we are able to use userRouter on server level

// React build file adding
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.listen(process.env.PORT);
