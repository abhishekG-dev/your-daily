import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/detailTable.css";
import BackAdd from "./BackAdd";
import { Modals } from "./Modals";
import PersonModal from "./modals/PersonModal";
import CartPersonTable from "./tableComponent/CartPersonTable";
import DeliveryBoyTable from "./tableComponent/DeliveryBoyTable";
import DeniedOrder from "./tableComponent/DeniedOrder";
import DisputedOrder from "./tableComponent/DisputedOrder";
import ScheduledOrder from "./tableComponent/ScheduledOrder";
import UserDetail from "./tableComponent/UserDetail";
import Tabs from "./Tabs";

function DetailTable({tabText}) {
  const [tab, setTab] = useState("");
  const [modalShow, setModalShow] = useState(false);
  

  return (
    <>
      <section>
        <div className="detail_table">
          <BackAdd tab={tab} setModalShow={setModalShow} />
          <Tabs  tabText={tabText} setTab={setTab} />
          <Routes>
            <Route path="cart-person" element={<CartPersonTable setTab={setTab} />} exact />
            <Route path="delivery-boy" element={<DeliveryBoyTable setTab={setTab} />} exact />
            <Route path="user" element={<UserDetail setTab={setTab} />} exact />
          </Routes>

          {modalShow && tab === 'cart person' &&  <Modals setModalShow={setModalShow} />}
         { modalShow && tab === 'delivery boy' && <PersonModal setModalShow={setModalShow} />}
        </div>
      </section>
    </>
  );
}

export default DetailTable;
