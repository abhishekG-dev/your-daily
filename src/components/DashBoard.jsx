import React from "react";
import "../css/dashboard.css";
import DashCard from "./DashCard";

function DashBoard() {
  const dashCardDetail = [
    {
      title: "Total Cart Person",
      count: 12,
      view: true,
      path: "/detail/cart-person",
    },
    {
      title: "Total Delivery Boy",
      count: 23,
      view: true,
      path: "/detail/delivery-boy",
    },
    {
      title: "Total Users",
      count: 1234,
      view: true,
      path: "/detail/user",
      cls: "cls_blue",
    },
    {
      title: "Unassigned Orders",
      count: 14,
      view: true,
      path: "/detail/unassigned",
    },
    {
      title: "Total Items",
      count: 45,
      view: true,
      path: "/detail/total-items",
    },
    {
      title: "Total Active Users",
      count: 768,
      cls: "cls_green cls_h",
      clsh: "clsh_fsb",
    },
    {
      title: "Total Ongoing Bookings",
      count: 321,
      cls: "cls_h",
      clsh: "clsh_fsb",
    },
    {
      title: "Past Week Bookings",
      count: 170,
      cls: "cls_h",
      clsh: "clsh_fsb",
    },
    {
      title: "Denied/Disputed order",
      count: 9999 + "/" + 9999,
      view: true,
      path: "/order/denied-order",
      clsh: "clsh_fs",
      cls: "cls_fs",
    },
    {
      title: "Scheduled order",
      count: 14,
      view: true,
      path: "/order/scheduled-order",
    },
  ];

  return (
    <>
      <div className="dashboard_container">
        <div className="dashboard">
          <div className="dashboard_cards">
            {dashCardDetail.map(({ title, count, view, path, clsh, cls }) => (
              <DashCard key={title}
                title={title}
                count={count}
                view={view}
                path={path}
                cls={cls ? cls : ""}
                clsh={clsh ? clsh : ""}
              />
            ))}

            {/* <DashCard
              title={"Total Cart Person"}
              count={12}
              view={true}
              path={"/detail/cart-person"}
            />
            <DashCard
              title={"Total Delivery Boy"}
              count={23}
              view={true}
              path={"/detail/delivery-boy"}
            />
            <DashCard
              title={"Total Users"}
              count={1234}
              view={true}
              cls={"cls_blue"}
              path={"detail/user"}
            />
            <DashCard
              title={"Unassigned Orders"}
              count={14}
              view={true}
              path={"/detail/unassigned"}
            />
            <DashCard
              title={"Total Items"}
              count={45}
              view={true}
              path={"/detail/total-items"}
            />
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
              path={"/order/denied-order"}
              clsh={"clsh_fs"}
              cls={"cls_fs"}
            />
            <DashCard
              title={"Scheduled order"}
              count={14}
              view={true}
              path={"/order/scheduled-order"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
