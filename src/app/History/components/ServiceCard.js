import React, { useState } from "react";

import Modal from "../../../components/Modal/Modal";

import Details from "./Details";
import Report from "./Report";

import prov from "../../../assets/images/prov-1.png";

function ServiceCard({ service }) {
  const [detailsModal, setDetailsModal] = useState(false);

  const [reportModal, setReportModal] = useState(false);

  return (
    <div>
      <div
        onClick={() => setDetailsModal(true)}
        className="flex gap-5 cursor-pointer"
      >
        {/*  */}
        <div>
          <img
            src={prov}
            className="w-20 h-20 bg-cover bg-center rounded-xl"
            alt="provider"
          />
        </div>

        {/* Service Pro */}
        <div>
          <h2 className="font-bold text-gray">{service.name}</h2>
          <h4 className="text-gray font-light text-sm">{service.pro}</h4>
          <p className="mt-2 font-light text-gray text-xs">{service.date}</p>
        </div>
      </div>

      {/* Service Info */}
      <Modal
        full={true}
        back={true}
        title="Service info"
        isOpen={detailsModal}
        setIsOpen={setDetailsModal}
      >
        <Details
          setDetailsModal={setDetailsModal}
          setReportModal={setReportModal}
        />
      </Modal>

      {/* Report Modal */}
      <Modal title="Report" isOpen={reportModal} setIsOpen={setReportModal}>
        <Report
          setDetailsModal={setDetailsModal}
          setReportModal={setReportModal}
        />
      </Modal>
    </div>
  );
}

export default ServiceCard;
