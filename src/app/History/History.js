import React from "react";

import NoHistory from "./components/NoHistory";
import AllServices from "./components/AllServices";

import Layout from "../../components/Layout/Layout";

function History() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h3 className="my-5 text-lg md:text-3xl font-semibold">
          Service history
        </h3>
        <NoHistory />
      </div>

      {/* Services you used */}
      <div className="max-w-6xl mx-auto">
        <AllServices />
      </div>
    </Layout>
  );
}

export default History;
