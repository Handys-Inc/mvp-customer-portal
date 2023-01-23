import React from "react";

import Header from "../../../components/Header/Header";

import Border from "../../../components/Border/Border";
import AccountHeader from "./AccountHeader";

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
      <AccountHeader title="Personal Info" />

      <div className="max-w-5xl mx-auto">
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
                  <p className="underline cursor-pointer">Edit</p>
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
