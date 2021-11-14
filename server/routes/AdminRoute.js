const adminRouter = require("express").Router();
const Admin = require("../models/adminModel");

adminRouter.post("/", async (req, res) => {
  // Checking if username already exist !
  const usernameExist = await Admin.findOne({ username: req.body.username });
  if (usernameExist)
    return res
      .send({
        message: "** Username already used, Please use different username **",
      })
      .status(400);

  // Creating new admin
  const admin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    await admin.save();
    res.send({ message: "added" });
  } catch (err) {
    res.status(400).send({ message: err });
  }
});

module.exports = adminRouter;
