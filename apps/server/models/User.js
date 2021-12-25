const mongoose = require("mongoose");

const schema = mongoose.Schema;

const UserShema = new schema(
  {
    name: { type: String, required: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);


module.exports = mongoose.model("user", UserShema);