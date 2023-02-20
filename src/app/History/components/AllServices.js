import React, { useState } from "react";

import Completed from "../Completed/Completed";
import Pending from "../Pending/Pending";
import Sent from "../Sent/Sent";

function AllServices() {
  const [view, setView] = useState("pending");

  // duummy data
  const completed = [
    {
      name: "John Dally",
      pro: "Painter",
      date: "March 18, 2022",
    },
    {
      name: "Robert Kiwi",
      pro: "Painter",
      date: "January 3, 2022",
    },
    {
      name: "John Dally",
      pro: "Painter",
      date: "July 28, 2022",
    },
    {
      name: "John Dally",
      pro: "Painter",
      date: "January 3, 2022",
    },
  ];

  const pending = [
    {
      name: "Mark Anderson",
      pro: "Painter",
      date: "March 18, 2022",
    },
    {
      name: "Cecilia Kiwi",
      pro: "Cleaner",
      date: "Febuary 25, 2023",
    },
  ];

  const sent = [
    {
      name: "John Dally",
      pro: "Painter",
      date: "March 18, 2022",
    },
  ];

  const dynamic = () => {
    switch (view) {
      // CHECKLIST
      case "sent":
        return <Sent services={sent} />;

      case "pending":
        return <Pending services={pending} />;

      case "completed":
        return <Completed services={completed} />;

      default:
        return <Pending services={pending} />;
    }
  };

  return (
    <div>
      <h3 className="my-5 text-lg md:text-2xl font-semibold">
        Services you've used
      </h3>

      {/* tabs */}
      {/* Selector */}
      <div className="booking-scroll-none flex overflow-x-auto space-x-3 w-full">
        <div
          onClick={() => setView("completed")}
          className={`${
            view === "completed"
              ? "booking-selector-active"
              : "booking-selector"
          }`}
        >
          Completed({completed.length})
        </div>
        <div
          onClick={() => setView("pending")}
          className={`${
            view === "pending"
              ? " booking-selector-active"
              : " booking-selector"
          }`}
        >
          Pending Approval ({pending.length})
        </div>
        <div
          onClick={() => setView("sent")}
          className={`${
            view === "sent" ? " booking-selector-active" : " booking-selector"
          }`}
        >
          Sent requests ({sent.length})
        </div>
      </div>

      {/* Show Data */}
      <div className="my-10">{dynamic()}</div>
    </div>
  );
}

export default AllServices;
