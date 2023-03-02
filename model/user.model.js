const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  difficulty: String,
  score:Number
});

const UserModel = mongoose.model("usermock_13", userSchema);

module.exports = { UserModel };
