const express = require("express");
const app = express();
app.use(express.json());
const booksController = require("./controllers/books.controller");
app.use("/books", booksController);
module.exports = app;
