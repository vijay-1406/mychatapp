const mongoose = require("mongoose");
const colors = require("colors");
//const dotenv = require("dotenv")
const dotenv = require("dotenv").config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://vijay-1406:vijaysome@cluster0.d1zgzyj.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;