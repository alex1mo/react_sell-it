import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class AuthRequired extends Component {
    shouldComponentUpdate({ auth }) {
      if (!auth.isLoadingError) {
        return true;
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => ({
    auth
  });

  return connect(mapStateToProps)(AuthRequired);
}
