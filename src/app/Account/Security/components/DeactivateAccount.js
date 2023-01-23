import React from "react";

function DeactivateAccount() {
  return (
    <div>
      <p className="text-xl text-gray  mb-10 w-96 mx-auto">
        Are you sure you want to deactivate your handys account
      </p>
      <button className="w-full btn-primary">
        {" "}
        Yes, deactivate my account
      </button>
    </div>
  );
}

export default DeactivateAccount;
