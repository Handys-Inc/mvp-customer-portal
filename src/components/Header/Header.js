import React from "react";

import logo from "../../assets/logo/logo.svg";

import Search from "../Search/Search";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center px-5 pt-5 pb-2">
        <NavLink to="/">
          <img className="w-20 md:w-28" src={logo} alt="Logo" />
        </NavLink>
        <Search />
        {/* Profile  */}
        <div>
          <p>Switch to service provider</p>
        </div>
      </div>
      <div className="text-faintGray">
        <hr />
      </div>
    </div>
  );
}

export default Header;
