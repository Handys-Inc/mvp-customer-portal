import React from "react";

import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import "./index.css";

export default function Datepicker({ number = 2, selected, setSelected }) {
  return (
    <DayPicker
      className="text-sm mx-auto inline-block"
      mode="range"
      numberOfMonths={number}
      selected={selected}
      onSelect={setSelected}
    />
  );
}
