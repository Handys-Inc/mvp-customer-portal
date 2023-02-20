import React, { useState, useEffect } from "react";

import NoHistory from "./components/NoHistory";
import AllServices from "./components/AllServices";

import Layout from "../../components/Layout/Layout";
import HistoryLoader from "./HistoryLoader";

import "./index.css";

function History() {
  const [history, setHistory] = useState([{ id: 1 }]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fake api call
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  if (!loading) {
    return (
      <Layout>
        {history.length < 1 ? (
          <div className="max-w-6xl mx-auto">
            <h3 className="my-5 text-lg md:text-3xl font-semibold">
              Service history
            </h3>
            <NoHistory />
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <AllServices />
          </div>
        )}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto">
          <HistoryLoader />
        </div>
      </Layout>
    );
  }
}

export default History;
