import React from "react";

import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import Border from "../../../components/Border/Border";

function AccountHeader({ title }) {
  return (
    <div className="mt-20 mb-10 w-full md:max-w-5xl mx-auto">
      <NavLink to="/account">
        <p className="text-sm underline mb-5">Back</p>
      </NavLink>
      <div>
        <h3 className="text-xs md:text-xl font-medium md:font-semibold">
          Account <IoIosArrowForward className="inline-block" /> {title}
        </h3>
        <h3 className="text-xl md:text-4xl font-bold">{title}</h3>
      </div>
    </div>
  );
}

export default AccountHeader;
