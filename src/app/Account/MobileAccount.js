import React, { useContext } from "react";

import Layout from "../../components/Layout/Layout";

// icons
import { IoIosArrowForward } from "react-icons/io";

import { MdArrowBack } from "react-icons/md";

import { NavLink } from "react-router-dom";
import Border from "../../components/Border/RawBorder";

// image icons
import badge from "../../assets/icons/badge.svg";
import shield from "../../assets/icons/shield-2.svg";
import money from "../../assets/icons/money-bill.svg";
import pro from "../../assets/images/pro.png";

// authcontext
import { AuthContext } from "../../contexts/AuthContext";

function MobileAccount() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { currentUser } = useContext(AuthContext);
  const { firstName, lastName } = currentUser;

  return (
    <Layout current="account">
      <div className="flex flex-col justify-between h-[70vh]  w-full items-end md:hidden">
        <div className="mt-10 w-full">
          <p className="text-left font-bold text-lg mb-5">
            {" "}
            <NavLink to="/account">
              <MdArrowBack className="mr-3 inline" size={24} />
            </NavLink>
            Account
          </p>
          <Border />
        </div>

        <div className="w-full">
          {/* Profile Image */}
          <NavLink to="/account/personal">
            <div className="flex justify-between py-4 text-lg items-center">
              <div className="flex gap-3 items-center ">
                <img className="mb-0 md:mb-4 w-10" src={pro} alt="profile" />
                <div>
                  <p className="font-semibold">
                    {firstName} {lastName}
                  </p>
                  <p className="font-light text-gray text-xs">Show Profile</p>
                </div>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>
          <Border />
          {/* Personal */}
          <NavLink to="/account/personal">
            <div className="flex justify-between py-4 text-lg items-center">
              <div className="flex gap-3 items-center ">
                <img
                  className="mb-0 md:mb-4 w-6 md:w-10"
                  src={badge}
                  alt="badge"
                />
                Personal Information
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>

          {/* Payments and payouts */}
          <NavLink to="/account/payments">
            <div className="flex justify-between py-4 text-lg items-center">
              <div className="flex gap-3 items-center ">
                <img
                  className="mb-0 md:mb-4 w-6 md:w-10"
                  src={money}
                  alt="badge"
                />
                Payments and payouts
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>

          {/* Login and security */}
          <NavLink to="/account/security">
            <div className="flex justify-between py-4 text-lg items-center">
              <div className="flex gap-3 items-center ">
                <img
                  className="mb-0 md:mb-4 w-6 md:w-10"
                  src={shield}
                  alt="badge"
                />
                Login & Security
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
}

export default MobileAccount;
