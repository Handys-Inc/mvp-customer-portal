import React from "react";

import prov from "../../../assets/images/provider-large.png";

import Like from "../../../assets/icons/svg/Like";

function CheckCard() {
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

      <table class="w-full text-gray my-5">
        <tbody>
          <tr>
            <td className="text-left underline underline-offset-4">
              $65 per hour x 3 hours
            </td>
            <td className="text-right">$195 CAD</td>
          </tr>
          <tr>
            <td className="text-left underline underline-offset-4">
              Service fee
            </td>
            <td className="text-right">$55 CAD</td>
          </tr>
          <tr>
            <td className="text-left underline underline-offset-4">Taxes</td>
            <td className="text-right">$30 CAD</td>
          </tr>
        </tbody>
      </table>

      <div className="text-faintGray">
        <hr />
      </div>

      {/* TOTAL */}
      <table class="w-full text-lg font-bold my-5">
        <tbody>
          <tr>
            <td className="text-left underline underline-offset-4">
              Est. Total
            </td>
            <td className="text-right">$280 CAD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CheckCard;
