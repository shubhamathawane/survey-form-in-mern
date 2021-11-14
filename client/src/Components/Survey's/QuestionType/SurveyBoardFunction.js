import React, { useState, useEffect } from "react";
import { FormGroup } from "react-bootstrap";
import axios from "axios";
import Questions from "./Questions";
import { Link } from "react-router-dom";
import data from './data.json'

function SurveyBoardFunction({ setUserReg, user }) {
  const [surveyArray, setSurveyArray] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  // const loadData = () => {
  //   axios.get("http://localhost:3001/getsurvey", (req, result) => {
  //     console.log(result.data);
  //     setSurveyArray(result.data);
  //     // this.setState({ Data: result });
  //     // if (typeof result == "object") {
  //     //   this.setState({ surveyArray: result, totalQuestions: result.length });
  //     // } else {
  //     //   result(console.error());
  //     // }
  //   });
  // };

  // Fetching most recent publicshed survey form DB
  const loadData = async () => {
    const result = await axios.get("http://localhost:3001/getsurvey");
    setSurveyArray(result.data);
    // setTotalQuestions(result.data.length())
  };
  const confirmExist = () => {
    const r = window.confirm("You want to exit ?");
    if (r == true) {
      setUserReg({});
    } else {
    }
  };

  return (
    <div>
      {/* <h1>Hello Questions</h1> */}
      <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
        <a class="navbar-brand" href="#"></a>
        <div class="collapse navbar-collapse" id="navbar-list-4">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b>Name</b> : {user.firstName} {user.lastName}
              </a>
            </li>
          </ul>
        </div>
        <div className="float-sm-left">
          <p className="text-secondary mx-2">
            <b>Email</b> : {user.email}
          </p>
        </div>
      </nav>
      <FormGroup className="container my-3">
        {surveyArray.map((q, i) => (
          <Questions
            key={i}
            // user_id={this.props.user_id}
            question={q}
            // picked_answers={this.state.picked_answers}
            // handleAnswer={this.handleAnswer}
          />
        ))}
        <Link className="btn btn-dark m-4" onClick={confirmExist} to="/">
          Exit Survey
        </Link>
        <button className="btn btn-dark m-4">Submit</button>
      </FormGroup>
    </div>
  );
}

export default SurveyBoardFunction;
