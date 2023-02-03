import React, { useState } from "react";

import pro from "../../assets/images/pro.png";

import Border from "../../components/Border/Border";
import Datepicker from "../../components/Search/Datepicker/Datepicker";

import "./index.css";

function MobileSearch() {
  // date
  const [selected, setSelected] = useState(new Date());
  // number of hours
  const [counter, setCounter] = useState(1);

  // what, where, when, how long
  const [step, setStep] = useState("what");

  return (
    <div className="w-full">
      {/* What */}
      <div className="mobile-search-card">
        <div onClick={() => setStep("what")} className="search-header">
          <p>What's needed?</p>
          <p className="search-desc">Painter</p>
        </div>
        {step === "what" && (
          <div>
            <input
              className="form-input-rounded"
              placeholder="Search Handyperson"
            />
            <div className="w-full mt-8">
              <div onClick={() => setStep("where")} className="flex mb-5 gap-2">
                <div>
                  <img className="w-12" src={pro} alt="provider" />
                </div>
                <div>
                  <h3>James Jenko</h3>
                  <p className="text-gray text-sm">Painter</p>
                </div>
              </div>
              <div onClick={() => setStep("where")} className="flex mb-5 gap-2">
                <div>
                  <img className="w-12" src={pro} alt="provider" />
                </div>
                <div>
                  <h3>James Jenko</h3>
                  <p className="text-gray text-sm">Painter</p>
                </div>
              </div>
              <div onClick={() => setStep("where")} className="flex mb-5 gap-2">
                <div>
                  <img className="w-12" src={pro} alt="provider" />
                </div>
                <div>
                  <h3>James Jenko</h3>
                  <p className="text-gray text-sm">Painter</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Where */}
      <div className="mobile-search-card">
        <div onClick={() => setStep("where")} className="search-header">
          <p>Where</p>
          <p className="search-desc">What's your address?</p>
        </div>
        {step === "where" && (
          <div>
            {" "}
            <div className="">
              <input
                className="form-input mb-3"
                disabled
                placeholder="Kamlooops"
              />
              <input className="form-input-dark mb-3" placeholder="Address" />
              <input
                className="form-input-dark mb-3"
                placeholder="Apt/Suite number (only if you live in a apt/suite)"
              />
              <input
                className="form-input-dark mb-3"
                placeholder="Postal Code"
              />
            </div>
            <Border />
            <div className="flex flex-between justify-end">
              <button onClick={() => setStep("when")} className="btn-primary">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* When */}
      <div className="mobile-search-card">
        <div onClick={() => setStep("when")} className="search-header">
          <p>When</p>
          <p className="search-desc">Add date</p>
        </div>
        {step === "when" && (
          <div>
            <Datepicker
              number={1}
              selected={selected}
              setSelected={setSelected}
            />
            <Border />
            <div className="flex flex-between justify-end">
              <button onClick={() => setStep("long")} className="btn-primary">
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* How long */}
      <div className="mobile-search-card">
        <div onClick={() => setStep("long")} className="search-header">
          <p>How Long?</p>
          <p className="search-desc">Job Type</p>
        </div>
        {step === "long" && (
          <div>
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

            <Border />
            <div className="flex justify-between">
              <p
                onClick={() => setStep("what")}
                className="underline underline-offset-4"
              >
                Clear All
              </p>
              <button className="btn-primary">Search</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileSearch;
