import React, { useEffect } from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Notify Messages
// toast messages
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

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
import ProviderProfile from "./app/Provider/Profile/ProviderProfile";

// contexts
import { CookiesProvider } from "react-cookie";
import AuthContextProvider from "./contexts/AuthContext";

// protected route
import { ProtectedRoutes } from "./routes/ProtectedRoutes";

function App() {
  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 300)); // 2 seconds
  };

  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        // fade out
        ele.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = "";
          // ele.classList.remove("available");
        }, 300);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CookiesProvider>
        <AuthContextProvider>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              {/*General Routes */}
              <Route path="/" exact element={<Home />} />
              <Route path="/book/provider" exact element={<Provider />} />

              <Route
                path="/provider/profile"
                exact
                element={<ProviderProfile />}
              />

              {/* Checkout */}
              <Route path="/checkout" exact element={<Checkout />} />

              {/* Account */}
              <Route path="/account" exact element={<Account />} />
              <Route path="/account/profile" exact element={<Profile />} />
              <Route
                path="/account/personal"
                exact
                element={<PersonalInfo />}
              />
              <Route path="/account/security" exact element={<Security />} />
              <Route path="/account/payments" exact element={<Payments />} />
              <Route path="/service-history" exact element={<History />} />

              {/* Payouts */}
              <Route path="/setup-payouts" exact element={<Payouts />} />
              <Route
                path="/setup-payouts/interac"
                exact
                element={<Interac />}
              />
              <Route path="/setup-payouts/paypal" exact element={<Paypal />} />

              {/* Messages */}
              <Route path="/messages" exact element={<Messages />} />

              {/* Help */}
              <Route path="/m/help" exact element={<MobileHelp />} />
              <Route path="/m/account" exact element={<MobileAccount />} />

              {/* MOBILE SPECIFIC ROUTES */}
              <Route
                path="/notifications"
                exact
                element={<MobileNotifications />}
              />

              {/* PAGE NOT FOUND */}
              <Route path="*" exact element={<Notfound />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
