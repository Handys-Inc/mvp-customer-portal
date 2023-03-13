import React, { useState, useEffect } from "react";

// components
import Selector from "./components/Selector";
import Services from "./components/Services";
import Layout from "../../components/Layout/Layout";

import { FiSearch } from "react-icons/fi";
import { BsSliders } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import MobileSearch from "../MobileSearch/MobileSearch";
import Border from "../../components/Border/Border";

// css
import "./index.css";

function Home() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const [selected, setSelected] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fake api call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [selected]);

  return (
    <Layout>
      {/* MOBILE SEARCH TOGGLE */}
      <div
        onClick={() => setShowMobileSearch(true)}
        className="md:hidden mt-10 items-center justify-between  flex border-faintGray border shadow-md rounded-full py-2 px-4"
      >
        <div className="flex gap-4 items-center">
          {" "}
          <FiSearch className="text-gray" size={20} />
          <div>
            <p className="font-semibold text-sm">What's needed?</p>
            <p className="text-gray text-xs">Where . When . How Long</p>
          </div>
        </div>
        <div>
          <BsSliders />
        </div>
      </div>

      {/* MODAL FOR Mobile Search */}
      <Modal
        full={true}
        isOpen={showMobileSearch}
        setIsOpen={setShowMobileSearch}
        title="Search"
      >
        <MobileSearch />
      </Modal>

      <Selector setSelected={setSelected} selected={selected} />
      <Border />

      <Services loading={loading} setLoading={setLoading} />
    </Layout>
  );
}

export default Home;
