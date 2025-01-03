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

module.exports = {
  validateSignUpData,
};
