import React, { useState } from "react";

import AccountHeader from "../components/AccountHeader";

import Border from "../../../components/Border/Border";

import Modal from "../../../components/Modal/Modal";
import UpdatePassword from "./components/UpdatePassword";
import DeactivateAccount from "./components/DeactivateAccount";

import Layout from "../../../components/Layout/Layout";

function Security() {
  const [passwordModal, setPasswordModal] = useState(false);
  const [deacModal, setDeacModal] = useState(false);

  return (
    <Layout showBottomNav={false}>
      <AccountHeader title="Login & Security" />

      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold">Login</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm md:text-lg text-gray font-light">
              Last updated 2 years ago
            </p>
          </div>
          <p
            onClick={() => setPasswordModal(true)}
            className="text-sm md:text-base cursor-pointer text-red-600"
          >
            Update
          </p>
        </div>

        <Border />
        <h3 className="text-lg md:text-2xl font-bold">Account</h3>
        {/* Deactivate */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm md:text-lg text-gray font-light">
              Deactivate your account
            </p>
          </div>
          <p
            onClick={() => setDeacModal(true)}
            className="text-sm md:text-base cursor-pointer text-red-600"
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
    </Layout>
  );
}

export default Security;
