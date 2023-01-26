import React, { useState } from "react";
import PayHeader from "./components/PayHeader";

import paypal from "../../assets/logo/paypal.png";
import interac from "../../assets/logo/interac.png";
import Border from "../../components/Border/Border";

// icons
import { MdArrowForward } from "react-icons/md";

import { NavLink } from "react-router-dom";

function Payouts() {
  const [method, setMethod] = useState(null);
  return (
    <div>
      <PayHeader />

      <div className="max-w-xl mx-auto mt-5">
        <h2 className="text-3xl font-medium">Let’s add a payout method</h2>
        <p className="text-normal font-gray mt-2">
          To start, let us know where you'd like us to send your money.
        </p>

        <div className="my-10">
          <label for="billing" className="text-lg">
            {" "}
            Billing country / region
          </label>
          <input
            className="form-input mt-2"
            type="text"
            disabled
            value="Canada"
            placeholder="Billing country / region"
          />
          <p className="text-gray mt-2 text-xs font-light">
            This is where you opened your financial account.{" "}
            <span className="underline hover:text-primary cursor-pointer">
              More info
            </span>
          </p>
        </div>

        {/* Paypal or Interact */}
        <div className="rounded-lg border border-mute shadow-lg py-5">
          <form>
            <fieldset>
              <div className="flex justify-between px-5 items-center">
                <div className="flex gap-10">
                  <div>
                    <img src={paypal} alt="interac" />
                  </div>

                  <div>
                    {" "}
                    <h3 className="font-bold text-lg -ml-5">Paypal in CAD</h3>
                    <ul>
                      <li className="list-disc">One business day</li>
                      <li className="list-disc">Paypal fees may apply</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <input
                    checked={method === "paypal"}
                    onClick={() => setMethod("paypal")}
                    type="radio"
                  />
                </div>
              </div>
              <Border />
              <div className="flex justify-between px-5 items-center">
                <div className="flex gap-10">
                  <div>
                    <img src={interac} alt="interac" />
                  </div>

                  <div>
                    {" "}
                    <h3 className="font-bold text-lg -ml-5">Interac</h3>
                    <ul>
                      <li className="list-disc">One business day</li>
                      <li className="list-disc">No fees</li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <input
                    checked={method === "interac"}
                    onClick={() => setMethod("interac")}
                    type="radio"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="flex justify-between my-5">
          <div></div>
          <NavLink
            to={
              method === "interac"
                ? "/setup-payouts/interac"
                : "/setup-payouts/paypal"
            }
          >
            <button disabled={method === null} className="btn-primary">
              Continue <MdArrowForward className="ml-3 inline" size={24} />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Payouts;
