import React, {useState} from "react";

import Modal from "../../../../components/Modal/Modal";

import AddTaxInfo from "./AddTaxInfo";

function Tax() {
const [taxModal, setTaxModal] = useState(false)

  return (
    <div className="max-w-5xl mx-auto my-10 mb-20">
      {" "}
      <h3 className="text-2xl font-bold mb-1">Taxpayer Information</h3>
      <p className="text-lg text-gray font-light mb-5">
        Adding tax information is optional for service providers.
      </p>
      <button onClick={() => setTaxModal(true)} className="btn-primary">Add tax info</button>
    
       <Modal
        title="Tax information"
        isOpen={taxModal}
        setIsOpen={setTaxModal}
      >
       <AddTaxInfo/>
      </Modal>
    
    </div>
  );
}

export default Tax;
