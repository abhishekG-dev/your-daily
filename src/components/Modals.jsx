import React from "react";
import "../css/modal.css";


export function Modals({ setModalShow }) {
  return (
    <>
      <section className="cart_modal_container">
        <div className="close">
          <img
            onClick={() => setModalShow(false)}
            src="/assets/Icon metro-cross.png"
            alt="cross"
          />
        </div>
        <form className="cart_detail_form">
          <div className="cart_detail">
            <div className="modal_img">
              <img className="person" src="/assets/Group 694.png" alt="dp" />
              <img
                className="camera_plus"
                src="/assets/Icon material-add-a-photo.png"
                alt=""
              />
            </div>
            <div className="input_container">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
              <label htmlFor="contact">Contact</label>
              <input type="text" id="contact" />
              <label htmlFor="regdate">Reg. Date</label>
              <input type="text" id="regdata" />
            </div>
          </div>
          <span className="divider"></span>
          <button className="cart_new_add_btn">Add</button>
        </form>
      </section>
    </>
  );
}

     