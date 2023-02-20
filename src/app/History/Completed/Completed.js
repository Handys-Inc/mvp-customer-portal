import React from "react";

import ServiceCard from "../components/ServiceCard";

function Completed({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
      {services.map((single, index) => {
        return <ServiceCard type="completed" index={index} service={single} />;
      })}
    </div>
  );
}

export default Completed;
