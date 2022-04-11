const express = require("express");
const app = express();
app.use(express.json());
const booksController = require("./controllers/books.controller");
app.use("/", booksController);
module.exports = app;
