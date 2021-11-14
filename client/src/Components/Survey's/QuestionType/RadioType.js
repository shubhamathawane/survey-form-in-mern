// import React, { Component } from "react";
// import { radios, Checkbox, FormGroup, FormControl } from "react-bootstrap";

// class RadioType extends Component { 
//   // handleRadioAnswer = (question_id, answer_id) => {
//   //   var picked_answers = this.props.picked_answers;
//   //   picked_answers[question_id] = answer_id;
//   //   this.props.handleAnswer(picked_answers);
//   // };

//   render() {
//     // const { answers_value, answers_id, _id } = this.props.question;
    
//     return (
//       // <FormGroup>
//       //   {answers_value.map((ans, j) => (
//       //     <radio
//       //       key={j}
//       //       value={answers_id[j]}
//       //       name={"radioGroup " + _id}
//       //       onClick={() => this.handleRadioAnswer(_id, answers_id[j])}
//       //       defaultChecked={this.props.user_ans.indexOf(answers_id[j]) >= 0}
//       //       inline
//       //     >
//       //       {ans}
//       //     </radio>
//       //   ))}
//       // </FormGroup>
//       <form>
//        <radio inline>boxRadio{}</radio>
//       </form>
//     );
//   }
// }

// export default RadioType;


import React, { Component } from 'react'
import { Radio, FormGroup } from "react-bootstrap";

export class RadioType extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questionns: []
    }
  }
  handleRadioAnswer = ( question_id ) => {
    // var picked_answers = this.props.picked_answers;
    // picked_answers[question_id] = answer_id;
    // this.props.hanldleAnswer(picked_answers);
  }
  
  render() {
    return (
      <div>
        <input type="Radio" inline name={"radioGroup "}/>
      </div>
    )
  }
}

export default RadioType
