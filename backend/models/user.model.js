const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique: true,
    },
    role: {
      type: String,
      required: [true, "Please add a role"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  { timesstamps: true }
);

module.exports = mongoose.model("User", userSchema);
