import React, { Component } from "react";
import { connect } from "react-redux";

import { authorization } from "../action-creator/login-page/login-page";

let token: string | null = localStorage.getItem("token");
export const TokenContext: any = React.createContext(token);

interface props {
  auth: {
    isLoading: boolean;
    isLoadingError: boolean;
  };
}

interface returnAuth2 {
  type: string;
  token: string | null;
}

interface fc {
  authorization: (type: string | null) => returnAuth2;
}

export default function(ComposedComponent: React.ComponentType) {
  class AuthRequired extends Component<props & fc> {
    state: { token: string | null } = {
      token: localStorage.getItem("token")
    };

    shouldComponentUpdate({ auth }: props) {
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

  const mapStateToProps = ({ auth }: props) => ({
    auth
  });

  return connect(
    mapStateToProps,
    { authorization }
  )(AuthRequired);
}
