const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
});

exports.Post = mongoose.model("Post", PostSchema); // in model "singular name"
