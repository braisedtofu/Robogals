import React from "react";
import Typist from "react-typist";
import "../styles/Quote.css";
import "react-typist/dist/Typist.css";

class Intro extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: "1",
        visible: true
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      return (
        <div className="frontpage">
            <div className="frontpage_image"></div>
            
            <Typist avgTypingDelay={40}>
                <span className="intro-title">
                {"Inspiring tomorrow's innovators, today."}
                </span>
            </Typist>
        </div>
      );
    }
  }
  
  export default Intro;
  