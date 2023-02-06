import React, { useState } from "react";

import Border from "../../../../components/Border/Border";
import Modal from "../../../../components/Modal/Modal";

function EmailUpdate() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("aliceirs@handys.ca");

  return (
    <div className="my-5">
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base md:text-xl font-bold">Email Address</h3>
            <p className="text-sm md:text-lg text-gray font-light">
              aliceiris@handys.ca
            </p>
          </div>
          <p
            onClick={() => setShowModal(true)}
            className="underline hover:text-primary cursor-pointer"
          >
            Edit
          </p>
        </div>
        <Border />
      </div>

      <Modal title="Update email" isOpen={showModal} setIsOpen={setShowModal}>
        <div className="mb-10">
          <h4 className="text-left">
            We'll send you an email to confirm your new email address
          </h4>
          <form>
            <input
              className="form-input mt-5"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <button className="btn-primary w-full my-5">Save</button>
        </div>
      </Modal>
    </div>
  );
}

export default EmailUpdate;
