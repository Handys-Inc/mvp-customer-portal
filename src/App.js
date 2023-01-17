import React from "react";

// router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// general app pages
import Home from "./app/Home/Home";
import Notfound from "./app/NotFound/Notfound";
import Provider from "./app/Provider/Provider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*General Routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/book/provider" exact element={<Provider />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
