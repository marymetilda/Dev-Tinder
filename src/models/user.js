const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  about: {
    type: String,
    default: "This is a default about",
  },
  photoURL: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
  },
});

module.exports = mongoose.model("User", userSchema);
