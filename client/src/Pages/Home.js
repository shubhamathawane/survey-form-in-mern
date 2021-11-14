import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function Home({ setUserReg }) {
  const History = useHistory();
  const [alerts, setAlert] = useState("");

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const singUp = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, mobile } = user;
    // if ((firstName, lastName, email, mobile)) {
    //   axios
    //     .post("http://localhost:3001/api/user/register", user)
    //     .then((res) => {
    //         // setAlert(res.data.message);
    //         res.data.user
    //         History.push("/user/surveyBoard");
    //       // if (res.status(400)) {
    //       //   setAlert(res.data.message);
    //       // } else {
    //       // }
    //     });
    // }

    axios.post("http://localhost:3001/api/user/register", user).then((res) => {
      if (res.data.message === "Registratin Succesfull") {
        alert("Success! Now Fill Survey");
        History.push("/user/surveyBoard");
        setUserReg(res.data.user);
      } else {
        setAlert(res.data.message);
      }
    });
  };
  // const loadData = () => {
  //   axios.get("http://localhost:3001/getsurvey", (req, res) => {
  //     console.log(res.data);
  //   })
  // }

  return (
    <div>
      <h4>Register Here</h4>
      <hr />
      <div className="container">
        <label>Fist Name</label>
        <input
          className="form-control"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          className="form-control"
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="last Name"
        />
        <label>Email</label>
        <input
          className="form-control"
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
        <label>Mobile</label>
        <input
          className="form-control"
          name="mobile"
          type="text"
          placeholder="Mobile"
          onChange={handleChange}
        />
        <button className="btn btn-danger m-3" onClick={singUp}>
          Register
        </button>

        <NavLink className="btn btn-primary" exact to="/admin/login">
          Admin Login
        </NavLink>
        {/* <button onClick={loadData}>load data</button> */}
      </div>
      <p className="text-danger">
        {" "}
        <h4>{alerts}</h4>{" "}
      </p>
    </div>
  );
}

export default Home;
