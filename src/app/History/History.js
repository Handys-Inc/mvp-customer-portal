import React from "react";

import Header from "../../components/Header/Header";
import NoHistory from "./components/NoHistory";
import AllServices from "./components/AllServices";

function History() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <h3 className="my-5 text-3xl font-semibold">Service history</h3>
        <NoHistory />
      </div>

      {/* Services you used */}
      <div className="max-w-6xl mx-auto">
        <AllServices />
      </div>
    </div>
  );
}

export default History;
