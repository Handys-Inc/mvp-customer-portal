import React from "react";
import Header from "../../components/Header/Header";

import BookingCard from "./components/BookingCard";
import ProviderDetails from "./components/ProviderDetails";

//
import { IoIosArrowBack } from "react-icons/io";

import { NavLink } from "react-router-dom";

// sample images
import one from "../../assets/images/prov-1.png";
import two from "../../assets/images/prov-2.png";
import three from "../../assets/images/prov-3.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../Home/components/index.css";

function Provider() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-32">
      <Header />

      {/* Back button for mobile */}
      <NavLink to="/">
        <div className="absolute bg-[#DDDDDDBA] hover:text-white hover:bg-black cursor-pointer rounded-full h-7 w-7 z-50 flex items-center justify-center left-4 top-4">
          <IoIosArrowBack size={20} />
        </div>
      </NavLink>

      {/* Desktop: provider Image gallery */}
      <div className="hidden md:flex h-[20rem] gap-x-2 px-5 my-5">
        <div className="flex-1 h-full">
          <img
            className="h-full w-full object-cover rounded-tl-xl rounded-bl-xl"
            src={one}
            alt="one"
          />
        </div>

        <div className="flex-1 flex  flex-col justify-between">
          <img
            className="h-1/2 w-full object-cover rounded-tr-xl"
            src={two}
            alt="one"
          />
          <img
            className="h-1/2 pt-2 w-full object-cover rounded-br-lg"
            src={three}
            alt="one"
          />
        </div>
      </div>

      {/* Mobile: provider image gallery */}
      <div className="block md:hidden carousel-wrapper mb-4">
        <Carousel
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img
              className="w-full object-cover h-60"
              src={one}
              alt="service images"
            />
          </div>
          <div>
            <img
              className="w-full object-cover h-60"
              src={two}
              alt="service images"
            />
          </div>
          <div>
            <img
              className="w-full object-cover h-60"
              src={three}
              alt="service images"
            />
          </div>
        </Carousel>
      </div>
      <div className="flex gap-5 md:gap-20 flex-col md:flex-row justify-between px-5 my-5">
        {/* Details */}
        <div className="flex-1">
          <ProviderDetails />
        </div>
        {/* Booking */}
        <div className="flex-1">
          <BookingCard />
        </div>
      </div>
    </div>
  );
}

export default Provider;
