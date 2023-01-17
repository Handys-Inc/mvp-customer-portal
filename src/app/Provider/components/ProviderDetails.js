import React from "react";

import { BiMessageAltDetail } from "react-icons/bi";
import { BsPinAngle } from "react-icons/bs";

import profile from "../../../assets/images/pro.png";
import { NavLink } from "react-router-dom";

function ProviderDetails() {
  return (
    <div>
      {/* SUMMARY AND MESSAGE */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h2 className="font-bold text-2xl">James Shepherd, Painter</h2>
          <NavLink to="/messages">
            <div className="w-10 h-10 bg-mute flex rounded-full hover:bg-primary hover:text-white items-center justify-center">
              <BiMessageAltDetail size={18} />
            </div>
          </NavLink>
        </div>

        <div>
          <img className="w-14" src={profile} alt="provider" />
        </div>
      </div>
      <p className="text-gray text-lg font-light -mt-3">2-4 years experience</p>

      {/* BREAK */}
      <div className="text-faintGray my-5">
        <hr />
      </div>

      {/* INSTANT BOOKING */}
      <div className="flex gap-3">
        <BsPinAngle size={18} className="mt-2" />
        <div>
          <h4 className="text-black font-bold">Instant Booking</h4>
          <p className="text-gray font-light">
            Book an appointment without waiting for the tradesperson's
            confirmation
          </p>
        </div>
      </div>

      {/* BREAK */}
      <div className="text-faintGray my-5">
        <hr />
      </div>

      {/* ABOUT */}
      <div>
        <h4 className="text-black font-bold">About</h4>
        <p className="text-gray font-light">
          I am a skilled painter with over 10 years of experience in both
          interior and exterior painting. I specialize in residential and
          commercial properties and pride myself on my attention to detail and
          customer satisfaction. I am proficient in various painting techniques
          and able to work with different types of paint. I have my own
          equipment and can provide references.
        </p>
      </div>
    </div>
  );
}

export default ProviderDetails;
