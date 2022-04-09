const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    UserName: { type: String, required: true },
    AuthorName: { type: String, required: true },
    Price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("book", booksSchema);
