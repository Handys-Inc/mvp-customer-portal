import React from "react";
import Border from "../../../components/Border/Border";

import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";

function PayHeader() {
  return (
    <div className="py-5 relative">
      <h2 className="text-center font-bold text-xl ">Setup payouts</h2>
      <NavLink to="/account/payments">
        <GrClose className="bg-mute absolute right-10 top-5 hover:bg-gray  rounded-full w-8 h-8 cursor-pointer p-2" />
      </NavLink>
      <Border />
    </div>
  );
}

export default PayHeader;
