import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

function AllServices() {
  const [services, setServices] = useState([
    {
      name: "John Dally",
      pro: "Painter",
      date: "March 18, 2022",
    },
    {
      name: "Robert Kiwi",
      pro: "Painter",
      date: "January 3, 2022",
    },
    {
      name: "John Dally",
      pro: "Painter",
      date: "July 28, 2022",
    },
    {
      name: "John Dally",
      pro: "Painter",
      date: "January 3, 2022",
    },
  ]);

  return (
    <div>
      <h3 className="my-5 text-lg md:text-2xl font-semibold">
        Services you've used
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {services.map((single, index) => {
          return <ServiceCard index={index} service={single} />;
        })}
      </div>
    </div>
  );
}

export default AllServices;
