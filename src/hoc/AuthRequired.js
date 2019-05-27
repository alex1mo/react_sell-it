import React, { Component } from "react";
import { connect } from "react-redux";

import { authorization } from "action-creator/login-page/login-page";

let token = localStorage.getItem("token");
export const TokenContext = React.createContext(token);

export default function(ComposedComponent) {
  class AuthRequired extends Component {
    state = {
      token: localStorage.getItem("token")
    };

    shouldComponentUpdate({ auth }) {
      if (!auth.isLoading && !auth.isLoadingError) {
        return true;
      }
      return false;
    }

    render() {
      return (
        <TokenContext.Provider value={this.state.token}>
          <ComposedComponent {...this.props} />
        </TokenContext.Provider>
      );
    }

    componentDidMount() {
      this.props.authorization(this.state.token);
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth
  });

  return connect(
    mapStateToProps,
    { authorization }
  )(AuthRequired);
}
