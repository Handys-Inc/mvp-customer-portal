import React from "react";
import { NavLink } from "react-router-dom";

import Border from "../../../components/Border/Border";

function CheckInfo() {
  return (
    <div>
      <h3>Your Order</h3>
      <h5>Dates</h5>
      <h5>Address</h5>
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
