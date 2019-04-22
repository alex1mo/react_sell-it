import React, { Component } from "react";
import "./Exit.css";
import exit from "./material/fa-sign-out.png";

class Exit extends Component {
  render() {
    return (
      <div className="header-user user__exit exit">
        <img className="user-exit exit__img" src={exit} alt="exit" />
      </div>
    );
  }
}

export default Exit;
