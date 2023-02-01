import React, { Fragment, useEffect, useRef, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import pro from "../../../assets/images/pro.png";

import { FiSearch } from "react-icons/fi";

import "./index.css";

// Date stuff

function FourStep() {
  // what - where - when -- how
  const [step, setStep] = useState("what");

  const [showProviders, setShowProviders] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showLong, setShowLong] = useState(false);

  // counter
  const [counter, setCounter] = useState(1);

  return (
    <div className="max-w-4xl relative mx-auto">
      <div className="flex items-center cursor-pointer  justify-between  border bg-[#F5F5F5] border-mute rounded-full">
        <div class="grid grid-cols-4 text-sm gap-0  text-gray">
          {/* WHAT */}
          <div
            onClick={() => {
              setStep("what");
              setShowProviders(true);
            }}
            className={`${step === "what" ? "active-step" : "general-step"} `}
          >
            <p className="step-desc">What's needed here?</p>
            <input className="step-input" placeholder="Painter" type="text" />
          </div>

          {/* WHERE */}
          <div
            onClick={() => {
              setShowAddress(true);
              setStep("where");
            }}
            className={`${step === "where" ? "active-step" : "general-step"}`}
          >
            <p className="step-desc">Where</p>
            <input
              onClick={() => setStep("where")}
              disabled
              className="step-input"
              placeholder="Kamloops"
              type="text"
            />
          </div>
          {/* WHEN */}
          <div
            onClick={() => setStep("when")}
            className={`${step === "when" ? "active-step" : "general-step"}`}
          >
            <p className="step-desc">When</p>
            <input
              onClick={() => {
                setStep("where");
                setShowDate(true);
              }}
              className="step-input"
              placeholder="Add Date"
              type="text"
            />
          </div>

          {/* HOW LONG */}
          <div
            onClick={() => {
              setStep("how");
              setShowLong(true);
            }}
            className={`${step === "how" ? "active-step" : "general-step"}`}
          >
            <p className="step-desc">How Long?</p>
            <input
              onClick={() => setStep("how")}
              placeholder="Type of job"
              className="step-input"
              type="text"
            />
          </div>
        </div>

        {/* Search */}
        <div className="bg-primary py-2 px-3 rounded-full text-white mr-2">
          <div className="flex items-center h-12">
            <FiSearch className="inline-block mx-2" size={20} />{" "}
            <p className="inline-block mr-3">Search</p>
          </div>
        </div>
      </div>

      {/* Where div */}
      {showProviders && step === "what" && (
        <div className="w-72 inline-block bg-white shadow-xl p-4 mt-2 rounded-2xl border border-faintGray">
          <div className="flex mb-5 gap-2">
            <div>
              <img className="w-12" src={pro} alt="provider" />
            </div>
            <div>
              <h3>James Jenko</h3>
              <p className="text-gray text-sm">Painter</p>
            </div>
          </div>
          <div className="flex mb-5 gap-2">
            <div>
              <img className="w-12" src={pro} alt="provider" />
            </div>
            <div>
              <h3>James Jenko</h3>
              <p className="text-gray text-sm">Painter</p>
            </div>
          </div>
          <div className="flex mb-5 gap-2">
            <div>
              <img className="w-12" src={pro} alt="provider" />
            </div>
            <div>
              <h3>James Jenko</h3>
              <p className="text-gray text-sm">Painter</p>
            </div>
          </div>
          <div className="flex mb-5 gap-2">
            <div>
              <img className="w-12" src={pro} alt="provider" />
            </div>
            <div>
              <h3>James Jenko</h3>
              <p className="text-gray text-sm">Painter</p>
            </div>
          </div>
          <div className="flex mb-5 gap-2">
            <div>
              <img className="w-12" src={pro} alt="provider" />
            </div>
            <div>
              <h3>James Jenko</h3>
              <p className="text-gray text-sm">Painter</p>
            </div>
          </div>
        </div>
      )}

      {/* ADDRESS DIV */}
      {showAddress && step === "where" && (
        <div className="w-96 ml-32 inline-block bg-white shadow-xl p-4 mt-2 rounded-2xl border border-faintGray">
          <input className="form-input mb-3" disabled placeholder="Kamlooops" />
          <input className="form-input-dark mb-3" placeholder="Address" />
          <input
            className="form-input-dark mb-3"
            placeholder="Apt/Suite number (only if you live in a apt/suite)"
          />
          <input className="form-input-dark mb-3" placeholder="Postal Code" />
        </div>
      )}

      {/* DATE DIV */}
      {showDate && step === "when" && (
        <div className="w-full inline-block bg-white shadow-xl p-8 mt-2 rounded-2xl border border-faintGray">
          <div className="text-center mb-5">
            <h3 className="text-lg">When will you be home?</h3>
            <p className="font-light tex-gray text-sm">
              Pick a date or a date range
            </p>
          </div>

          {/* Date Range Picker */}
          <div className="my-5 text-center"></div>
          {/* button */}
          <button className="w-full btn-primary">Set date</button>
        </div>
      )}

      {/* LONG */}
      {showLong && step === "how" && (
        <div className="w-96 absolute right-0 inline-block bg-white shadow-xl p-4 mt-2 rounded-2xl border border-faintGray">
          <p className="text-gray text-sm">Number of hours</p>
          <div className="border border-gray rounded-full flex w-1/3 text-center justify-between divide-x divide-gray mt-2">
            <div
              onClick={() => setCounter(counter - 1)}
              className="cursor-pointer hover:bg-primary hover:rounded-tl-2xl hover:rounded-bl-2xl hover:text-white p-1 mx-auto w-1/3"
            >
              -
            </div>

            <div className="p-1 mx-auto w-1/3">{counter}</div>

            <div
              onClick={() => setCounter(counter + 1)}
              className=" hover:bg-primary hover:rounded-tr-2xl hover:rounded-br-2xl hover:text-white cursor-pointer p-1 mx-auto w-1/3"
            >
              +
            </div>
          </div>

          <div className="my-5">
            <p className="text-gray text-sm">Description</p>
            <textarea
              placeholder="Give a short or long description of what you need done"
              className="form-input w-full"
              type="text"
              rows="4"
            />
          </div>

          <div>
            <p className="text-gray font-semibold text-sm inline-block">
              Upload up to 3 photos
            </p>
            <span
              style={{ fontSize: "0.4rem" }}
              className="ml-4 text-xs bg-primary bg-opacity-20 text-gray rounded-full p-1"
            >
              RECOMMENDED
            </span>
          </div>
          <div className="my-3">
            {" "}
            <div className="border border-gray border-dashed w-16 h-16 rounded-lg text-3xl font-bold flex justify-between items-center">
              <p className="mx-auto">+</p>
            </div>
          </div>

          <button
            onClick={() => setShowLong(false)}
            className="btn-primary my-5 w-full"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}

export default FourStep;
