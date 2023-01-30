import React from "react";
import Border from "../../../components/Border/Border";

import profile from "../../../assets/images/pro.png";

function DetailsPane() {
  return (
    <div>
      <div className="flex justify-between px-10 my-5">
        <div className="text-left">
          <h3 className="font-semibold text-lg">Jane, Painter</h3>
          <p className="text-gray text-sm font-light mt-2">
            2-4 years experience
          </p>

          <p className="underline underline-offset-8 mt-5 font-light text-sm">
            Show more
          </p>
        </div>
        <div>
          <img className="w-14" src={profile} alt="provider" />
        </div>
      </div>
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Payment Info</h4>
        <h6 className="mb-3">Total cost</h6>
        <p className="text-gray text-sm font-light">$250 CAD</p>
      </div>
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Booking date</h4>

        <p className="text-gray text-sm font-light">January 14, 2023</p>
      </div>
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Your Place</h4>

        <p className="text-gray text-sm font-light">
          Chemin De L' Albatros,Kamloops, qc, Canada
        </p>
      </div>
    </div>
  );
}

export default DetailsPane;
