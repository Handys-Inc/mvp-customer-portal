import React from "react";
import Header from "../../components/Header/Header";

import BookingCard from "./components/BookingCard";
import ProviderDetails from "./components/ProviderDetails";

// sample images
import one from "../../assets/images/prov-1.png";
import two from "../../assets/images/prov-2.png";
import three from "../../assets/images/prov-3.png";

function Provider() {
  return (
    <div className="mb-56">
      <Header />

      {/* provider Image gallery */}
      <div className="flex h-[20rem] gap-x-2 px-5 my-5">
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

      <div className="flex gap-20 flex-col md:flex-row justify-between px-5 my-5">
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
