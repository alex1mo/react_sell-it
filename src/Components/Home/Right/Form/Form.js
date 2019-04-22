import React, { Component } from "react";
import "./Form.css";
import Button from "./Button/Button";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

class Form extends Component {
  state = {
    tab: "Sign In"
  };

  tab = e => {
    let text = e.currentTarget.firstElementChild.innerHTML;
    this.setState({
      tab: text
    });
  };

  render() {
    return (
      <div className="body-right right__form form">
        <div className="right-form form__button button">
          <Button text="Sign In" tab={this.tab} />
          <Button text="Sign Up" tab={this.tab} />
        </div>
        {(this.state.tab === "Sign Up" && <SignUp />) || <SignIn />}
        <Button
          text={(this.state.tab === "Sign Up" && "Check in") || "Login"}
        />
      </div>
    );
  }
}

export default Form;
