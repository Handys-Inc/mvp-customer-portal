import React, { useState } from "react";

import { FiSearch } from "react-icons/fi";

import "./index.css";

function FourStep() {
  // what - where - when -- how
  const [step, setStep] = useState("what");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center cursor-pointer  justify-between  border bg-[#F5F5F5] border-mute rounded-full">
        <div class="grid grid-cols-4 text-sm gap-0  text-gray">
          {/* WHAT */}
          <div
            onClick={() => setStep("what")}
            className={`${step === "what" ? "active-step" : "general-step"} `}
          >
            <p className="step-desc">What's needed here?</p>
            <input
              onClick={() => setStep("what")}
              className="step-input"
              placeholder="Painter"
              type="text"
            />
          </div>

          {/* WHERE */}
          <div
            onClick={() => setStep("where")}
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
              onClick={() => setStep("where")}
              className="step-input"
              type="date"
            />
          </div>

          {/* HOW LONG */}
          <div
            onClick={() => setStep("how")}
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
    </div>
  );
}

export default FourStep;
