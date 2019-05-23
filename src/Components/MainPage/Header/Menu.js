import React from "react";
import { Link } from "react-router-dom";

import { DivMenu } from "./styleHeader";

const Menu = () => {
  return (
    <DivMenu className="sub-menu">
      <Link className="sub-action" to="/main/products-list/add">
        <span>Add new post</span>
      </Link>
      <hr />
      <Link className="sub-action" to="/main/profile">
        <span>Profile</span>
      </Link>
    </DivMenu>
  );
};

export default Menu;
