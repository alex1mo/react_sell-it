import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { profile } from "action-creator/login-page/login-page.js";

import { DivUser } from "./styleHeader.js";

import Menu from "./Menu.js";

import { TokenContext } from "hoc/AuthRequired.js";

import signOut from "materials/images/fa-sign-out.png";
import defaultAvatar from "materials/images/default-user.png";

export class User extends Component {
  static contextType = TokenContext;

  state = {
    userData: false
  };

  shouldComponentUpdate({ user }) {
    if (!user.isLoading && !user.isLoadingError) {
      if (!this.state.userData) {
        this.setState({ userData: true });
      }
      return true;
    }
    return false;
  }

  render() {
    if (this.state.userData) {
      let {
        user: { data }
      } = this.props;
      var { avatar, username } = data;
    }

    return (
      <DivUser className="productlist-header header__user user">
        <div className="header-user user__name name">
          <img
            className="user-name name__foto"
            src={avatar || defaultAvatar}
            alt="User Foto"
          />
          <span className="user-name name__text">{username || null}</span>
        </div>
        <Link to="/" style={{ height: 50 + "%" }}>
          <img
            className="header-user user__signout"
            src={signOut}
            alt="Sign out"
          />
        </Link>
        <Menu />
      </DivUser>
    );
  }

  componentDidMount() {
    this.props.profile(this.context);
  }
}

const mapStateToProps = ({ profile: user }) => ({
  user
});

export default connect(
  mapStateToProps,
  { profile }
)(User);
