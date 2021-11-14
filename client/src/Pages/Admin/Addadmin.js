import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Addadmin({ adminlog }) {
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const [alerts, setAlerts] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  const addAdmin = (e) => {
    e.preventDefault();
    const { username, password } = admin;

    axios
      .post("http://localhost:3001/api/admin/newadmin", admin)
      .then((res) => {
        if (res.data.message === "added") {
          alert("Admin Added!");
        } else {
          setAlerts(res.data.message);
        }
      });
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <a className="navbar-brand" href="#"></a>
        <div className="collapse navbar-collapse" id="navbar-list-4">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <p>
                  <h7>Admin Username : {adminlog.username}</h7>
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="float-sm-left">
          <Link className="btn btn-outline-success mx-4" to="/admin/home/">
            back
          </Link>
        </div>
      </nav>
      <div className="container my-4">
        <h4>Add new admin </h4>
        <label>Username</label>
        <input
          className="form-control"
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="form-control"
          name="password"
          placeholder="password"
          type="text"
          onChange={handleChange}
        />
        <button className="btn btn-primary m-3" onClick={addAdmin}>
          Add
        </button>
        <p>{alerts}</p>
      </div>
    </div>
  );
}

export default Addadmin;

