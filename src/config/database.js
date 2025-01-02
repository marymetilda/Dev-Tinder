const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://MyLatestProject:KtE5x7w9lm9fddoH@mylatestproject.5k5yy.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB,
};
