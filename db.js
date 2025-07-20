const mongoose = require("mongoose");
require("dotenv").config();

// define MongoDB connection URL
// const mongoURL = process.env.LOCAL_DB_URL;
const mongoURL = process.env.DB_URL;

//Set up connection
mongoose.connect(mongoURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintain a default connection
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Conncted to MongoDB server");
});

db.on("error", () => {
  console.log("Error to MongoDB server");
});

db.on("disconnected", () => {
  console.log("MongoDB server Disconnected");
});

// Export db connection

module.exports = db;
