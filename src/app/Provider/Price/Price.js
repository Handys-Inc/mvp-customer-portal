import React from "react";

import { Popover } from "@headlessui/react";

import Border from "../../../components/Border/Border";

import "../index.css";

function Price() {
  return (
    <div>
      {" "}
      <div className="text-gray font-semibold my-5">
        <table class="w-full">
          <tbody>
            {/* BREAKDOWN */}
            <tr className="table-row">
              <td className="table-item">
                <Popover className="relative">
                  <Popover.Button>
                    <p className="underline underline-offset-4">
                      {" "}
                      $65 per hour x 3 hours
                    </p>
                  </Popover.Button>

                  <Popover.Panel className="absolute bg-white font-light px-5 min-w-[20rem] py-2 shadow-lg border border-mute rounded-lg z-10">
                    <h4 className="text-center font-semibold text-lg">
                      Base price breakdown
                    </h4>
                    <Border />
                    <table class="w-full">
                      <tbody>
                        <tr className="table-row">
                          <td className="">1st hour</td>
                          <td className="text-right">$55 CAD</td>
                        </tr>
                        <tr className="table-row">
                          <td className="">2nd hour</td>
                          <td className="text-right">$78 CAD</td>
                        </tr>
                        <tr className="table-row">
                          <td className="">3rd hour</td>
                          <td className="text-right">$124 CAD</td>
                        </tr>
                      </tbody>
                    </table>
                    <Border />
                    <table className="w-full">
                      <tbody>
                        <tr className="table-row font-semibold">
                          <td className="">Total base price</td>
                          <td className="text-right">$195 CAD</td>
                        </tr>
                      </tbody>
                    </table>
                  </Popover.Panel>
                </Popover>
              </td>
              <td className="text-right">$195 CAD</td>
            </tr>
            {/* SERVICE FEE */}
            <tr className="table-row">
              <td className="table-item">
                <Popover className="relative">
                  <Popover.Button>
                    <p className="underline underline-offset-4">Service fee</p>
                  </Popover.Button>

                  <Popover.Panel className="absolute bg-white px-2 py-2 shadow-lg border border-mute rounded-lg z-10">
                    <p className="font-light">
                      This helps us run our platform to connect you seamlessly.
                    </p>
                  </Popover.Panel>
                </Popover>
              </td>
              <td className="text-right">$55 CAD</td>
            </tr>
            {/* TAXES */}
            <tr className="table-row">
              <td className="text-left underline underline-offset-4">
                <Popover className="relative">
                  <Popover.Button>
                    <p className="underline underline-offset-4">Taxes</p>
                  </Popover.Button>

                  <Popover.Panel className="absolute bg-white px-2 py-2 shadow-lg border border-mute rounded-lg z-10">
                    <p className="font-light">
                      Goods and services tax and Harmonized sales tax
                    </p>
                  </Popover.Panel>
                </Popover>
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
  );
}

export default Price;
