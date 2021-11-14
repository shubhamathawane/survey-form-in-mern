import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminHome({ adminlog, setAdminLogIn, auth, setAuth }) {
  const [users, setUsers] = useState([]);
  const [msg, setMessage] = useState("");

  const loadUsers = async () => {
    await axios.get("http://localhost:3001/api/users").then((res) => {
      if (res.data) {
        setUsers(res.data.reverse());
      } else {
        alert("No Users to show");
      }

      // setUsers(res.data);
    });
  };
  const deleteUser = async (_id) => {
    await axios.delete(`http://localhost:3001/api/users/${_id}`).then((res) => {
      setMessage(res.data.message);
      loadUsers();
    });
  };

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
        <a class="navbar-brand" href="#"></a>
        <div class="collapse navbar-collapse" id="navbar-list-4">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
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
          <Link className="btn btn-primary" to="/admin/add">
            Add Admin
          </Link>
          <Link
            className="btn btn-outline-success mx-4"
            to="/admin/login"
            onClick={() => {
              if (window.confirm("Confirm Logout")) {
                setAdminLogIn({});
                setAuth(false);
              } else {
              }
            }}
          >
            Logout
          </Link>
        </div>
      </nav>
      <br />
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">email</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((val, index) => {
            return (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>{val.date}</td>
                <td>
                  <button className="btn btn-primary sm">View Survey</button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete ?")) {
                        deleteUser(val._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <pre>
          {/* {JSON.stringify(msg, null, 2)} */}
          {msg}
        </pre>
      </p>
      <button className="btn btn-primary m-1" onClick={loadUsers}>
        Show users
      </button>
      <button className="btn btn-dark m-1">Add Questions</button>
    </div>
  );
}

export default AdminHome;
