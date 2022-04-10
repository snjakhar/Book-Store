const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    price: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("book", booksSchema);
