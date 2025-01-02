const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const Validator = require("validator");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const ALLOWED_UPDATES = ["firstName", "lastName", "age", "gender", "skills"];

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  const { firstName, lastName, emailId, password } = req.body;

  try {
    const passwordHashed = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHashed,
    });
    validateSignUpData(req);
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!Validator.isEmail(emailId)) throw new Error("Email id is not valid");

    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$8590");

      res.cookie("token", token);

      res.send("Login successful");
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

app.get("/profile", async (req, res) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    const decodedMessage = await jwt.verify(token, "DEV@Tinder$8590");
    const { _id } = decodedMessage;
    const user = await User.findById(_id);

    if (!user) {
      throw new Error("User does not exist");
    }

    res.send("Logged in user is " + user);
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.send("User not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

app.delete("/user", async (req, res) => {
  const userID = req.body.userID;

  try {
    await User.findByIdAndDelete(userID);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const data = req.body;
  const userId = req.params?.userId;

  const isUpdatesAllowed = Object.keys(data).every((k) =>
    ALLOWED_UPDATES.includes(k)
  );

  try {
    if (!isUpdatesAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.skills.length > 10) {
      throw new Error("Update not allowed");
    }

    await User.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("Update user successfully");
  } catch (err) {
    res.status(400).send("Update failed" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Successfully established the database connection");
    app.listen(4000, () => {
      console.log("Server is successfully listening on port 4000");
    });
  })
  .catch((err) => {
    console.error("Something went wrong");
  });
