import React from "react";

import prov from "../../../assets/images/provider-large.png";

import Like from "../../../assets/icons/svg/Like";
import Price from "../../Provider/Price/Price";

function CheckCard({coupon}) {
  return (
    <div className="general-card mb-5">
      {/* Provider Information */}
      <div className="flex gap-5 mb-5">
        <img
          className="w-20 md:w-36 object-contain"
          src={prov}
          alt="provider"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-base md:text-2xl ">
              {" "}
              Harrison Kemper, Painter
            </h3>
            <p className="text-gray text-sm md:text-base mt-1">
              <span className="font-bold text-black text-base md:text-xl">
                $65{" "}
              </span>{" "}
              per hour
            </p>
          </div>

          <div className="flex items-center text-gray text-xs md:text-sm">
            <Like size={18} fill="#1d1d1d" /> <span className="ml-1">+24</span>
          </div>
        </div>
      </div>

      <div className="text-faintGray">
        <hr />
      </div>
      <h3 className="text-lg font-medium my-4">Price Details</h3>

      <Price coupon={coupon} />
    </div>
  );
}

export default CheckCard;
