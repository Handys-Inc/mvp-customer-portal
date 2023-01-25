import React, { useState } from "react";
import Border from "../../../components/Border/Border";

function Report() {
  // not-right, harrassed, unprofessional
  const [reportOption, setReportOption] = useState("not-right");
  return (
    <div className="text-left">
      <Border />
      <h4 className="text-xl mb-3">Select Option</h4>

      {/* Options */}
      <div className="mb-5 text-gray text-lg">
        <form>
          <fieldset>
            <div className="flex items-center justify-between my-3">
              <label for="not-right">Service not done right</label>
              <input
                onChange={(e) => setReportOption(e.target.value)}
                id="report-option"
                name="report"
                value="not-right"
                type="radio"
              />
            </div>
            <div className="flex items-center justify-between my-3">
              <label for="harassed">I was harrassed</label>
              <input
                onChange={(e) => setReportOption(e.target.value)}
                id="report-option"
                name="report"
                value="harassed"
                type="radio"
              />
            </div>
            <div className="flex items-center justify-between my-3">
              <label for="unprofessional">Unprofessional attitude</label>
              <input
                onChange={(e) => setReportOption(e.target.value)}
                id="report-option"
                name="report"
                value="unprofessional"
                type="radio"
              />
            </div>
          </fieldset>
        </form>
      </div>

      {/* more info */}
      <h4 className="text-semibold text-lg">Give us more information</h4>
      <textarea
        rows={4}
        className="w-full border border-mute rounded-lg mt-4 p-5"
        type="text"
        placeholder="Give a short or long description of the report"
      />

      <div>
        {reportOption === "not-right" && (
          <div>
            <h4 className="mt-4">Upload Photos</h4>
            <div className="w-32 h-32 border font-bold border-mute mt-5 flex items-center border-dashed justify-center rounded-lg text-4xl">
              +
            </div>
          </div>
        )}
      </div>
      <button className="btn-primary my-5 w-full">Report</button>
    </div>
  );
}

export default Report;
