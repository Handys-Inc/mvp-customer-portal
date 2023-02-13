/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

import Like from "../../assets/icons/svg/Like";

function ServicesLoader() {
  const fakeData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {fakeData.map((single, index) => {
        return (
          <div id={single.id} key={index}>
            {/* image carousel */}
            <div className="carousel-wrapper rounded-lg skeleton mb-4 h-72"></div>

            {/* Information */}

            <div className="flex flex-row justify-between items-start">
              <div>
                <h3 className="font-bold skeleton skeleton-text text-lg"></h3>
                <p className="text-gray font-light text-sm"></p>
                <p className="font-light text-gray  text-sm">
                  <span className="font-bold text-base text-primary">$ </span>{" "}
                  per hour
                </p>
              </div>
              <div className="flex items-center text-gray text-sm">
                <Like size={18} fill="#1d1d1d" />{" "}
                <span className="ml-1 w-5 skeleton skeleton-text"></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesLoader;
