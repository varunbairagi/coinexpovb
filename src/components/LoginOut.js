import React,{useState,useContext} from "react";
import logo from "../log-crypto.jpg";
import { AppContext } from "../Context";
import { useNavigate } from "react-router-dom";
import "./Style/Home.css";

const LoginOut = () => {
  const {isLogin,setIsLogin}=useContext(AppContext);
  const navigate=useNavigate();
  const emailC=`varunbairagi@coinexpo.in`;
  const pswrdC=`coinexpo`;
  const [notDemo,setNotDemo]=useState(true)
  const [log,setLog]=useState({"email":"","pwrd":""});
  const [isDemo,setIsDemo]=useState(false);
  const handleChange=(e)=>{
    if(notDemo){
    setLog((prev)=>{
      return(
        {...prev,
          [e.target.id]:e.target.value
        }
      )
    })}
  }
  const Logon=()=>{
    
    if(emailC===log.email && pswrdC===log.pwrd){
    // console.log(log);
  navigate("/");
  setIsLogin(false);
  }
  }
  const show=()=>{
    setNotDemo(false)
    const val={"email":emailC,"pwrd":pswrdC}
    setLog(val)
    setIsDemo(true)
  }
  // console.log(log)


  return (
    <>
      <div className="login">
        <div className="Lleft">
          <div className="logod">
            <div className="logoi">
              <img src={logo} alt="" className="border-gradient-green" />
            </div>
            <h2>Coin Expo</h2>
            <h5>By Varun Bairagi</h5>
          </div>
          <div className="botm">
            <ul>
              <li>Get Prices of different Crypto Currencies</li>
              <li>Get All Details about Crypto Currencies </li>
              <li>Buy Coins Efficiently</li>
            </ul>
          </div>
        </div>
        <div className="rght">
          <div className="innr">
            <div className="lgn">
              <span>Login</span> / <span>SignUp</span>
            </div>
            <div className="ipt">
              <input autoComplete="off"
                type="text"
                placeholder="Enter your Email"
                id="email" onChange={handleChange}
              />
              <input
                type="text" autoComplete="off"
                placeholder="Enter your Password"
                id="pwrd" onChange={handleChange}
              />
            </div>
            <div className="lnks">
              <button className="btnn" onClick={Logon}>Log In</button>
              <div className="icn-link">
                <h5>Login with</h5>
                <i class="fa-brands fa-google"></i><i class="fa-brands fa-facebook"></i>
              </div>
            </div>
          <button className="btnn" onClick={show} >Demo test the website</button>
          {isDemo&& <h5 className="demo">email : {log.email} password : {log.pwrd}</h5>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOut;
