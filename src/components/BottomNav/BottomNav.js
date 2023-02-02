import React from "react";

// icons
import Search from "./assets/Search";
import Notif from "./assets/Notif";
import Time from "./assets/Time";
import Inbox from "./assets/Inbox";
import Profile from "./assets/Profile";

// router
import { useLocation, NavLink } from "react-router-dom";

function BottomNav({ showBottomNav }) {
  const location = useLocation();

  let path = location.pathname.substring(1);

  console.log(path);

  const mute = "#626262";
  const active = "#CE1449";

  return (
    <div
      className={`${
        showBottomNav ? "flex " : "hidden"
      } justify-between text-sm px-4 py-6 pb-8 items-center md:hidden absolute bottom-0 bg-white  w-full shadow-md border border-faintGray`}
    >
      {/* search */}
      <NavLink to="/">
        <div className="flex flex-col items-center">
          <Search fill={path === " " ? active : mute} size={22} />
          <p className={`${path === " " ? "text-primary" : "text-gray"} mt-2`}>
            Search
          </p>
        </div>
      </NavLink>

      {/* Notifications */}
      <NavLink to="/notifications">
        <div className="flex flex-col items-center">
          <Notif fill={path === "notifications" ? active : mute} size={22} />
          <p
            className={`${
              path === "notifications" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            Notifications
          </p>
        </div>
      </NavLink>

      {/* history */}
      <NavLink to="/service-history">
        <div className="flex flex-col items-center">
          <Time fill={path === "service-history" ? active : mute} size={22} />
          <p
            className={`${
              path === "service-history" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            History
          </p>
        </div>
      </NavLink>

      {/* Inbox */}
      <NavLink to="/messages">
        {" "}
        <div className="flex flex-col items-center">
          <Inbox fill={path === "messages" ? active : mute} size={22} />
          <p
            className={`${
              path === "messages" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            Inbox
          </p>
        </div>
      </NavLink>

      {/* Profile */}
      <NavLink to="/account">
        <div className="flex flex-col items-center">
          <Profile fill={path === "account" ? active : mute} size={22} />{" "}
          <p
            className={`${
              path === "account" ? "text-primary" : "text-gray"
            } mt-2`}
          >
            Profile
          </p>
        </div>
      </NavLink>
    </div>
  );
}

export default BottomNav;
