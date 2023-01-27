import React from "react";
import Border from "../../../../components/Border/Border";

import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

function ExistingAccount({ setExistingModal, setVerifyModal }) {
  return (
    <div className="text-left">
      <Border />
      <h4 className="text-2xl font-bold">Let us know it's really you</h4>
      <p className="text-gray mt-2 text-lg font-light w-96">
        To continue, you'll need to confirm your account through your email
      </p>

      <div
        onClick={() => {
          setExistingModal(false);
          setVerifyModal(true);
        }}
        className="cursor-pointer hover:text-primary flex my-5 justify-between items-center"
      >
        <p className="flex items-center text-gray text-lg">
          {" "}
          <HiOutlineMail size={24} className="inline-block mr-3" /> Email
        </p>
        <IoIosArrowForward />
      </div>

      <Border />

      <p className="underline underline-offset-4 font-bold cursor-pointer">
        Need help?
      </p>
    </div>
  );
}

export default ExistingAccount;
