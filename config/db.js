const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://BookStoreDb:1234@cluster0.hhnbn.mongodb.net/BookStore?retryWrites=true&w=majority"
  );
};
