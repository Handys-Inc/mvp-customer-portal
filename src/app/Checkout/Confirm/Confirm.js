import React, { useState, useEffect, Fragment } from "react";

import Modal from "../../../components/Modal/Modal";

import { FiCheckCircle } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import { CgLoadbarAlt } from "react-icons/cg";

function Confirm({ coupon, setCoupon }) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("success");

  useEffect(() => {
    // fake api call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 5000);
  }, [show]);

  return (
    <Fragment>
      <button onClick={() => setShow(true)} className="btn-primary w-full">
        Confirm Booking
      </button>

      {/* Modal */}
      <Modal title="" isOpen={show} setIsOpen={setShow}>
        {/* confirming wait */}
        {loading ? (
          <div className="text-center mx-auto text-gray mb-20 md:mb-0">
            <CgLoadbarAlt
              size={40}
              className="text-primary mx-auto text-center"
            />
            <h4 className="font-bold text-2xl mt-3 mb-2">Processing booking</h4>
            <p className="w-full md:w-96 mx-auto font-light">
              We are processing your booking request. Please wait
            </p>
          </div>
        ) : (
          <Fragment>
            {/* show details */}

            {
              status === "success" ? (
                // successful booking
                <div className="text-center mx-auto text-gray mb-20 md:mb-0">
                  <FiCheckCircle
                    size={70}
                    className="text-[#34A853] mx-auto text-center"
                  />
                  <h4 className="font-bold text-2xl mt-3 mb-2">
                    Booking request sent
                  </h4>
                  <p className="w-full md:w-96 mx-auto font-light">
                    Your request has been sent to [Service Provider Name]. They
                    will review your request and either accept or decline within
                    24 hours.
                  </p>
                </div>
              ) : (
                <div className="text-center mx-auto text-gray mb-20 md:mb-0">
                  <BsExclamationCircle
                    size={40}
                    className="text-[#EA1D25] mx-auto text-center"
                  />
                  <h4 className="font-bold text-2xl mt-3 mb-2">
                    Booking error!
                  </h4>
                  <p className="w-full md:w-96 mx-auto font-light">
                    We're sorry, but there was a problem processing your booking
                    request. Try again. If the problem persists, please{" "}
                    <span className="under">contact our support team</span> for
                    assistance.
                  </p>
                </div>
              )
              // unsuccessful booking
            }
          </Fragment>
        )}
      </Modal>
    </Fragment>
  );
}

export default Confirm;
