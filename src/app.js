const express = require("express");
const { connectDB } = require("./config/database");
const app = express();

const cookieParser = require("cookie-parser");

// const ALLOWED_UPDATES = ["firstName", "lastName", "age", "gender", "skills"];

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const users = await User.find({ emailId: userEmail });
//     if (users.length === 0) {
//       res.send("User not found");
//     } else {
//       res.send(users);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });

// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (err) {
//     res.status(400).send("Something went wrong!");
//   }
// });

// app.delete("/user", async (req, res) => {
//   const userID = req.body.userID;

//   try {
//     await User.findByIdAndDelete(userID);
//     res.send("User deleted successfully");
//   } catch (err) {
//     res.status(400).send("Something went wrong!");
//   }
// });

// app.patch("/user/:userId", async (req, res) => {
//   const data = req.body;
//   const userId = req.params?.userId;

//   const isUpdatesAllowed = Object.keys(data).every((k) =>
//     ALLOWED_UPDATES.includes(k)
//   );

//   try {
//     if (!isUpdatesAllowed) {
//       throw new Error("Update not allowed");
//     }

//     if (data?.skills.length > 10) {
//       throw new Error("Update not allowed");
//     }

//     await User.findByIdAndUpdate(userId, data, {
//       returnDocument: "after",
//       runValidators: true,
//     });
//     res.send("Update user successfully");
//   } catch (err) {
//     res.status(400).send("Update failed" + err.message);
//   }
// });

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

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
