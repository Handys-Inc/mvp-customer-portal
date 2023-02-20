import React from "react";

function AddressModal({ address, setAddress, setIsOpen }) {
  return (
    <div className="w-full">
      <div className="">
        <input className="form-input mb-3" disabled placeholder="Kamlooops" />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="form-input-dark mb-3"
          placeholder="Address"
        />
        <input
          className="form-input-dark mb-3"
          placeholder="Apt/Suite number (only if you live in a apt/suite)"
        />
        <input className="form-input-dark mb-3" placeholder="Postal Code" />
      </div>

      <button onClick={() => setIsOpen(false)} className="w-full btn-primary">
        Save
      </button>
    </div>
  );
}

export default AddressModal;
