import React from "react";
import RawBorder from "../../../components/Border/RawBorder";

import profile from "../../../assets/images/pro.png";

import dot from "../../../assets/icons/dot.svg";
import Border from "../../../components/Border/Border";

function Selector() {
  return (
    <div>
      <div className="h-16 flex items-center">
        <h3 className="font-bold text-xl place-self-center ml-10">Messages</h3>
      </div>
      <RawBorder />

      {/* Message selected */}
      <div className="flex gap-5 p-5 bg-faintGray cursor-pointer mb-5 rounded-2xl m-2">
        <div>
          <img className="w-24" src={profile} alt="provider" />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-xl">Jane, Painter</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Booking Completed <img className="mt-1" src={dot} alt="dot" /> Jan
            13
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="flex gap-5 p-5 hover:bg-faintGray cursor-pointer rounded-2xl m-2">
        <div>
          <img className="w-24" src={profile} alt="provider" />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-xl">Jane, Painter</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Booking Completed <img className="mt-1" src={dot} alt="dot" /> Jan
            13
          </div>
        </div>
      </div>

      <RawBorder />
      {/* 3 */}
      <div className="flex gap-5 p-5 hover:bg-faintGray cursor-pointer rounded-2xl m-2">
        <div>
          <img className="w-24" src={profile} alt="provider" />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-xl">Jane, Painter</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Booking Completed <img className="mt-1" src={dot} alt="dot" /> Jan
            13
          </div>
        </div>
      </div>

      <RawBorder />

      {/* 4 */}
      <div className="flex gap-5 p-5 hover:bg-faintGray cursor-pointer rounded-2xl m-2">
        <div>
          <img className="w-24" src={profile} alt="provider" />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-xl">Jane, Painter</h3>
          <p className="text-gray text-sm font-semibold">
            Hello Alice, I'd like to know when you'll be available
          </p>
          <div className="text-gray mt-2 flex text-xs gap-2 items-center">
            Booking Completed <img className="mt-1" src={dot} alt="dot" /> Jan
            13
          </div>
        </div>
      </div>
      <RawBorder />
    </div>
  );
}

export default Selector;
