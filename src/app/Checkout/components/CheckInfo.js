import React from "react";
import { NavLink } from "react-router-dom";

import Border from "../../../components/Border/Border";

// payment methods
import amex from "../../../assets/icons/payment/amex.svg";
import visa from "../../../assets/icons/payment/visa.svg";
import mastercard from "../../../assets/icons/payment/mastercard.svg";
import paypal from "../../../assets/icons/payment/paypal.svg";
import googlepay from "../../../assets/icons/payment/googlepay.svg";
import applepay from "../../../assets/icons/payment/applepay.svg";

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

      <div className="flex justify-between items-center">
        <h3 className="h3-header">Pay With</h3>

        {/* payment methods */}
        <div className="grid grid-cols-6 items-center gap-1">
          <img src={visa} alt="visa" />
          <img src={amex} alt="amex" />
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
          <img src={googlepay} alt="google pay" />
          <img src={applepay} alt="apple pay" />
        </div>
      </div>
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
