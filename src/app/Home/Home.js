import React from "react";
import Selector from "./components/Selector";
import Services from "./components/Services";
import Header from "../../components/Header/Header";

function Home() {
  // scroll to top
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header, search and profile */}
      <Header />

      <Selector />

      <Services />
    </div>
  );
}

export default Home;
