import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// general app pages
import Home from "./app/Home/Home";
import Notfound from "./app/NotFound/Notfound";
import Provider from "./app/Provider/Provider";

import Checkout from "./app/Checkout/Checkout";

// Accounts
import Account from "./app/Account/Account";
import Payments from "./app/Account/Payments/Payments";
import Security from "./app/Account/Security/Security";
import PersonalInfo from "./app/Account/Personal/PersonalInfo";
import Profile from "./app/Account/components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General Routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/book/provider" exact element={<Provider />} />

        {/* Checkout */}
        <Route path="/checkout" exact element={<Checkout />} />

        {/* Account */}
        <Route path="/account" exact element={<Account />} />
        <Route path="/account/profile" exact element={<Profile />} />
        <Route path="/account/personal" exact element={<PersonalInfo />} />
        <Route path="/account/security" exact element={<Security />} />
        <Route path="/account/payments" exact element={<Payments />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
