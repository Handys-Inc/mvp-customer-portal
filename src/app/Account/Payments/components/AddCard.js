import React from "react";

// payment methods
import amex from "../../../../assets/icons/payment/amex.svg";
import visa from "../../../../assets/icons/payment/visa.svg";
import mastercard from "../../../../assets/icons/payment/mastercard.svg";

function AddCard() {
  return (
    <div>
      {/* payment methods */}
      <div className="flex items-center gap-4">
        <img src={visa} alt="visa" />
        <img src={amex} alt="amex" />
        <img src={mastercard} alt="mastercard" />
      </div>

      {/* Other Details */}
      <div className="text-gray font-light border rounded-xl border-mute my-5">
        <input
          className="w-full border-transparent focus:border-transparent focus:ring-0 my-3 pl-5 mt-2 focus:outline-none outline-none"
          placeholder="Card Number"
          type="text"
        />

        <div className="text-mute block">
          <hr className="" />
        </div>
        <div className="grid items-center text-left grid-cols-2 divide-x divide-mute">
          <div>
            <input
              className="pl-5 my-3 border-transparent focus:border-transparent focus:ring-0"
              type=" text"
              placeholder="Expiry date"
            />
          </div>
          <div>
            <input
              className="pl-5 my-3 border-transparent focus:border-transparent focus:ring-0"
              type="text"
              placeholder="CVV"
            />
          </div>
        </div>
      </div>

      {/* Postal Code */}
      <input
        className="form-input mb-3"
        type="text"
        placeholder="Postal Code"
      />

      {/* Country */}
      <input
        className="form-input mb-3"
        type="text"
        placeholder="Country / Region"
      />

      {/* Button to add Card */}
      <button className="btn-primary w-full"> Add Card</button>
    </div>
  );
}

export default AddCard;
