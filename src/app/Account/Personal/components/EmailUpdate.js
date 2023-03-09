import React, { useState } from "react";

import Border from "../../../../components/Border/Border";
import Modal from "../../../../components/Modal/Modal";

import services from "../../../../services";

import Loader from "../../../../utils/Loader";
import Notify from "../../../../components/Notify/Notify";

function EmailUpdate({ currentUser, userUpdate }) {
  const { email } = currentUser;

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [newEmail, setNewEmail] = useState(email);

  const update = () => {
    setLoading(true);
    services
      .updateEmail(newEmail)
      .then((res) => {
       userUpdate()
        console.log("res", res);
        setLoading(false);
        setShowModal(false);
        Notify("success", "Updated email successfully");
      })
      .catch((e) => {
        setLoading(false);
        Notify("error", "An error occured");
        console.log("error", e);
      });
  };

  return (
    <div className="my-5">
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base md:text-xl font-bold">Email Address</h3>
            <p className="text-sm md:text-lg text-gray font-light">{email}</p>
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
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </form>
          <button
            onClick={() => update()}
            disabled={loading}
            className="btn-primary w-full my-5"
          >
            {loading ? <Loader /> : "Save"}
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default EmailUpdate;
