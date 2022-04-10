const app = require("./index");
const connect = require("./config/db");
const port = process.env.PORT || 2345;
app.listen(port, async () => {
  try {
    await connect();
    console.log("Database connection successfully");
  } catch (err) {
    console.log("database error", err);
  }
});
