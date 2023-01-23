import React from "react";

import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

function AccountHeader({ title }) {
  return (
    <div className="mt-20 mb-10 max-w-5xl mx-auto">
      <NavLink to="/account">
        <p className="text-sm underline mb-5">Back</p>
      </NavLink>
      <div>
        <h3 className="text-xl font-semibold">
          Account <IoIosArrowForward className="inline-block" /> {title}
        </h3>
        <h3 className="text-4xl font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default AccountHeader;
