import React from "react";

import RawBorder from "../../../components/Border/RawBorder";

import profile from "../../../assets/images/pro.png";

import { BsArrowUp } from "react-icons/bs";

import { IoImage } from "react-icons/io5";

function MessageView({ setDetails, details }) {
  return (
    <div className="relative  h-[88vh]">
      {/* Header for who it is and onine status */}
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

      {/* Actual Messages */}
      <div className=" h-[68vh] overflow-y-scroll w-full text-center mt-5">
        <p>January 13</p>
        <div>
          <p className="message-pill">
            To protect your payment, always communicate and pay through handys
            website
          </p>
        </div>

        <p className="message-pill my-3">
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

        {/* Message Items */}
        <div>
          <div className="flex gap-3 justify-start px-10 my-5">
            <div className="">
              <img className="w-14" src={profile} alt="provider" />
            </div>
            <div className="text-left w-3/5">
              <h3 className="font-semibold text-base">
                Jane <span className="text-xs text-gray">6:55pm</span>
              </h3>
              <p className="text-gray text-sm font-light mt-2">
                Dear Alice, This message is to confirm your booking for 2 hours,
                January 14. I’ll be at your location to complete the work as
                scheduled. <br />
                <br /> To ensure a smooth process, please make sure the area to
                be painted is clear of furniture and personal items. If there
                are any special instructions or areas you would like us to focus
                on, please let me know in advance.
                <br />
                <br /> If you need to make any changes to the booking or have
                any questions, please do not hesitate to contact me. I look
                forward to providing you with my professional painting services.
                <br />
                <br /> Best regards, Jane.
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-start px-10 my-5">
            <div className="">
              <img className="w-14" src={profile} alt="provider" />
            </div>
            <div className="text-left w-3/5">
              <h3 className="font-semibold text-base">
                Jane <span className="text-xs text-gray">6:55pm</span>
              </h3>
              <p className="text-gray text-sm font-light mt-2">
                Dear Alice, This message is to confirm your booking for 2 hours,
                January 14. I’ll be at your location to complete the work as
                scheduled. <br />
                <br /> To ensure a smooth process, please make sure the area to
                be painted is clear of furniture and personal items. If there
                are any special instructions or areas you would like us to focus
                on, please let me know in advance.
                <br />
                <br /> If you need to make any changes to the booking or have
                any questions, please do not hesitate to contact me. I look
                forward to providing you with my professional painting services.
                <br />
                <br /> Best regards, Jane.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="absolute  bottom-0 w-11/12 bg-white  md:mx-5">
        <div className="flex gap-4 mb-5 w-11/12 items-center">
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
    </div>
  );
}

export default MessageView;
//
