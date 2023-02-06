import React, { useState } from "react";
import Border from "../../../../components/Border/Border";

import Modal from "../../../../components/Modal/Modal";
import AddCard from "./AddCard";
import PaymentHistory from "./PaymentHistory";

function AllPayments() {
  const [addCardModal, setAddCardModal] = useState(false);
  const [historyModal, setHistoryModal] = useState(false);

  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold mb-1">Payments</h3>
      <p className="text-lg text-gray font-light mb-5">
        Keep track of all your payments and refunds
      </p>
      <button onClick={() => setHistoryModal(true)} className="btn-primary">
        View history
      </button>
      <Border />
      <h3 className="text-2xl font-bold mb-1">Payment methods</h3>
      <p className="text-lg text-gray font-light mb-5">
        Add a payment method using our secure payment system
      </p>
      <button onClick={() => setAddCardModal(true)} className="btn-primary">
        Add payment method
      </button>

      {/* Add Card Modal */}
      <Modal
        title="Add Card Details"
        isOpen={addCardModal}
        setIsOpen={setAddCardModal}
      >
        <AddCard />
      </Modal>

      {/* History Modal */}
      <Modal
        full={true}
        back={true}
        title="Payments history"
        isOpen={historyModal}
        setIsOpen={setHistoryModal}
      >
        <PaymentHistory />
      </Modal>
    </div>
  );
}

export default AllPayments;
