import React from "react";
import "../../css/personModal.css";

function PersonModal( {setModalShow }) {
  return (
    <>
      <div className="person_modal">
      <div className="close">
          <img
            onClick={() => setModalShow(false)}
            src="/assets/Icon metro-cross.png"
            alt="cross"
          />
        </div>
        <form className="person_modal_container">
          <div className="person_detail">
            <div className="modal_img">
              <img className="person" src="/assets/Ellipse 27.png" alt="dp" />
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
            <span className="divider" ></span>
          <div className="person_work_info">
            <div className="work_box">
              <div className="imgNumb">
                <img className="rup_img" src="/assets/Icon awesome-rupee-sign.png" alt="" />
                <span className="work_numb rupee">1340</span>
              </div>
              <p className="work_title">Total Business</p>
            </div>
            <div className="work_box">
              <div className="imgNumb">
                <img src="/assets/Icon ionic-ios-flag.png" alt="" />
                <span className="work_numb flag">32</span>
              </div>
              <p className="work_title">flagged</p>
            </div>
            <div className="work_box">
              <div className="imgNumb">
                <span className="work_numb star">4.2</span>
                <img className="star_img" src="/assets/Icon awesome-star.png" alt="" />
              </div>
              <p className="work_title">Avg. Rating</p>
            </div>
            <div className="work_box">
              <span className="work_numb rupee ">30</span>
              <p className="work_title">Total Order</p>
            </div>
            <div className="work_box">
              <span className="work_numb flag">03</span>
              <p className="work_title">Denied</p>
            </div>
            <div className="work_box">
              <span className="work_numb star ">02</span>
              <p className="work_title">Cancel</p>
            </div>
          </div>
          <button className="save_changes" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}

export default PersonModal;
