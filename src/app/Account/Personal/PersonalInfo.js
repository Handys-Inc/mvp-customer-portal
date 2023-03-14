import React, { useContext } from "react";

import Border from "../../../components/Border/Border";
import AccountHeader from "../components/AccountHeader";

import Layout from "../../../components/Layout/Layout";
import EmailUpdate from "./components/EmailUpdate";
import PhoneUpdate from "./components/PhoneUpdate";
import { AuthContext } from "../../../contexts/AuthContext";
import services from "../../../services";

function PersonalInfo() {
  const { currentUser, userUpdate } = useContext(AuthContext);
  const { firstName, lastName } = currentUser;



  return (
    <Layout showBottomNav={false}>
      <AccountHeader title="Personal Info" />
      <div className="max-w-5xl mx-auto">
        {/* Name */}
        <div className="my-5">
          <div className="w-full">
            <div className="flex justify-between">
              <div>
                <h3 className="text-base md:text-xl font-bold">Legal Name</h3>
                <p className="text-sm md:text-lg text-gray font-light">
                  {firstName} {lastName}
                </p>
              </div>
              {/* <p className="underline hover:text-primary cursor-pointer">
                Edit
              </p> */}
            </div>
            <Border />
          </div>
        </div>

 

 

        {/* Email */}
        <EmailUpdate userUpdate={userUpdate} currentUser={currentUser} />

        {/* Phone Number */}
        <PhoneUpdate userUpdate={userUpdate} currentUser={currentUser} />
      </div>
    </Layout>
  );
}

export default PersonalInfo;
