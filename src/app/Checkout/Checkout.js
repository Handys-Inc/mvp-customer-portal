import React from "react";
import Header from "../../components/Header/Header";
import CheckInfo from "./components/CheckInfo";
import CheckCard from "./components/CheckCard";

// icons
import { MdArrowBack } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <Header />
      <div className="flex justify-between gap-10 m-5">
        <div className="flex-1">
          {/* Header */}
          <div className="flex gap-5 mb-10 items-center">
            <NavLink to="/book/provider">
              <MdArrowBack size={24} />
            </NavLink>

            <h3 className="text-3xl font-semibold">Confirm and pay</h3>
          </div>

          <CheckInfo />
        </div>

        {/* Checkout Summary */}
        <div className="flex-1">
          <CheckCard />
          <button className="btn-primary w-full">Confirm Booking</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
