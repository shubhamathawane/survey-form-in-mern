const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const userModel = require("./models/userModel");
const adminModel = require("./models/adminModel");
const Question = require("./models/question");
const surveys = require("./Controllers/surveys")
const bodyParser = require('body-parser');
app.use(bodyParser.json())


// Middlewares
app.use(express.json());
app.use(cors());


// Importing routes
const userRoute = require("./routes/UserRoute")
const adminRoute= require("./routes/AdminRoute");

// mongoose.connect(
//   "mongodb+srv://Usersurvey:Anirodh8552@cluster0.v4nke.mongodb.net/userSuvery?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//   }
// );


const mongoUri = 'mongodb://localhost/Usersurvey';
mongoose.connect(mongoUri, {config:{autoIndex: true}})

app.use("/api/user", userRoute)
app.use("/api/user", userRoute)
app.use("/api/users", userRoute)
app.use("/api/admin/newadmin", adminRoute)

// app.post("/signup", async (req, res) => {
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const mobile = req.body.mobile;

//   const user = new userModel({
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     mobile: mobile,
//   });
//   try {
//     await user.save();
//     res.send({ message: "User signed up" });
//   } catch (err) {
//     console.log(err);
//   }
// });



// app.post("/alogin", (req, res) => {
//   const { username, password } = req.body;
//   adminModel.findOne(
//     { username: username, password: password },
//     (err, admin) => {
//       if (admin) {
//         if (password === admin.password && username === admin.username) {
//           res.send({ message: "Login Successfull", admin: admin });
//         } else {
//           res.send({ message: "Password did not match" });
//         }
//       } else {
//         res.send({ message: "Username OR pasword IS WRONG" });
//         res.send(err);
//       }
//     }
//   );
// });

app.get("/getsurvey", (req, res) => {
  Question.find({}, (req, result) => {
    // if(err){
    //   res.send(err)
    // }
      res.send(result)
    
  })
})

// surveys
// app.get('/getsurvey', surveys.getSurvey)







app.listen(3001, () => {
  console.log("Server is running on port 3001");
});