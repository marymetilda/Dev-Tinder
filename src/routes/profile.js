const express = require("express");
const { userAuth } = require("../middlewares/auth");
const {
  validateEditProfileData,
  validateEditPasswordData,
} = require("../utils/validation");
const bcrypt = require("bcrypt");

const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      throw new Error("User does not exist");
    }

    res.send(user);
  } catch (err) {
    res.status(400).send("Error:" + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData(req)) {
      throw new Error("Invalid edit request!");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    if (!validateEditPasswordData(req)) {
      throw new Error("Invalid edit request!");
    }
    const loggedInUser = req.user;
    const newPassword = req.body.password;
    const passwordHashed = await bcrypt.hash(newPassword, 10);
    loggedInUser.password = passwordHashed;

    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName}, your password updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR :" + err.message);
  }
});

module.exports = profileRouter;
