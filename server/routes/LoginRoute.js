const router = require("express").Router();
const User = require("../models/userModel");
const Admin = require("../models/adminModel");

const { registrationValidation } = require("./Validation");

router.post("/login", async (req, res) => {
  // Lets validate the data before we user
  const { error } = registrationValidation(req.body);
  if (error) return res.send({ message: error.details[0].message }).status(400);

  // Check if user already registered with given email
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.send({ message: "Email already used" }).status(400);

  // Create new user
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
  });
  try {
    await user.save();
    // res.send({ User: user._id });
    // res.send({ savedUser });
    res.send({ message: "Registratin Succesfull" }).status(200);
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

module.exports = router;
