import React from "react";
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
      <img className="header-user user__signout" src={signOut} alt="Sign out" />
    </DivUser>
  );
};

export default User;
