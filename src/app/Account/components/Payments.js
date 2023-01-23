import React from "react";

import Header from "../../../components/Header/Header";

import AccountHeader from "./AccountHeader";
import Border from "../../../components/Border/Border";

function Payments() {
  return (
    <div>
      <Header />
      <AccountHeader title="Payments & Payouts" />

      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-bold">Login</h3>
        <p className="text-lg text-gray font-light">Last updated 2 years ago</p>
        <Border />
        <h3 className="text-xl font-bold">Account</h3>
        <p className="text-lg text-gray font-light">Deactivate your account</p>
      </div>
    </div>
  );
}

export default Payments;
