import React from "react";

// icons
import Search from "./assets/Search";
import Notif from "./assets/Notif";
import Time from "./assets/Time";
import Inbox from "./assets/Inbox";
import Profile from "./assets/Profile";

function BottomNav() {
  return (
    <div className="flex justify-between text-sm px-4 py-6 pb-8 items-center md:hidden absolute bottom-0 bg-white  w-full shadow-md border border-faintGray">
      {/* search */}
      <div className="flex flex-col items-center">
        <Search fill="#626262" size={22} />
        <p className="mt-2">Search</p>
      </div>

      {/* Notifications */}
      <div className="flex flex-col items-center">
        <Notif fill="#626262" size={22} />
        <p className="mt-2">Notifications</p>
      </div>

      {/* history */}
      <div className="flex flex-col items-center">
        <Time fill="#626262" size={22} />
        <p className="mt-2">History</p>
      </div>

      {/* Inbox */}
      <div className="flex flex-col items-center">
        <Inbox fill="#626262" size={22} />
        <p className="mt-2">Inbox</p>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <Profile fill="#626262" size={22} /> <p className="mt-2">Profile</p>
      </div>
    </div>
  );
}

export default BottomNav;
