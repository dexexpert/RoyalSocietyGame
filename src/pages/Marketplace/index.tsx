import React from "react";
import { Route, useNavigate, Routes } from "react-router-dom";

import { Modal } from "../../components/Modal";
import { GreenButton } from "../../components/Input";
import LandAuction from "./Auction";

const Marketplace = () => {

  const navigate = useNavigate();

  return (
    <Modal title="Market Place">
      <Routes>
        <Route path='/' element={<>
          <GreenButton title="View Items" onClick={() => navigate("/stake/auction")}/>
          <GreenButton title="Buy Items"/>
          </>
        }/>
        <Route path='/auction' element={<LandAuction/>}/>
      </Routes>
    </Modal>
  )
}

export default Marketplace;