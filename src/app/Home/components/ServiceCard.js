import React from "react";

import Like from "../../../assets/icons/svg/Like";

// TODO: REMOVE SAMPLE IAMGES
import wall from "../../../assets/images/wall.png";
import desk from "../../../assets/images/desk.png";
import bar from "../../../assets/images/bar.png";

// navlink
import { NavLink } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.css";

function ServiceCard({ service }) {
  return (
    <div>
      {/* image carousel */}
      <div className="carousel-wrapper mb-4">
        <Carousel
          infiniteLoop
          showArrows={false}
          onSwipeStart={2}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img className="w-full" src={wall} alt="service images" />
          </div>
          <div>
            <img className="w-full" src={desk} alt="service images" />
          </div>
          <div>
            <img className="w-full" src={bar} alt="service images" />
          </div>
        </Carousel>
      </div>

      {/* Information */}
      <NavLink to="/book/provider">
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
            <Like size={18} fill="#1d1d1d" />{" "}
            <span className="ml-1">+{service.likes}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ServiceCard;
