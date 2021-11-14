import React, { Component } from "react";
import {
  Radio,
  checkbox,
  FormGroup,
  FormControl,
  Modal,
  Header,
  Footer,
  Title,
  Body,
  Button,
} from "react-bootstrap";

class CheckBoxType extends Component {
  // handleCheckboxAnswer = (question_id, answer_id) => {
  //   var picked_answers = this.props.picked_answers;
  //   if (picked_answers[question_id]) {
  //     var prevAns = picked_answers[question_id];
  //     prevAns.indexOf(answer_id) >= 0
  //       ? prevAns.splice(prevAns.indexOf(answer_id, 1))
  //       : prevAns.push(answer_id);
  //   } else {
  //     picked_answers[question_id] = [answer_id];
  //   }
  //   this.props.handleAnswer(picked_answers);
  // };
  render() {
    // const { answer_value, answers_id, _id } = this.props.questions;
    return (
      <form>
        {/* {answer_value.map((ans, j) => {
          <checkbox
            key={j}
            id={j}
            name={"checkboxGroup" + _id}
            onClick={() => this.handleCheckboxAnswer(_id, answers_id[j])}
            defaultChecked={this.props.user_ans.indexOf(answers_id[j]) >= 0}
            inline
          >
            {ans}
          </checkbox>;
        })} */}

        <input type="checkbox" name={"cehckboxGroup"} inline/>
      </form>
    );
  }
}

export default CheckBoxType;
