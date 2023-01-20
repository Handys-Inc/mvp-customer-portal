import React from "react";

import Header from "../../../components/Header/Header";

import { NavLink } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";
import Border from "../../../components/Border/Border";

function PersonalInfo() {
  const data = [
    { title: "Legal Name", content: "Alice Iris" },
    { title: "Gender", content: "Female" },
    { title: "Email Address", content: "aliceiris@handys.ca" },
    { title: "Phone Number", content: "+1 *** - ***- 4555" },
    { title: "Government ID", content: "Provided" },
    { title: "Address", content: "Not Provided" },
  ];
  return (
    <div>
      <Header />
      <div className="mt-20 mb-5 max-w-5xl mx-auto">
        <NavLink to="/account">
          <p className="text-sm underline">Back</p>
        </NavLink>
      </div>
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold">
          Account <IoIosArrowForward className="inline-block" /> Personal Info
        </h3>
        <h3 className="text-4xl font-bold">Personal Info</h3>
        <div className="my-10 mb-20">
          {data.map((item) => {
            return (
              <div className="w-full">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-lg text-gray font-light">
                      {item.content}
                    </p>
                  </div>
                  <p className="underline ">Edit</p>
                </div>
                <Border />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
