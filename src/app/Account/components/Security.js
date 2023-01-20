import React from "react";

import Header from "../../../components/Header/Header";

import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

function Security() {
  return (
    <div>
      <Header />
      <div className="mt-20 mb-5 max-w-5xl mx-auto">
        <NavLink to="/account">
          <p className="text-sm underline">Back</p>
        </NavLink>
      </div>
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold">
          Account <IoIosArrowForward className="inline-block" /> Login &
          Security
        </h3>
        <h3 className="text-4xl font-bold">Login & Security</h3>
      </div>
    </div>
  );
}

export default Security;
