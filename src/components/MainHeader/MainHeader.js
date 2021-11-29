import React from "react";
import { Link } from "react-router-dom";

import "./MainHeader.css";

const MainHeader = () => {
  return (
    <nav className="mainHeader">
      <Link className="mainHeader_link" to="/">
        Home
      </Link>
      <Link className="mainHeader_link" to="about">
        About
      </Link>
    </nav>
  );
};

export default MainHeader;
