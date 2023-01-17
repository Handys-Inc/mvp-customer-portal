import React from "react";

import { TbPaint } from "react-icons/tb";
import { AiOutlineTool } from "react-icons/ai";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

function Selector() {
  const selectors = [
    {
      name: "Painter",
      icon: <TbPaint size={20} className="selector-icon" />,
    },
    {
      name: "Plumber",
      icon: <AiOutlineTool size={20} className="selector-icon" />,
    },
    {
      name: "Electrician",
      icon: <IoBulbOutline size={20} className="selector-icon" />,
    },
    {
      name: "Cleaner",
      icon: <MdOutlineCleaningServices size={20} className="selector-icon" />,
    },
    {
      name: "General handy person",
      icon: <VscTools size={20} className="selector-icon" />,
    },
  ];
  return (
    <div className="my-5">
      <div className="flex flex-row items-center gap-5 justify-center mb-5">
        {selectors.map((selector) => {
          return (
            <div className="selector-container">
              {selector.icon}
              {selector.name}
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
