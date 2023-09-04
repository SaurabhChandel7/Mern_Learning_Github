const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  website: [String],
});

exports.User = mongoose.model("User", UserSchema); // in model "singular name"
