import React from "react";

import profile from "../../../assets/images/pro.png";

import { BiMessageAltDetail } from "react-icons/bi";

import { NavLink } from "react-router-dom";

import Border from "../../../components/Border/Border";

function Details({ setDetailsModal, setReportModal, setReceiptModal }) {
  return (
    <div>
      <div className="flex justify-between px-10">
        <div className="text-left">
          <h3 className="font-semibold text-lg">Jane, Painter</h3>
          <p className="text-gray text-sm font-light -mt-2">
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
      <div>
        <NavLink to="/messages">
          <div className="flex gap-3 px-10 items-center">
            <BiMessageAltDetail className="text-gray" size={28} />

            <p className="text-gray ">Message service provider</p>
          </div>
        </NavLink>
      </div>

      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Payment Info</h4>
        <h6 className="mb-3">Total cost</h6>
        <p className="text-gray text-sm font-light">$250 CAD</p>
        <p
          onClick={() => {
            setDetailsModal(false);
            setReceiptModal(true);
          }}
          className="under text-sm my-3"
        >
          View receipt
        </p>
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
      <Border />
      <div className="px-10 text-left">
        <h4 className="mb-1">Confirmation Code</h4>

        <p className="text-gray text-sm font-light">HA78909</p>
      </div>
      <Border />
      <div className="px-10 text-left">
        {" "}
        <h4 className="mb-1">Dispute Service</h4>
        <p className="text-gray text-sm font-light">Tell us what went wrong</p>
        <p
          onClick={() => {
            setDetailsModal(false);
            setReportModal(true);
          }}
          className="underline underline-offset-8 mt-5 font-light cursor-pointer hover:text-primary text-sm"
        >
          Report
        </p>
      </div>
    </div>
  );
}

export default Details;
