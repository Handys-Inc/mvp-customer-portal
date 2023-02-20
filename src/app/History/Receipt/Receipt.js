import React from "react";

import logo from "../../../assets/logo/logo.svg";
import visa from "../../../assets/logo/paypal.png";

import Border from "../../../components/Border/Border";

function Receipt() {
  return (
    <div className="border border-faintGray rounded-2xl">
      <div className="bg-primary bg-opacity-20 rounded-tr-2xl rounded-tl-2xl pb-10">
        <div className="flex justify-between items-start p-10">
          <img className="w-20" src={logo} alt="logo" />

          <div className="text-primary">
            <h3>
              Total <span className="font-bold">$280 CAD</span>
            </h3>
            <p>February 21, 2023</p>
          </div>
        </div>

        <h4 className="text-2xl md:text-4xl text-left text-primary font-extrabold px-10">
          Thanks for using Handys, <br />
          Username
        </h4>
      </div>
      {/* Details */}
      <div className="px-10 my-5">
        {/* total */}
        <table class="w-full text-lg md:text-2xl font-bold mt-2">
          <tbody>
            <tr>
              <td className="text-left">Total</td>
              <td className="text-right">$280 CAD</td>
            </tr>
          </tbody>
        </table>

        <Border />

        {/* Actual details */}
        <table class="w-full text-sm md:text-base">
          <tbody>
            <tr>
              <td className="text-left">$65 per hour x 3 hours</td>
              <td className="text-right">$195 CAD</td>
            </tr>
            <tr>
              <td className="text-left">Service Fee</td>
              <td className="text-right">$47 CAD</td>
            </tr>
            <tr>
              <td className="text-left">Taxes</td>
              <td className="text-right">$73 CAD</td>
            </tr>
          </tbody>
        </table>
        <Border />

        <h4 className="text-left font-bold text-lg">Payment method</h4>
        <div className="my-5 flex justify-between text-gray items-center">
          <div className="flex gap-3">
            {" "}
            <div>
              <img src={visa} alt="visa" />
            </div>
            <div className="text-left">
              <h4 className="text-semibold text-black">Paypal</h4>
              <p className="text-sm font-light">9/12/2023</p>
            </div>
          </div>
          <h3>$280 CAD</h3>
        </div>
        <button className="w-full btn-primary my-5">Download receipt</button>
      </div>
    </div>
  );
}

export default Receipt;
