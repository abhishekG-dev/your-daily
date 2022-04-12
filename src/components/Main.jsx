import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import DetailTable from './DetailTable'
import OrderTable  from './OrderTable';
import Navbar from './Navbar';
// import DetailTable from './DetailTable'
// import Navbar from './Navbar'
// import OrderTable from './OrderTable'


function Main() {
  const detailTabletabs = {
    tab1: "Cart Person Details",
    tab2: "Delivery Boy Details",
    tab3: "User Details",
  };
  const ordertableTabs  = {
    tab1: "Denied Order",
    tab2: "Diputed Order",
    tab3: "Scheduled Order",
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route
          path="/detail/*"
          element={<DetailTable tabText={detailTabletabs} />}
          exact
        />
        <Route
          path="/order/*"
          element={<OrderTable tabText={ordertableTabs} />}
          exact
        />
      </Routes>
    </>
  );
}

export default Main;
