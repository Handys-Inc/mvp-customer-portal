import React from "react";

function AddTaxInfo() {
  return (
    <div>
      <input
        className="form-input mb-4"
        type="text"
        placeholder="Tax payer name"
      />
      <input
        className="form-input mb-4"
        type="text"
        placeholder="Tax payer last name"
      />
      <input
        className="form-input mb-4"
        type="text"
        placeholder="Tax payer business name (option)"
      />
      <input className="form-input mb-4" type="text" placeholder="GST ID" />
      <input className="form-input mb-4" type="text" placeholder="HST ID" />
      <input
        className="form-input mb-4"
        type="text"
        placeholder="Address line 1"
      />
      <input
        className="form-input mb-4"
        type="text"
        placeholder="Address line 2 (optional)"
      />

      <input className="form-input mb-4" type="text" placeholder="City" />

      {/* Province */}
      <div className="flex gap-3">
        <input
          className="form-input mb-4"
          type="text"
          placeholder="Province or Region"
        />
        <input
          className="form-input mb-4"
          type="text"
          placeholder="Postal Code"
        />
      </div>
      <button className="btn-primary w-full mt-2">Add tax info</button>
    </div>
  );
}

export default AddTaxInfo;
