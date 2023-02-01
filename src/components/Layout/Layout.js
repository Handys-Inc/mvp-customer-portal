import React from "react";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";

function Layout({ children }) {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Header />
      {children}
      <BottomNav />
    </div>
  );
}

export default Layout;
