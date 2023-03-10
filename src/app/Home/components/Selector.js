import React, { Fragment } from "react";

// custom svgs
import Broom from "../../../assets/icons/svg/Broom";
import Bulb from "../../../assets/icons/svg/Bulb";
import Wrench from "../../../assets/icons/svg/Wrench";
import Worker from "../../../assets/icons/svg/Worker";
import Roller from "../../../assets/icons/svg/Roller";

// react icons
import { MdOutlineImagesearchRoller, MdOutlineHandyman } from "react-icons/md";
import { BiWrench } from "react-icons/bi";
import { IoBulbOutline } from "react-icons/io5";
import { GiBroom } from "react-icons/gi";

function Selector({ selected, setSelected }) {
  // const selectors = [
  //   {
  //     name: "Painter",
  //     icon: <Roller size={18} className="selector-icon" />,
  //   },
  //   {
  //     name: "Plumber",
  //     icon: <Wrench size={18} className="selector-icon" />,
  //   },
  //   {
  //     name: "Electrician",
  //     icon: <Bulb size={18} className="selector-icon" />,
  //   },
  //   {
  //     name: "Cleaner",
  //     icon: <Broom size={18} className="selector-icon" />,
  //   },
  //   {
  //     name: "General handy person",
  //     icon: <Worker size={18} className="selector-icon" />,
  //   },
  // ];

  const selectors = [
    {
      name: "Painter",
      icon: <MdOutlineImagesearchRoller size={18} />,
    },
    {
      name: "Plumber",
      icon: <BiWrench size={18} />,
    },
    {
      name: "Electrician",
      icon: <IoBulbOutline size={18} />,
    },
    {
      name: "Cleaner",
      icon: <GiBroom size={17} />,
    },
    {
      name: "General handy person",
      icon: <MdOutlineHandyman size={18} />,
    },
  ];

  const mobileSelectors = [
    {
      name: "Painter",
      icon: <Roller fill="#CE1449" size={18} className="selector-icon" />,
    },
    {
      name: "Plumber",
      icon: <Wrench fill="#CE1449" size={18} className="selector-icon" />,
    },
    {
      name: "Electrician",
      icon: <Bulb fill="#CE1449" size={18} className="selector-icon" />,
    },
    {
      name: "Cleaner",
      icon: <Broom fill="#CE1449" size={18} className="selector-icon" />,
    },
    {
      name: "General handy person",
      icon: <Worker fill="#CE1449" size={18} className="selector-icon" />,
    },
  ];

  return (
    <Fragment>
      {/* desktop selectors */}
      <div className="hidden md:flex tab-scroll-none md:justify-center overflow-x-auto space-x-5 flex-nowrap mt-4 my-2">
        {selectors.map((selector) => {
          return (
            <div
              onClick={() => setSelected(selector.name.toLowerCase())}
              className={`${
                selected === selector.name.toLowerCase()
                  ? "selector-container-selected"
                  : "selector-container"
              } `}
            >
              {selector.icon}

              <p className="whitespace-nowrap ml-0 mt-2 md:mt-0 md:ml-2 ">
                {selector.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* mobile selectors */}
      <div className="md:hidden flex tab-scroll-none md:justify-center  overflow-x-auto space-x-5 flex-nowrap mt-4 my-2">
        {mobileSelectors.map((selector) => {
          return (
            <div className="selector-container">
              {selector.icon}

              <p className="whitespace-nowrap ml-0 mt-2 md:mt-0 md:ml-2 ">
                {selector.name}
              </p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Selector;

// <div className="w-full overflow-x-auto scrollbar-hide my-5 ml-5 md:ml-0"></div>
