import React from "react";

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
    <div className="my-5">
      <div className="flex flex-row items-center gap-5 justify-center mb-5">
        {selectors.map((selector) => {
          return (
            <div className="selector-container">
              {selector.icon}
              <span className="ml-2">{selector.name}</span>
            </div>
          );
        })}
      </div>

      <div className="text-faintGray">
        <hr />
      </div>
    </div>
  );
}

export default Selector;
