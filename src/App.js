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
import History from "./app/History/History";
import Payouts from "./app/Payouts/Payouts";
import Interac from "./app/Payouts/Interac/Interac";
import Paypal from "./app/Payouts/Paypal/Paypal";
import Messages from "./app/Messages/Messages";

// Mobile Only Screens
import MobileNotifications from "./app/Notifications/mobile/MobileNotifications";
import MobileHelp from "./app/Help/MobileHelp";
import MobileAccount from "./app/Account/MobileAccount";

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

        <Route path="/service-history" exact element={<History />} />

        {/* Payouts */}
        <Route path="/setup-payouts" exact element={<Payouts />} />
        <Route path="/setup-payouts/interac" exact element={<Interac />} />
        <Route path="/setup-payouts/paypal" exact element={<Paypal />} />

        {/* Messages */}
        <Route path="/messages" exact element={<Messages />} />

        {/* Help */}
        <Route path="/m/help" exact element={<MobileHelp />} />
        <Route path="/m/account" exact element={<MobileAccount />} />

        {/* MOBILE SPECIFIC ROUTES */}
        <Route path="/notifications" exact element={<MobileNotifications />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
