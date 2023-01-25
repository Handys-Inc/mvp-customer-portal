import React from "react";

import { CiCircleInfo } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Payouts() {
  return (
    <div className="max-w-5xl mx-auto my-10 mb-20">
      {" "}
      <h3 className="text-2xl font-bold">How you'll get paid</h3>
      <p className="text-lg text-gray font-light mb-5">
        Add at least one payout method so we know where to send your money.
      </p>
      <NavLink to="/setup-payouts">
        <button className="btn-primary">Setup payouts</button>
      </NavLink>
      <p className="text-gray mt-5 text-sm flex items-center">
        <CiCircleInfo className="mr-1 inline" /> Needed for service providers
        only
      </p>
    </div>
  );
}

export default Payouts;
