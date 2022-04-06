import React from "react";
import "../css/dashboard.css";
import DashCard from "./DashCard";

function DashBoard() {
  return (
    <>
      <div className="dashboard_container">
        <div className="dashboard">
          <div className="dashboard_cards">
            <DashCard title={"Total Cart Person"} count={12} view={true} />
            <DashCard title={"Total Delivery Boy"} count={23} view={true} />
            <DashCard
              title={"Total Users"}
              count={1234}
              view={true}
              cls={"cls_blue"}
            />
            <DashCard title={"Unassigned Orderes"} count={14} view={true} />
            <DashCard title={"Total Items"} count={45} view={true} />
            <DashCard
              title={"Total Active Users"}
              count={768}
              cls={"cls_green cls_h"}
              clsh={"clsh_fsb"}
            />
            <DashCard
              title={"Total Ongoing Bookings"}
              count={321}
              cls={"cls_h"}
              clsh={"clsh_fsb"}
            />
            <DashCard
              title={"Past Week Bookings"}
              count={170}
              cls={"cls_h"}
              clsh={"clsh_fsb"}
            />
            <DashCard
              title={"Denied/Disputed order"}
              count={9999 + "/" + 9999}
              view={true}
              clsh={"clsh_fs"}
              cls={"cls_fs"}
            />
            <DashCard title={"Scheduled order"} count={14} view={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
