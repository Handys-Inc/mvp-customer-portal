import React from "react";

// layout
import Layout from "../../components/Layout/Layout";

// icons
import badge from "../../assets/icons/badge.svg";
import shield from "../../assets/icons/shield-2.svg";
import money from "../../assets/icons/money-bill.svg";
import dot from "../../assets/icons/dot.svg";

// navlink
import { NavLink } from "react-router-dom";

function Account() {
  return (
    <Layout>
      <div className="account-content-holder mx-auto">
        <div>
          <h2 className="font-bold text-2xl md:text-4xl"> Account</h2>
          <div className="flex gap-3  items-center mt-2">
            <p className="text-base md:text-xl">
              Alice Irs,{" "}
              <span className="font-light text-gray text-lg">
                aliceirs@handys.ca
              </span>
            </p>
            <img className="mt-1" src={dot} alt="dot" />{" "}
            <NavLink to="/account/profile">
              <p className="font-bold text-lg hover:underline text-gray">
                View profile
              </p>
            </NavLink>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {/* Personal information */}
            <NavLink to="/account/personal">
              <div className="account-card">
                <img
                  className="mb-0 md:mb-4 w-6 md:w-10"
                  src={badge}
                  alt="badge"
                />
                <h3>Personal Information</h3>
                <p className="hidden md:block w-4/5">
                  Provide personal details and how we can reach you
                </p>
              </div>
            </NavLink>
            {/* Login & Security */}
            <NavLink to="/account/security">
              <div className="account-card">
                <img
                  className="mb-0 md:mb-4 w-6 md:w-10"
                  src={shield}
                  alt="badge"
                />
                <h3>Login & Secrity</h3>
                <p className="hidden md:block w-4/5">
                  Update your password and secure your account
                </p>
              </div>
            </NavLink>
            {/* Payments and Payouts */}
            <NavLink to="/account/payments">
              <div className="account-card">
                <img
                  className="mb-0 md:mb-4 w-6 md:w-10"
                  src={money}
                  alt="badge"
                />
                <h3>Payments & Payouts</h3>
                <p className="hidden md:block w-4/5">
                  Review payments, payouts, coupons, gift cards, and taxes
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Account;
