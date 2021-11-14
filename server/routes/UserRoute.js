const router = require("express").Router();
const User = require("../models/userModel");
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

const { registrationValidation, loginValidation } = require("./Validation");

// User Registration 

router.post("/register", async (req, res) => {
  // Lets validate the data before we user
  const { error } = registrationValidation(req.body);
  if (error) return res.send({ message: error.details[0].message }).status(400);

  // Check if user already registered with given email
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res
      .send({ message: "Sorry! This email is already used, Please use different email " })
      .status(400);

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
    // res.status(200);
    // res.send({user:user})
    res.send({ message: "Registratin Succesfull", user: user });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});


// Admin Login

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // validating username and password
  const { error } = loginValidation(req.body);
  if (error) return res.send({ message: error.details[0].message }).status(400);

  // // Check if the email exist
  // const userExist = await Admin.findOne({ username: req.body.username });
  // if (!userExist)
  //   return res.status(400).send({message:"Username not found !"});

  // // Password is correct or not
  // const validPass = await Admin.findOne({password:req.body.passwojrd});
  // if(!validPass) return res.status(400).send({message:"Password is not valid"})

  // res.send({message:"Logged In"})

  Admin.findOne((err, admin) => {
    if (admin) {
      if (password === admin.password && username === admin.username) {
        res.send({ message: "Login Succefull", admin: admin }).status(200);
      } else {
        res.send({ message: "Password did not match" });
      }
    } else {
      res.send({ message: "Username OR password IS WRONG" });
      res.send(err);
    }
  });
});

// Loading all user data from DB to AdminHome

router.get("/", async (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});


// Deleting user from AdminHome using User ID
router.delete("/:_id", async(req, res) => {
  id = req.params._id;
  await User.findByIdAndRemove(id).exec();
  res.send({message: `User with id ${id} was Deleted !`})
})

module.exports = router;
