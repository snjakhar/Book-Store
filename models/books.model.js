const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
  {
    BookName: { type: String, required: true },
    AuthorName: { type: String, required: true },
    Price: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("book", booksSchema);
