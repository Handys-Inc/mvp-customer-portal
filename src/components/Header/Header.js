import React, { useContext, useState } from "react";

import logo from "../../assets/logo/logo.svg";
import Search from "../Search/Search";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import Bell from "../../assets/icons/svg/Bell";

import Notifications from "../../app/Notifications/Notifications";
import Avatar from "../Avatar/Avatar";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const [showNoti, setShowNoti] = useState(false);

  const { logOut } = useContext(AuthContext);

  // menu links
  const links = [
    { href: "/messages", label: "Messages" },
    { href: "/service-history", label: "Service History" },
    { href: "/account", label: "Account" },
    { href: "/help", label: "Help" },
    { href: "/", label: "Logout" },
  ];

  return (
    <div className="hidden md:block z-50">
      <div className="flex flex-row justify-between items-center px-5 pt-5 pb-3">
        <NavLink to="/">
          <img className="w-20 md:w-28" src={logo} alt="Logo" />
        </NavLink>

        {/* Search */}
        <Search className="hidden md:block" />

        {/* Profile  */}
        <div className="hidden md:flex items-center gap-2">
         <a href={`${process.env.REACT_APP_PROVIDER}`}>
                  Switch to service provider
                </a>

          {/* NOTIFICATIONS MODAL */}
          <div className="relative inline-block text-left z-50">
            <div
              onClick={() => setShowNoti(!showNoti)}
              className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-center bg-[#F5F5F5] text-black"
            >
              <Bell
                onClick={() => setShowNoti(!showNoti)}
                size={20}
                className="inline text-center"
              />
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              show={showNoti}
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              {/* TODO: ALLOW CLOSE OF NOTIFICATION ONCLICK OUTSIDE OF THE COMPONENT */}
              <div className="absolute right-0 mt-2 p-5 w-96 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Notifications />
              </div>
            </Transition>
          </div>

          {/* END OF NOTIFICATIONS MODAL */}

          {/* MENU */}
          <div>
            <Menu as="div" className="relative inline-block text-left z-50">
              <div>
                <Menu.Button className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-center bg-[#F5F5F5] text-black">
                  <HiMenu size={24} className="inline text-center" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                z
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    {links.map((link) => (
                      <Menu.Item key={link.href} as="div">
                        {({ active }) => (
                          <a href={link.href}>
                            <button
                              onClick={() => {
                                if (link.label === "Logout") {
                                  logOut();
                                }
                              }}
                              className={`${
                                active
                                  ? "text-black bg-lightSecondary"
                                  : "text-gray"
                              } group flex w-full items-center rounded-full px-4 py-3 text-lg font-normal`}
                            >
                              {/* {active ? <span>Active</span> : <div>Inactive</div>} */}
                              {link.label}
                            </button>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          <Avatar />
        </div>
      </div>
      <div className="text-faintGray">
        <hr />
      </div>
    </div>
  );
}

export default Header;
