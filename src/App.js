import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// general app pages
import Home from "./app/Home/Home";
import Notfound from "./app/NotFound/Notfound";
import Provider from "./app/Provider/Provider";
import Account from "./app/Account/Account";
import Checkout from './app/Checkout/Checkout'

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


        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
