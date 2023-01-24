import React, { useState } from "react";

import Modal from "../../../components/Modal/Modal";

import Details from "./Details";

function ServiceCard({ service }) {
  const [detailsModal, setDetailsModal] = useState(false);
  return (
    <div>
      <div
        onClick={() => setDetailsModal(true)}
        className="flex gap-5 cursor-pointer"
      >
        {/*  */}
        <div className="w-20 h-20 bg-gray rounded-xl"></div>

        {/* Service Pro */}
        <div>
          <h2 className="font-bold text-gray">{service.name}</h2>
          <h4 className="text-gray font-semibold">{service.pro}</h4>
          <p className="mt-2 font-light text-gray text-xs">{service.date}</p>
        </div>
      </div>

      {/* Service Info */}
      <Modal
        title="Service info"
        isOpen={detailsModal}
        setIsOpen={setDetailsModal}
      >
        <Details />
      </Modal>
    </div>
  );
}

export default ServiceCard;
