import React from "react";

import cleaner from "../../../assets/images/cleaner.png";

function NoHistory() {
  return (
    <div className="border border-mute rounded-xl my-10 items-center flex justify-between">
      <div className="pl-20 flex-1">
        <h3 className="font-semibold mb-2 text-2xl">No services booked yet</h3>
        <p className="mb-5 font-light w-72 text-lg">
          Need task done? Connect to the right handyperson
        </p>
        <button className="btn-primary">Start searching</button>
      </div>
      <div className="flex-1">
        <img
          className="rounded-tr-xl rounded-br-xl"
          src={cleaner}
          alt="handy person"
        />
      </div>
    </div>
  );
}

export default NoHistory;
