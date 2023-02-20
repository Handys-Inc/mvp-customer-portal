import React, { useState } from "react";

import Layout from "../../components/Layout/Layout";

import CheckInfo from "./components/CheckInfo";
import CheckCard from "./components/CheckCard";

// icons
import { MdArrowBack } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Confirm from "./Confirm/Confirm";

function Checkout() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // coupon
  const [coupon, setCoupon] = useState(null);

  return (
    <Layout showBottomNav={false}>
      <div className="flex mb-10 flex-col md:flex-row justify-between gap-5 md:gap-10 mx-0 md:mx-16 my-8">
        <div className="flex-1">
          {/* Header */}
          <div className="flex gap-5 mb-10 items-center">
            <NavLink to="/book/provider">
              <MdArrowBack size={24} />
            </NavLink>
            <h3 className="text-xl md:text-3xl font-semibold">
              Confirm and pay
            </h3>
          </div>

          <CheckInfo coupon={coupon} setCoupon={setCoupon} />
        </div>

        {/* Checkout Summary */}
        <div className="flex-1">
          <CheckCard coupon={coupon} setCoupon={setCoupon} />
         <Confirm/>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
