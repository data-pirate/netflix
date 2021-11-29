const mongoose = require("mongoose");

const schema = mongoose.Schema;

const List = new schema(
  {
    title: { type: String, required: true },
    content: { type: Array, required: true },
    type: {type:String },
    genre: {type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model('lists', List);
