import React from "react";

import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

function DateModal({ number = 2, selected, setSelected, setIsOpen }) {
  return (
    <div>
      <DayPicker
        className="text-sm mx-auto inline-block"
        mode="range"
        numberOfMonths={number}
        selected={selected}
        onSelect={setSelected}
      />
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className="w-full btn-primary my-5"
      >
        Set date
      </button>
    </div>
  );
}

export default DateModal;
