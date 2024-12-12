const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("First Route handler");

    next();
  },
  (req, res, next) => {
    console.log("Secona route handler");
    next();
  },
  (req, res) => {
    res.send("Last Route Handler");
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
