import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/main/index";
import MarketPlace from "../pages/Marketplace";
import { Modal } from "../components/Modal";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/marketplace/*" element={<MarketPlace />} />
      <Route path='/quest' element=
        {
          <Modal title="Quest" >
            <div>Coming Soon</div>
          </Modal>
        }/>
      <Route path='/summon' element=
      {
        <Modal title="Summon" >
          <div>Coming Soon</div>
        </Modal>
      }/>
      <Route path='/lp' element=
        {
          <Modal title="LP" >
            <div>Coming Soon</div>
          </Modal>
        }/>
    </Routes>
  );
};

export default Router;
