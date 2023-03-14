import React, { useState } from "react";

import Border from "../../../../components/Border/Border";
import Modal from "../../../../components/Modal/Modal";

import services from "../../../../services";

import Loader from "../../../../utils/Loader";
import Notify from "../../../../components/Notify/Notify";
function PhoneUpdate({currentUser, userUpdate}) {
  const [showModal, setShowModal] = useState(false);

 const [loading, setLoading]= useState(false)

const [phoneNumber, setPhoneNumber] = useState("")

  const update = () => {
    setLoading(true);
    services
      .updateEmail(phoneNumber)
      .then((res) => {
        userUpdate();
        setLoading(false);
        setShowModal(false);
        Notify("success", res.data.message);
      })
      .catch((e) => {
        setLoading(false);
        Notify("error", e.response.data);
      });
  };

  return (
    <div className="my-5">
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base md:text-xl font-bold">Phone Number</h3>
            <p className="text-sm md:text-lg text-gray font-light">
             {phoneNumber}
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

      <Modal
        title="Update phone number"
        isOpen={showModal}
        setIsOpen={setShowModal}
      >
        <div className="mb-10">
          <h4 className="text-left">
            We’ll send you an email to confirm your new phone number
          </h4>
          <form>
            <input
              className="form-input mt-5"
              placeholder="  +1 *** - ***- 4555"
            />
          </form>
          <button className="btn-primary w-full my-5">{loading? <Loader/> : "Verify"}</button>
        </div>
      </Modal>
    </div>
  );
}

export default PhoneUpdate;
