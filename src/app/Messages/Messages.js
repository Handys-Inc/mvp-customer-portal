import React, { useState } from "react";

import Selector from "./components/Selector";
import MessageView from "./components/MessageView";
import DetailsPane from "./components/DetailsPane";
import Layout from "../../components/Layout/Layout";

function Messages() {
  const [details, setDetails] = useState(true);
  return (
    <Layout>
      {/* Messages panes */}

      {/* Mobile Screens */}
      <div className="block md:hidden">
        <Selector />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-between flex-row divide-x divide-faintGray">
        <div
          className={`${details ? "basis-1/4" : "basis-1/3"}   min-h-screen`}
        >
          <Selector />
        </div>
        <div
          className={`${details ? "basis-1/2" : "basis-2/3"}   min-h-screen`}
        >
          <MessageView setDetails={setDetails} details={details} />
        </div>
        <div
          className={`${details ? "block" : "hidden"} basis-1/4  min-h-screen`}
        >
          <DetailsPane />
        </div>
      </div>
    </Layout>
  );
}

export default Messages;
