import React from "react";

import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import "./index.css";

export default function Datepicker({ selected, setSelected }) {
  return (
    <DayPicker
      className="text-sm mx-auto inline-block"
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
