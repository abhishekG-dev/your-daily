import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
// import Navbar from "./Navbar";


function Login() {

  const navigate = useNavigate()

  const url = 'http://yd-dev-elb-841236067.ap-south-1.elb.amazonaws.com'

    const [credential,setCredential] = useState({
      email: '',
      password:''
    })

    const onChangeHandler = (e) =>{
      let newData = {
        ...credential,
        [e.target.name]: e.target.value
      }

      setCredential(newData)
      // console.log(credential)
    }

    

    const {email,password} = credential


    const onSubmitHandler = async(e) =>{
        e.preventDefault()
        const submitData = {
          email,
          password
        }

        
        
        const response = await fetch(`${url}/api/sm-login`,{
          method:'POST',
          headers:{
            "Content-Type" : 'application/json'
          },
          body:JSON.stringify(submitData)
        })

        const res = await response.json()
        console.log(res)
        if(response.status === 200){
          localStorage.setItem('token',JSON.stringify(res.Authorization))
          navigate('/')
        }
    }
    
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
              <form onSubmit={onSubmitHandler} >
                  <div className="d1">
                      <h1>LOGIN</h1>
                      <p>Please login to your account</p>
                  </div>
                  <fieldset className="field">
                      <legend  >USER ID</legend>
                      <input type="text"
                      placeholder="enter your user id"
                      name="email"
                      value={email}
                      onChange={onChangeHandler} />
                      <img src="/assets/Icon user.png" alt="" />
                  </fieldset>
                  <fieldset className="field">
                      <legend>PASSWORD</legend>
                      <input type="password" 
                      placeholder="enter your password"
                      name="password"
                      value={password}
                       onChange={onChangeHandler} />
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
