import React from "react";
import { NavLink } from "react-router-dom";

import Border from "../../../components/Border/Border";

function CheckInfo() {
  return (
    <div>
      <h3>Your Order</h3>
      {/* Date */}
      <div className="my-5 flex justify-between">
        <div>
          <h3 className="font-semibold text-xl">Dates</h3>
          <p className="text-gray text-sm">Apr 1 - 20</p>
        </div>
        <p className="underline">Edit</p>
      </div>

      {/* Address */}

      <div className="my-5 mb-10 flex justify-between">
        <div>
          <h3 className="font-semibold text-xl">Address</h3>
          <p className="text-gray text-sm">Crisp Road,Kamloops, ns, Canada</p>
        </div>
        <p className="underline">Edit</p>
      </div>
      <Border />

      <h3 className="h3-header">Pay With</h3>
      <select className="w-full mt-2 mb-5 border px-2 py-3 rounded-lg border-mute">
        <option>Paypal</option>
      </select>
      <p className="text-xs underline my-2">Enter a coupon</p>
      <Border />
      <h3 className="h3-header">Cancellation Policy</h3>
      <p className="text-gray  font-light">
        Free cancellation for 48 hours.{" "}
        <NavLink to="/cancellation-policy">
          <span className="underline font-bold">Learn more</span>
        </NavLink>{" "}
      </p>
    </div>
  );
}

export default CheckInfo;
