import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/main/index";
import MarketPlace from "../pages/Marketplace";
import { Modal } from "../components/Modal";

const ComingSoon = () => {
  return (
    <div className="coming-soon__wrap">
      <div className="coming-soon">
        <span>Coming Soon</span>
      </div>
    </div>
  )
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/market/*" element={<MarketPlace />} />
      <Route path='/quest' element=
        {
          <Modal title="Quest" >
            <ComingSoon/>
          </Modal>
        }/>
      <Route path='/stake' element=
        {
          <Modal title="Stake" >
            <ComingSoon/>
          </Modal>
        }/>
      <Route path='/summon' element=
      {
        <Modal title="Summon" >
          <ComingSoon/>
        </Modal>
      }/>
      <Route path='/lp' element=
        {
          <Modal title="LP" >
            <ComingSoon/>
          </Modal>
        }/>
    </Routes>
  );
};

export default Router;
