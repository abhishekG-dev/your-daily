import React,{useState} from 'react'
import { Route,Routes } from 'react-router-dom';
import BackAdd from './BackAdd'
// import Table from './Table'
import Tabs from './Tabs'
import DeniedOrder from "./tableComponent/DeniedOrder";
import DisputedOrder from "./tableComponent/DisputedOrder";
import ScheduledOrder from "./tableComponent/ScheduledOrder";

function OrderTable({tabText}) {
  const [tab, setTab] = useState("");
  return (
    <>
     <section>
        <div className="detail_table">
        <BackAdd tab={tab}  />
        <Tabs  tabText={tabText} setTab={setTab} />
         <Routes>
         <Route path='denied-order' element={<DeniedOrder setTab={setTab}/>} />
         <Route path='disputed-order' element={<DisputedOrder setTab={setTab}/>} />
         <Route path='scheduled-order' element={<ScheduledOrder setTab={setTab} />} />
         </Routes>
         {/* { modalShow && <Modals setModalShow={setModalShow} />  }   */}
        </div>
      </section>
    </>
  )
}

export default OrderTable