import React from "react";
import { NavLink } from "react-router-dom";
import "../css/tabs.css";
// import {
//   cartPersonDetail,
//   deliveryBoyDetails,
//   userDetails,
// } from "../data/details";

function Tabs({ setData, tabText, setTab }) {


  const { tab1, tab2, tab3 } = tabText;

 

  return (
    <>
      <div className="tabs">
        <NavLink
          className={({ isActive }) =>
            isActive ? "tab cart_person active" : "tab cart_person"
          }
          to={tab1 === 'Cart Person Details' ? 'cart-person' : 'denied-order' }
        >
          {tab1}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
          to={ tab2 === 'Delivery Boy Details' ? "delivery-boy" : 'disputed-order'}
        >
          {tab2}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "tab user active" : "tab user"
          }
          to={ tab3 === 'User Details'? "user" : 'scheduled-order'}
        >
          {tab3}
        </NavLink>
      </div>
    </>
  );
}

export default Tabs;
