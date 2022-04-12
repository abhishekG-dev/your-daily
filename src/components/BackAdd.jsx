import React from "react";
import { Link } from "react-router-dom";
import "../css/backadd.css";

function BackAdd({ tab, setModalShow }) {

    const addButton = (tab) =>{
        switch(tab){
          case 'cart person':
            return "+ Add New Cart Person"
          case 'delivery boy':
            return "+ Add New Delivery Boy"
          default:
            return ''  
        }
    }

  return (
    <>
      <div className="btn_section">
        <Link to="/" className="back">
          Back
        </Link>
        <button
          className={tab === "cart person" || tab === "delivery boy" ? "add_new" : "dis_hide"}
          onClick={() => setModalShow(true)}
        >
          {addButton(tab)}
        </button>
      </div>
    </>
  );
}

export default BackAdd;
