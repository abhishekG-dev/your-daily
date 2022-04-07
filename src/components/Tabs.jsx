import React, { useEffect, useState } from "react";
import "../css/tabs.css";
import {
  cartPersonDetail,
  deliveryBoyDetails,
  userDetails,
} from "../data/details";

function Tabs({ setData, tabText, setTab }) {
  const [active, setActive] = useState("");

  const { tab1, tab2, tab3 } = tabText;

  useEffect(() => {
    setData(cartPersonDetail);
    setActive("one");
    setTab("tab1");
  }, [setData,setTab]);

  return (
    <>
      <div className="tabs">
        <div
          className={
            active === "one" ? "tab cart_person active" : "tab cart_person"
          }
          onClick={() => {
            setData(cartPersonDetail);
            setActive("one");
            setTab("tab1");
          }}
        >
          {tab1}
        </div>
        <div
          className={active === "two" ? "tab active" : "tab"}
          onClick={() => {
            setData(deliveryBoyDetails);
            setActive("two");
            setTab('tab2')
          }}
        >
          {tab2}
        </div>
        <div
          className={active === "three" ? "tab user active" : "tab user"}
          onClick={() => {
            setData(userDetails);
            setActive("three");
            setTab('tab3')
          }}
        >
          {tab3}
        </div>
      </div>
    </>
  );
}

export default Tabs;
