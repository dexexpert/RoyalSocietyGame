import React from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

import { Modal } from "../../components/Modal";
import { GreenButton } from "../../components/Input";
import LandAuction from "./Auction";
import BuyLand from "./Buy";

const Marketplace = () => {

  const navigate = useNavigate();

  return (
    <Modal title="Market Place">
      <Routes>
        <Route path='/' element={<>
          <GreenButton title="View Items" onClick={() => navigate("/market/auction")} className="min-w-[180px]"/>
          <GreenButton title="Buy Items" onClick={() => navigate("/market/buy")} className="min-w-[180px]"/>
          </>
        }/>
        <Route path='/auction' element={<LandAuction/>}/>
        <Route path='/buy' element={<BuyLand/>}/>
      </Routes>
    </Modal>
  )
}

export default Marketplace;