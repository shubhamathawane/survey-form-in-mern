import React, { Component, useEffect } from "react";
import Questions from "./Questions";
import axios from "axios";

export class SurveyBoard2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picked_answers: {},
      surveyArray: [],
      totalQuestions: 0,
      complete: false,
      Data : [],
    };
  }

  // getSurvey = (user_id) => {
  //   jQuery.ajax({
  //     method: "GET",
  //     url: '/getSurvey',
  //     success: (result) => {
  //       if (typeof result == 'object') {
  //         this.setState({ surveyArray: result, totalQuestions: result.length});
  //         this.props.openModal();
  //       } else {
  //         this.props.closeModal();
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err.responseText);
  //     }
  //   });
  // };

  //  useEffect(() => {
  //   axios.get("http://localhost:3001/getSurvey").then((response) => {
  //     surveyArray(response.data.reverse());
  //   });
  // });

  // getSurvey = (e) => {
  //   e.preventDefault();
  //   axios.get("http://localhost:3001/user/getsurvey", (req, result) => {
  //     console.log("result");
  //     // if (typeof result == "object") {
  //     //   this.setState({ surveyArray: result, totalQuestions: result.length });
  //     // } else {
  //     //   result(console.error());
  //     // }
  //   });
  // };
  componentDidMount() {
    const result = axios.get("http://localhost:3001/getsurvey");
    this.setState({surveyArray:result.data});
  }

  render() {
    return (
      <div>
        {/* {z_fashion_v1.map((post) => {
          return <h3>{z_fashion_v1.text}</h3>;
        })} */}
        {this.state.Data}
        <form>
          {this.state.surveyArray.map((q, i) => (
            <Questions
              key={i}
              // user_id={this.props.user_id}
              question={q}
              // picked_answers={this.state.picked_answers}
              // handleAnswer={this.handleAnswer}
            />
          ))}
        </form>
      </div>
    );
  }
}

export default SurveyBoard2;
