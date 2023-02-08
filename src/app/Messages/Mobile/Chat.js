import React from "react";

import { BsArrowUp } from "react-icons/bs";

import { IoImage } from "react-icons/io5";

function Chat({ details }) {
  return (
    <div>
      <div className="w-full text-center mt-5">
        <p>January 13</p>
        <div>
          <p className="message-pill">
            To protect your payment, always communicate and pay through handys
            website
          </p>
        </div>

        <p className="message-pill text-xs my-3">
          Service providers will not be shown your profile photo until after
          booking is confirmed. <span className="underline">Learn more</span>
        </p>
        <div>
          <p className="message-pill">
            Your booking is confirmed for January, 14.{" "}
            <span className="underline">Show booking</span>
          </p>
        </div>

        <p className="text-gray text-sm mt-2">Typically replies in 5 mins</p>

        {/* Message Item */}
        <div className="flex gap-3 justify-start my-5">
          <div className="">
            <img className="w-14" src={details.img} alt="provider" />
          </div>
          <div className="text-left w-full">
            <h3 className="font-semibold text-base">
              {details.name} <span className="text-xs text-gray">6:55pm</span>
            </h3>
            <p className="text-gray text-sm font-light mt-2">
              {details.lastMessage}
            </p>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="absolute bottom-4 w-11/12 bg-white flex gap-4 items-center md:mx-5">
        <div className="rounded-full flex items-center justify-center bg-faintGray w-10 h-10">
          <IoImage />
        </div>
        <div className="border border-gray w-full text-left flex justify-between pl-4 pr-2 rounded-full py-1">
          <input className="appearance-none" placeholder="Message Jane" />
          <div className="bg-primary h-10 w-10 flex items-center justify-center rounded-full text-white">
            <BsArrowUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
