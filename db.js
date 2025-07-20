const mongoose = require('mongoose');

// define MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/hotels";

//Set up connection
mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintain a default connection
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Conncted to MongoDB server");
});

db.on('error',()=>{
    console.log("Error to MongoDB server");
});

db.on('disconnected',()=>{
    console.log("MongoDB server Disconnected");
});

// Export db connection

module.exports = db;
