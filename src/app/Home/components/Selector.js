import React, { Fragment } from "react";

// custom svgs
import Broom from "../../../assets/icons/svg/Broom";
import Bulb from "../../../assets/icons/svg/Bulb";
import Wrench from "../../../assets/icons/svg/Wrench";
import Worker from "../../../assets/icons/svg/Worker";
import Roller from "../../../assets/icons/svg/Roller";

function Selector() {
  const selectors = [
    {
      name: "Painter",
      icon: <Roller size={18} className="selector-icon" />,
    },
    {
      name: "Plumber",
      icon: <Wrench size={18} className="selector-icon" />,
    },
    {
      name: "Electrician",
      icon: <Bulb size={18} className="selector-icon" />,
    },
    {
      name: "Cleaner",
      icon: <Broom size={18} className="selector-icon" />,
    },
    {
      name: "General handy person",
      icon: <Worker size={18} className="selector-icon" />,
    },
  ];
  return (
    <Fragment className="">
      <div className="w-full overflow-x-auto flex mt-5 flex-row items-center space-x-5 justify-center mb-5">
        {selectors.map((selector) => {
          return (
            <div className="selector-container">
              {selector.icon}

              <p className="ml-0 mt-2 md:mt-0 md:ml-2">{selector.name}</p>
            </div>
          );
        })}
      </div>

      <div className="text-faintGray mb-5">
        <hr />
      </div>
    </Fragment>
  );
}

export default Selector;

// <div className="w-full overflow-x-auto scrollbar-hide my-5 ml-5 md:ml-0"></div>
