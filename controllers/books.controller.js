const express = require("express");
const Book = require("../models/books.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.send({ book }).status(200);
  } catch (err) {
    res.send(err).status(500);
  }
});
router.get("/search", async (req, res) => {
  const bookName = req.query.bookname;
  try {
    const books = await Book.find({ title: bookName });
    res.send({ books }).status(200);
  } catch (err) {}
});
router.get("/", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    res.send({ book }).status(200);
  } catch (err) {
    res.send({ err }).status(500);
  }
});

module.exports = router;
