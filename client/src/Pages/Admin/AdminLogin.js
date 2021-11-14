import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AdminLogin({setAdminLogIn, auth, setAuth}) {
  const History = useHistory();

  const [alerts, setAlerts] = useState("")

  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  const [admin, setAdmin] = useState({
    username: "",
    password: "",
    // error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const loginAdmin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/user/login", admin).then((res) => {
      if(res.data.message === "Login Succefull"){
        alert("Login Succesfull");
        setAuth(true);
        setAdminLogIn(res.data.admin);
        History.push("/admin/home");
      }else{
        setAlerts(res.data.message);
      }
    });
  };

  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <p>{alerts}</p>
        <Link className="btn btn-danger" exact to="/">
          Go back
        </Link>
        <button onClick={loginAdmin} className="btn btn-primary m-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
