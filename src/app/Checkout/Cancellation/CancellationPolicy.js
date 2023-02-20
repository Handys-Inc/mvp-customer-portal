import React, { useState, Fragment } from "react";

import Modal from "../../../components/Modal/Modal";
import Border from "../../../components/Border/Border";

function CancellationPolicy() {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <span
        onClick={() => setShow(true)}
        className="underline hover:text-primary font-bold cursor-pointer"
      >
        Learn more
      </span>

      {/* Modal */}
      <Modal title="Cancellation Policy" isOpen={show} setIsOpen={setShow}>
        <Border />
        <h4 className="text-left font-semibold text-xl">Cancel by</h4>
        <div className="flex  justify-between my-5 text-left text-gray">
          <div className="w-1/3">
            <h4 className="text-lg font-bold">48 hours</h4>
            <p className="text-gray font-light text-sm -mt-1">after booking</p>
          </div>

          <p className="w-2/3">Full refund: Get back 100% of what you paid.</p>
        </div>
        <Border />
        <div className="flex  justify-between my-5 text-left text-gray">
          <div className="w-1/3">
            <h4 className="text-lg font-bold">72 hours</h4>
            <p className="text-gray font-light text-sm -mt-1">after booking</p>
          </div>

          <p className="w-2/3">
            Partial refund: Get back 50% of every hour. No refund of the service
            fee.
          </p>
        </div>
      </Modal>
    </Fragment>
  );
}

export default CancellationPolicy;
