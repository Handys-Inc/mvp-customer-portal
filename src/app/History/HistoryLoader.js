import React from "react";

function HistoryLoader() {
  const services = [
    { id: 1, name: "dummy" },
    { id: 2, name: "dummy" },
    { id: 3, name: "dummy" },
    { id: 4, name: "dummy" },
  ];

  return (
    <div>
      <h3 className="my-5 text-lg md:text-2xl font-semibold">
        Services you've used
      </h3>

      {/* tabs */}
      {/* Selector */}
      <div className="booking-scroll-none flex overflow-x-auto space-x-3 w-full">
        <div className="booking-selector">Completed()</div>
        <div className="booking-selector">Pending Approval ()</div>
        <div className="booking-selector">Sent requests ()</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-4 my-5">
        {services.map((single) => {
          return (
            <div key={single.id}>
              <div className="flex gap-5 cursor-pointer">
                {/*  */}

                <div
                  className="w-20 h-20 bg-cover bg-center skeleton rounded-xl"
                  alt="provider"
                >
                  {" "}
                </div>

                {/* Service Pro */}
                <div>
                  <div className="font-bold skeleton w-full skeleton-text text-lg"></div>

                  <div className="font-bold skeleton w-9/12 skeleton-text text-lg"></div>

                  <p className="font-light text-gray  text-sm">
                    <span className="font-bold text-base "> </span> Service Date
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HistoryLoader;
