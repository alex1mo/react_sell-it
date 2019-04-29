import React, { Component } from "react";
import Form from "../../Components/LoginPage/Right/Form";

class FormContainer extends Component {
  state = {
    tab: "Sign In"
  };

  getTab = e => {
    let text = e.currentTarget.firstElementChild.innerHTML;
    this.setState({
      tab: text
    });
  };

  render() {
    let { tab } = this.state;
    return <Form tab={tab} getTab={this.getTab} />;
  }
}

export default FormContainer;
