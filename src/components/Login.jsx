import React from "react";
import "../css/login.css";

function Login() {
  return (
    <>
      <div className="login_page">
        <div className="brand">
          <img src="/assets/Wihite BG horizontal.png" alt="lol" />
        </div>
        <div className="main_container">
          <div className="login_main_container">
            <div className="login_img">
              <img src="/assets/Illustrator 1@2x.png" alt="" />
            </div>
            <div className="login_container">
              <form>
                  <div className="d1">
                      <h1>LOGIN</h1>
                      <p>Please login to your account</p>
                  </div>
                  <fieldset className="field">
                      <legend  >USER ID</legend>
                      <input type="text"
                      placeholder="enter your user id" />
                      <img src="/assets/Icon user.png" alt="" />
                  </fieldset>
                  <fieldset className="field">
                      <legend>PASSWORD</legend>
                      <input type="password" 
                      placeholder="enter your password"/>
                      <img src="/assets/Icon awesome-eye-slash@2x.png" alt="" />
                  </fieldset>
                  <button type="submit" className="btn" >LOGIN</button>
                  <div className="forget">
                      forget password?  
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
