import React, { useState } from "react";
import PayHeader from "../components/PayHeader";

import { NavLink } from "react-router-dom";

import { MdArrowBack } from "react-icons/md";

import Layout from "../../../components/Layout/Layout";

function Interac() {
  const [email, setEmail] = useState(null);
  return (
    <Layout showHeader={false} showBottomNav={false}>
      <PayHeader />

      <div className="w-full md:max-w-xl mx-auto mt-5">
        <h2 className="text-2xl md:text-3xl font-medium">
          Please type in your Interac email
        </h2>
        <p className="text-normal font-mute mt-2">
          We recomment you set up auto-deposit
        </p>

        <form className="my-5">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="form-input"
          />
        </form>

        {/* Back and confirm */}
        <div className="flex justify-between my-5">
          <div>
            <NavLink to="/setup-payouts">
              <button className="btn-primary-outline">
                <MdArrowBack className="mr-1 inline" size={24} /> Back
              </button>
            </NavLink>
          </div>

          <button disabled={email === null} className="btn-primary">
            Continue
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Interac;
