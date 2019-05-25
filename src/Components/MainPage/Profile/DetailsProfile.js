import React from "react";
import { connect } from "react-redux";

import { Profile } from "./ProfileStyle.js";

import defaultAvatar from "materials/images/default-user.png";

const renderDetails = data => {
  let arr = [];

  for (let key in data) {
    arr.push(
      <li key={key}>{`${key}: ${data[key] || "данные не заполнены"}`}</li>
    );
  }

  return arr;
};

const DetailsProfile = ({ user: { data } }) => {
  return (
    <Profile>
      <img src={(data && data.avatar) || defaultAvatar} alt="" />
      <ul type="none">{(data && renderDetails(data)) || null}</ul>
    </Profile>
  );
};

const mapStateToProps = ({ profile: user }) => ({
  user
});

export default connect(mapStateToProps)(DetailsProfile);
