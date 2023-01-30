import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Selector from "./components/Selector";
import MessageView from "./components/MessageView";
import DetailsPane from "./components/DetailsPane";

function Messages() {
  const [details, setDetails] = useState(true);
  return (
    <div>
      <Header />

      {/* Messages panes */}

      <div className="flex justify-between flex-row divide-x divide-faintGray">
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
    </div>
  );
}

export default Messages;
