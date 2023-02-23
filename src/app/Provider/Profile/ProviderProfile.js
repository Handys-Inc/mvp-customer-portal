import React from "react";

import Layout from "../../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import Border from "../../../components/Border/Border";
import { FiCheck } from "react-icons/fi";
import Like from "../../../assets/icons/svg/Like";
import pro from "../../../assets/images/pro.png";

// sample works images
// sample images
import one from "../../../assets/images/prov-1.png";
import two from "../../../assets/images/prov-2.png";
import three from "../../../assets/images/prov-3.png";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProviderProfile() {
  const [open, setOpen] = React.useState(false);
  return (
    <Layout>
      <div className="mt-20 flex items-center justify-between mb-5 max-w-5xl mx-auto">
        <NavLink to="/account">
          <p className="text-sm underline">Back</p>
        </NavLink>

        <div>
          <button className="btn-primary">Book handyperson</button>
        </div>
      </div>
      <div className="flex gap-10 max-w-5xl mx-auto mb-32">
        {/* Account Card */}
        <div className="account-card w-80">
          <img className="w-24 mx-auto" src={pro} alt="profile" />

          <div className="flex gap-2 mt-2">
            <Like size={20} className="inline-block" />{" "}
            <span>+15 (20 Reviews)</span>
          </div>
          <Border />
          <h2 className="text-gray text-lg">Username Confirmed</h2>
          <div>
            <p className="text-gray mt-2">
              <FiCheck className="inline-block" /> Phone Number
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> Email address
            </p>
            <p className="text-gray my-2">
              <FiCheck className="inline-block" /> ID Verified
            </p>
          </div>
          <p className="mt-32 text-gray text-sm">
            Learn more about how confirming account info helps keep the Handys
            community safe
          </p>
        </div>

        {/* Account Info & Reviews */}
        <div className="flex-1">
          {" "}
          <h2 className="font-bold text-4xl">Username, Painter</h2>
          <p className="my-2 font-light text-gray">2 - 4 years experience</p>
          <p className="font-light text-sm text-gray">Joined 2019</p>
          <Border />
          <p className="my-2 font-semibold text-gray">About</p>
          <p className="text-gray font-light">
            I am a skilled painter with over 10 years of experience in both
            interior and exterior painting. I specialize in residential and
            commercial properties and pride myself on my attention to detail and
            customer satisfaction. I am proficient in various painting
            techniques and able to work with different types of paint. I have my
            own equipment and can provide references.
          </p>
          <Border />
          {/* WORKS */}
          <p className="my-2 font-semibold text-gray">Username's works</p>
          {/* Desktop: provider Image gallery */}
          <div className="hidden cursor-pointer md:block gap-x-2 my-5">
            <div onClick={() => setOpen(true)} className="flex gap-5 h-full">
              <img
                className=" w-48 h-48 object-cover rounded-xl"
                src={one}
                alt="one"
              />
              <img
                className="w-48 h-48 object-cover rounded-xl"
                src={two}
                alt="two"
              />
              <img
                className="w-48 h-48 placeholder:object-cover rounded-xl"
                src={three}
                alt="three"
              />
            </div>
          </div>
          {/* desktop light box */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: one }, { src: two }, { src: three }]}
          />
          <Border />
          {/* PER HOUR RATE */}
          <p className="my-2 font-semibold text-gray">Per hour rate</p>
          <p className="text-gray font-light">$65</p>
          <Border />
          {/* BOOKING TYPE */}
          <p className="my-2 font-semibold text-gray">Booking</p>
          <p className="text-gray font-light">Instant Booking</p>
          <Border />
          <h2 className="font-bold text-xl">Reviews</h2>
          <p className="my-2 font-light text-gray text-sm">December 2022</p>
        </div>
      </div>
    </Layout>
  );
}

export default ProviderProfile;
