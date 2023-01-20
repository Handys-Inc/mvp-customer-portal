import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import Bell from "../../../assets/icons/svg/Bell";

function Notifications() {
  const links = [
    { href: "/messages", label: "Messages" },
    { href: "/service-history", label: "Service History" },
    { href: "/account", label: "Account" },
    { href: "/help", label: "Help" },
    { href: "/", label: "Logout" },
  ];
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex cursor-pointer items-center justify-center w-10 h-10 rounded-full text-center bg-[#F5F5F5] text-black">
            <Bell size={20} className="inline text-center" />
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
                    <button
                      className={`${
                        active ? "text-black bg-lightSecondary" : "text-gray"
                      } group flex w-full items-center rounded-full px-4 py-3 text-lg font-normal`}
                    >
                      {/* {active ? <span>Active</span> : <div>Inactive</div>} */}
                      Notification text
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Notifications;
