import React from "react";

import { AiOutlineLike } from "react-icons/ai";

import wall from "../../../assets/images/wall.png";
import { NavLink } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <NavLink to="/book/provider">
      <div>
        {/* image */}
        <img className="w-full mb-4" src={wall} alt="service images" />
        {/* Information */}

        <div className="flex flex-row justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">
              {service.name}, {service.field}
            </h3>
            <p className="text-gray font-light text-sm">
              {service.experience} years experience
            </p>
            <p className="font-light text-gray text-sm">
              <span className="font-bold text-base text-primary">
                ${service.charge}
              </span>{" "}
              per hour
            </p>
          </div>
          <div className="flex items-center text-gray text-sm">
            <AiOutlineLike /> +{service.likes}
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ServiceCard;
