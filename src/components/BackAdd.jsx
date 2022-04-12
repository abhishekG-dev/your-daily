import React from "react";
import "../css/backadd.css";

function BackAdd({ tab ,setModalShow}) {
  return (
    <>
      <div className="btn_section">
        <button className="back">Back</button>
        <button className={tab==='tab1'|| tab === 'tab2' ?"add_new" : 'dis_hide' }
        onClick={()=> setModalShow(true) } >
          {tab === "tab1" ? "+ Add New Cart Person" : "+ Add New Delivery Boy"}
        </button>
      </div>
    </>
  );
}

export default BackAdd;
