const Validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid");
  } else if (!Validator.isEmail(emailId)) {
    throw new Error("Email id is not valid");
  } else if (!Validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password");
  }
};

const validateEditProfileData = (req) => {
  const allowedFields = [
    "firstName",
    "lastName",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedFields.includes(field)
  );

  return isEditAllowed;
};

const validateEditPasswordData = (req) => {
  isEditAllowed =
    Object.keys(req.body).length === 1 &&
    Object.keys(req.body)[0] === "password";

  return isEditAllowed;
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
  validateEditPasswordData,
};
