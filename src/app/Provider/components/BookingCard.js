import React from "react";

import Like from "../../../assets/icons/svg/Like";

import { BsTags } from "react-icons/bs";

import { Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function BookingCard() {
  return (
    <div>
      <div className="rounded-xl shadow-none md:shadow-lg border border-faintGray max-w-xl p-5 md:p-10">
        <div className="flex justify-between">
          <p className="text-gray text-lg">
            <span className="font-bold text-black text-2xl">$65 </span> per hour
          </p>
          <div className="flex items-center text-gray text-sm">
            <Like size={18} fill="#1d1d1d" /> <span className="ml-1">+24</span>
          </div>
        </div>

        {/* DATE AND NUMBER OF HOURS */}
        <div className="text-gray font-light border rounded-3xl border-mute py-3 my-5">
          <div className="px-7 py-2">
            <p className=" font-bold text-gray">Date</p>
            <input
              className="w-full border-transparent focus:border-transparent focus:ring-0 appearance-none mt-2 focus:outline-none outline-none"
              type="date"
            />
          </div>
          <div className="text-faintGray">
            <hr />
          </div>
          <div className="px-7 py-2">
            <p className=" font-bold text-gray">Number of hours</p>
            <select className="w-full appearance-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none outline-none border-none mt-2">
              <option>1 hour</option>
              <option>2 hour</option>
              <option>3 hours</option>
              <option>4 hours</option>
              <option>5 hours</option>
              <option>6 hours</option>
              <option>7 hours</option>
              <option>8 hours</option>
            </select>
          </div>
        </div>

        {/* Book Button */}
        <div className="mt-5">
          <NavLink to="/checkout">
            <button className="btn-primary w-full">Book</button>
          </NavLink>

          <p className="text-sm font-light text-gray text-center mt-2">
            You won't be charged until job completion is confirmed
          </p>
        </div>

        {/* SUMMARY */}
        <div className="text-gray font-semibold my-5">
          <table class="w-full">
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
                  {/* <Popover className="relative">
                    <Popover.Button>
                      <p className="underline underline-offset-4">
                        Service fee
                      </p>
                    </Popover.Button>

                    <Popover.Panel className="absolute bg-white px-2 py-2 shadow-lg border border-mute rounded-lg z-10">
                      <p className="font-light">
                        This helps us run our platform to connect you
                        seamlessly.
                      </p>
                    </Popover.Panel>
                  </Popover> */}
                </td>
                <td className="text-right">$55 CAD</td>
              </tr>
              <tr>
                <td className="text-left underline underline-offset-4">
                  Taxes
                </td>
                <td className="text-right">$30 CAD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-faintGray">
          <hr />
        </div>

        {/* TOTAL */}
        <table class="w-full text-lg font-bold mt-2">
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
      <p className="text-sm font-light text-gray text-center mt-5">
        Pricing may change based on hours used
      </p>
      <div>
        <div className="my-5 border text-gray font-light border-mute rounded-lg p-2 text-center">
          <BsTags className="inline-block mr-2 text-primary" />{" "}
          <span>
            This per hour rate is less than the avg rate in the industry
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
