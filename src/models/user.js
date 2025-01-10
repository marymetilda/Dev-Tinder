const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
      minLength: 4,
      maxLength: 25,
      trim: true,
    },
    lastName: {
      type: String,
      maxLength: 25,
      trim: true,
    },
    emailId: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error("Enter a valid email id");
        }
      },
    },
    password: {
      type: String,
      trim: true,
      validate: (value) => {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a strong password");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
      trim: true,
    },
    gender: {
      type: String,
      validate: (value) => {
        if (!["male", "female", "other"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    about: {
      type: String,
      default: "This is a default about",
      maxLength: 250,
      trim: true,
    },
    photoURL: {
      type: String,
      default: "https://www.360legal.in/wp-content/uploads/2021/01/nobody.jpg",
      validate: (value) => {
        if (!validator.isURL(value)) {
          throw new Error("Enter a valid photo URL");
        }
      },
      trim: true,
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$8590", {
    expiresIn: "7d",
  });

  return token;
};

userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );

  return isPasswordValid;
};

module.exports = mongoose.model("User", userSchema);
