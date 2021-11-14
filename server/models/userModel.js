// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// var userSchema = new Schema({
//     firstName:{type: String, required:true},
//     lastName:{type:String, required:true},
//     email: String,
//     mobile: Number
// })

// const User = mongoose.model("User", userSchema);
// module.export = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  date:{type:Date, default:Date.now}
  // survey_status: "new",
});

const User = mongoose.model("User", userSchema);
module.exports = User;
