import React, { useState, Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Border from "../../../components/Border/Border";

import Modal from "../../../components/Modal/Modal";

import { format } from "date-fns";

import dayjs from "dayjs";

// payment methods
import amex from "../../../assets/icons/payment/amex.svg";
import visa from "../../../assets/icons/payment/visa.svg";
import mastercard from "../../../assets/icons/payment/mastercard.svg";
import paypal from "../../../assets/icons/payment/paypal.svg";
import googlepay from "../../../assets/icons/payment/googlepay.svg";
import applepay from "../../../assets/icons/payment/applepay.svg";

// modals
import AddressModal from "./AddressModal";
import DateModal from "./DateModal";
import CancellationPolicy from "../Cancellation/CancellationPolicy";
import Coupon from "../Coupon/Coupon";

// dayjs localizes
var localizedFormat = require("dayjs/plugin/localizedFormat");

function CheckInfo({ coupon, setCoupon }) {
  dayjs.extend(localizedFormat);

  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // modal
  const [dateModal, setDateModal] = useState(false);

  const [addressModal, setAddressModal] = useState(false);

  // setting date range
  useEffect(() => {
    // Start Date

    if (date !== undefined && date.from !== undefined) {
      setStartDate(format(new Date(date.from), "yyyy-MM-dd"));
    }

    // End Date
    if (date !== undefined && date.to !== undefined) {
      setEndDate(format(new Date(date.to), "yyyy-MM-dd"));
    }
  }, [date]);

  return (
    <div>
      <h3>Your Order</h3>
      {/* Date */}
      <div className="my-5 flex justify-between">
        <div>
          <h3 className="font-semibold text-xl">Dates</h3>
          <p className="text-gray text-sm">
            {" "}
            {dayjs(startDate).format("ll")}{" "}
            {endDate && <Fragment> - {dayjs(endDate).format("ll")}</Fragment>}
          </p>
        </div>
        <p
          onClick={() => setDateModal(true)}
          className="underline cursor-pointer hover:text-primary"
        >
          Edit
        </p>
        {/* Edit date Modal */}
        <Modal
          title="When will you be home?"
          isOpen={dateModal}
          setIsOpen={setDateModal}
        >
          <DateModal
            setIsOpen={setDateModal}
            selected={date}
            setSelected={setDate}
          />
        </Modal>
      </div>

      {/* Address */}
      <div className="my-5 mb-10 flex justify-between">
        <div>
          <h3 className="font-semibold text-xl">Address</h3>
          <p className="text-gray text-sm">{address}, Kamloops, Canada</p>
        </div>
        <p
          onClick={() => setAddressModal(true)}
          className="underline cursor-pointer hover:text-primary"
        >
          Edit
        </p>

        <Modal
          title="Address"
          isOpen={addressModal}
          setIsOpen={setAddressModal}
        >
          <AddressModal
            setIsOpen={setAddressModal}
            selected={date}
            address={address}
            setAddress={setAddress}
          />
        </Modal>
      </div>
      <Border />

      <div className="flex justify-between items-center">
        <h3 className="h3-header">Pay With</h3>

        {/* payment methods */}
        <div className="grid grid-cols-6 items-center gap-1">
          <img src={visa} alt="visa" />
          <img src={amex} alt="amex" />
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
          <img src={googlepay} alt="google pay" />
          <img src={applepay} alt="apple pay" />
        </div>
      </div>

      <select className="w-full mt-2 mb-5 border px-4 py-3 rounded-lg border-mute">
        <option>Paypal</option>
      </select>

      {/* coupon */}
      <Coupon coupon={coupon} setCoupon={setCoupon} />

      <Border />

      {/* cancellation policy */}
      <h3 className="h3-header">Cancellation Policy</h3>
      <p className="text-gray  font-light">
        Free cancellation for 48 hours.
        <CancellationPolicy />
      </p>
    </div>
  );
}

export default CheckInfo;
