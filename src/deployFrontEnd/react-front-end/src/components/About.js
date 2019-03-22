import React, { Component } from "react";
import '../App.css';
import stackeryLogo from '../images/stackery-logo.svg';
import reactLogo from '../images/react-logo.svg';

class About extends Component {
  render() {
    return (
      <div className="about">
        <a target="_blank" href="https://www.stackery.io">
          <img src={stackeryLogo} className="stackery-logo" alt="stackery-logo" />
        </a>
        <p className="plus">+</p>
        <a target="_blank" href="https://reactjs.org/">
          <img src={reactLogo} className="react-logo" alt="react-logo" />
        </a>
      </div>
    );
  }
}

export default About;
