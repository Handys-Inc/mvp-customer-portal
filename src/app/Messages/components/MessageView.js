import React from "react";

import RawBorder from "../../../components/Border/RawBorder";

function MessageView({ setDetails, details }) {
  return (
    <div>
      <div className="h-16 flex justify-between items-center">
        <div>
          {" "}
          <h3 className="font-bold text-lg place-self-center ml-10">
            Jane, Painter
            <span className="block text-xs text-green-600">Online</span>
          </h3>
        </div>
        <div className="mr-5">
          <button
            onClick={() => setDetails(!details)}
            className="btn-dark-outline-sm"
          >
            {details ? "Hide " : "Show "}
            Details
          </button>
        </div>
      </div>
      <RawBorder />
    </div>
  );
}

export default MessageView;
