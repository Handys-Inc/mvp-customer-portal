import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsTags } from "react-icons/bs";

function BookingCard() {
  return (
    <div>
      <div className="rounded-xl shadow-lg w-full p-6">
        <div className="flex justify-between">
          <p className="text-gray text-lg">
            <span className="font-bold text-black text-2xl">$65 </span> per hour
          </p>
          <div className="flex items-center text-gray text-sm">
            <AiOutlineLike size={24} /> +24
          </div>
        </div>

        {/* DATE AND NUMBER OF HOURS */}
        <div className="text-gray font-light text-center my-10">
          Date and hours here
        </div>

        {/* Book Button */}
        <div className="mt-5">
          <button className="btn-primary w-full">Book</button>
          <p className="text-sm font-light text-gray text-center mt-2">
            You won't be charged until job completion is confirmed
          </p>
        </div>

        {/* SUMMARY */}
        <div className="text-gray font-light text-center my-10">
          Charges summary here
        </div>
      </div>
      <p className="text-sm font-light text-gray text-center mt-5">
        Pricing may change based on hours used
      </p>
      <div>
        <div className="my-5 border text-gray font-light border-mute rounded-lg p-2 text-center">
          <BsTags className="inline-block mr-2 text-primary" />{" "}
          <span>
            This per hour rate is less than the avg rate in the industry
          </span>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
