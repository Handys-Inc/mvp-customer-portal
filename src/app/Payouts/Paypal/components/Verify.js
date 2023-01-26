import React from "react";

function Verify() {
  return (
    <div>
      <p>Enter the code sent to your email</p>
  <div className="my-10 flex flex-row gap-5  justify-between">
                <input className="digit-input" type="number" />
                <input className="digit-input" type="number" />
                <input className="digit-input" type="number" />
                <input className="digit-input" type="number" />
              </div>
      <button className="btn-primary w-full">Confirm</button>
    </div>
  );
}

export default Verify;
