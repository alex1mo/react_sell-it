import React from "react";
import { Link } from "react-router-dom";
import DivUser from "./styleHeader.js";
import signOut from "../../../materials/images/fa-sign-out.png";
import foto from "../../../materials/images/91.png";

const User = props => {
  return (
    <DivUser className="productlist-header header__user user">
      <div className="header-user user__name name">
        <img className="user-name name__foto" src={foto} alt="User: " />
        <span className="user-name name__text">Kim Evans</span>
      </div>
      <Link to="/" style={{ height: 50 + "%" }}>
        <img
          className="header-user user__signout"
          src={signOut}
          alt="Sign out"
        />
      </Link>
    </DivUser>
  );
};

export default User;
