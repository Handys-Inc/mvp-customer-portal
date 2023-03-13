import React, {useContext} from "react";

import Header from "../../../components/Header/Header";

import Avatar from '../../../components/Avatar/Avatar'

import {AuthContext} from '../../../contexts/AuthContext'

import { NavLink } from "react-router-dom";

import { FiCheck } from "react-icons/fi";

import Border from "../../../components/Border/Border";

import Like from "../../../assets/icons/svg/Like";

function Profile() {
  
const {currentUser} = useContext(AuthContext)

const {firstName, lastName, createdAt} = currentUser;

  return (

    <div>
      <Header />
      <div className="mt-20 mb-5 max-w-5xl mx-auto">
        <NavLink to="/account">
          <p className="text-sm underline">Back</p>
        </NavLink>
      </div>
      <div className="flex gap-10 max-w-5xl mx-auto mb-32">
        {/* Account Card */}
        <div className="account-card w-80">
          <Avatar/>
          <p className="mt-2 underline underline-offset-4 text-center">
            Change photo
          </p>
          <div className="flex gap-2 mt-8">
            <Like size={20} className="inline-block" />{" "}
            <span>+15 (20 Reviews)</span>
          </div>
          <Border />
          <h2 className="text-gray text-lg">{firstName} Confirmed</h2>
          <div>
            <p className="text-gray mt-2">
              <FiCheck className="inline-block" /> Phone Number
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> Email address
            </p>
          </div>
          <p className="mt-32 text-gray text-sm">
            Learn more about how confirming account info helps keep the Handys
            community safe
          </p>
        </div>

        {/* Account Info & Reviews */}
        <div className="flex-1">
          <h2 className="font-bold text-4xl">{firstName} {lastName}</h2>
          <p className="my-2 font-light text-gray text-sm">Joined in {createdAt}</p>
          <p className="underline ">Edit Profile</p>

          <Border />
          <h2 className="font-bold text-xl">Reviews</h2>
          <p className="my-2 font-light text-gray text-sm">December 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
