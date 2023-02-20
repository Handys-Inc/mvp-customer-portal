import React, { useState, Fragment } from "react";

import Modal from "../../../components/Modal/Modal";


function Coupon({ coupon, setCoupon }) {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <span
        onClick={() => setShow(true)}
        className="underline hover:text-primary  text-xs underline-offset-4 font-bold cursor-pointer"
      >
        Enter a coupon
      </span>

      {/* Modal */}
      <Modal title="Coupons" isOpen={show} setIsOpen={setShow}>

           <input
           value={coupon}
           onChange={(e) => setCoupon(e.target.value)}
          className="form-input-dark mb-3"
          placeholder="Coupon code"
        />
      
      <button onClick={() => setShow(false)} className="w-full btn-primary">Add</button>
      </Modal>
    </Fragment>
  );
}

export default Coupon;
