const app = require("./index");
const connect = require("./config/db");
app.listen(2345, async () => {
  try {
    await connect();
    console.log("Database connection successfully");
  } catch (err) {
    console.log("database error");
  }
});
