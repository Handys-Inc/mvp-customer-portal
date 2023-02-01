import React from "react";
import Selector from "./components/Selector";
import Services from "./components/Services";
import Layout from "../../components/Layout/Layout";

function Home() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Layout>
        <Selector />

        <Services />
      </Layout>
    </div>
  );
}

export default Home;
