import React, { useState } from "react";
import "../css/detailTable.css";
import BackAdd from "./BackAdd";
import { Modals } from "./Modals";
import Table from "./Table";
import Tabs from "./Tabs";


function DetailTable() {
    
    const  [details,setDetails] = useState([])
    const [tab,setTab] = useState('')
    const [modalShow,setModalShow] = useState(false)
    const tabText = {
        tab1:'Cart Person Details',
        tab2 : 'Delivery Boy Details',
        tab3 : 'User Details'
    }
    

  return (
    <>
      <section>
        <div className="detail_table">
          <BackAdd tab={tab} setModalShow={setModalShow} />
          <Tabs  setData = {setDetails} tabText={tabText}  setTab={setTab} />
          <Table details={details} />
         { modalShow && <Modals setModalShow={setModalShow} />  }  
        </div>
      </section>
    </>
  );
}

export default DetailTable;
