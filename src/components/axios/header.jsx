import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

const AXHeader = () => {
  return (
    <>
      <header className="header flex justify-between bottom-5">
        <div className="logo">
          <Link to="/">Practice</Link>
        </div>
        <ul className="flex px-64">
          <li className=" px-24">
            <Link to="/login"><FaSignInAlt /> Login </Link>
          </li>
          <li>
            <Link to="/register"><FaUser /> Register </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default AXHeader;
