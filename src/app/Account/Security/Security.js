import React, { useState } from "react";

import Header from "../../../components/Header/Header";

import AccountHeader from "../components/AccountHeader";

import Border from "../../../components/Border/Border";

import Modal from "../../../components/Modal/Modal";
import UpdatePassword from "./components/UpdatePassword";
import DeactivateAccount from "./components/DeactivateAccount";

function Security() {
  const [passwordModal, setPasswordModal] = useState(false);
  const [deacModal, setDeacModal] = useState(false);

  return (
    <div>
      <Header />
      <AccountHeader title="Login & Security" />

      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold">Login</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-gray font-light">
              Last updated 2 years ago
            </p>
          </div>
          <p
            onClick={() => setPasswordModal(true)}
            className=" cursor-pointer text-red-600"
          >
            Update
          </p>
        </div>

        <Border />
        <h3 className="text-2xl font-bold">Account</h3>
        {/* Deactivate */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-gray font-light">
              Deactivate your account
            </p>
          </div>
          <p
            onClick={() => setDeacModal(true)}
            className=" cursor-pointer text-red-600"
          >
            Deactivate
          </p>
        </div>
      </div>

      {/* Update Passsword Modal */}
      <Modal
        title="Change Password"
        isOpen={passwordModal}
        setIsOpen={setPasswordModal}
      >
        <UpdatePassword />
      </Modal>

      {/* Deactivate Account */}
      <Modal
        title="Deactivate account"
        isOpen={deacModal}
        setIsOpen={setDeacModal}
      >
        <DeactivateAccount />
      </Modal>
    </div>
  );
}

export default Security;
