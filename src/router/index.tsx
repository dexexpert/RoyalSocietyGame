import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/main/index";
import MarketPlace from "../pages/Marketplace";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/marketplace/*" element={<MarketPlace />} />
    </Routes>
  );
};

export default Router;
