import React, { Component } from "react";
import "./Form.css";
import Input from "./Input/Input";
import Button from "./Button/Button";

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
        <form action="#" className="right-form form__input input">
          {this.state.tab === "Sign Up" && (
            <Input type="text" placeholder="Name" />
          )}
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          {this.state.tab === "Sign Up" && (
            <Input type="password" placeholder="Confirm password" />
          )}
        </form>
        <Button
          text={(this.state.tab === "Sign Up" && "Check in") || "Login"}
        />
      </div>
    );
  }
}

export default Form;
