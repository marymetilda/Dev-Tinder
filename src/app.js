const express = require("express");
const { connectDB } = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

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
