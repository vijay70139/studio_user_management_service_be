const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
console.log(mongoUri, "mongoUri===============");
mongoose.connect(mongoUri);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

module.exports = db;
