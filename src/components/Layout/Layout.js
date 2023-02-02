import React from "react";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";

function Layout({ children, showBottomNav = true }) {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Header />
      <div className="px-5 md:px-0">{children}</div>
      <BottomNav showBottomNav={showBottomNav} />
    </div>
  );
}

export default Layout;
