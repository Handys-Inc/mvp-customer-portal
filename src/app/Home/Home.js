import React, { useState } from "react";
import Selector from "./components/Selector";
import Services from "./components/Services";
import Layout from "../../components/Layout/Layout";

import { FiSearch } from "react-icons/fi";
import { BsSliders } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import MobileSearch from "../MobileSearch/MobileSearch";

// css

function Home() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div>
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

        <Selector />

        <Services />
      </Layout>
    </div>
  );
}

export default Home;
