import React,{useState,useContext} from "react";
import logo from "../log-crypto.jpg";
import { AppContext } from "../Context";
import { useNavigate ,NavLink} from "react-router-dom";
import "./Style/Home.css";

const Signup = () => {
  const {isLogin,setIsLogin}=useContext(AppContext);
  const navigate=useNavigate();
  const emailC=`testdev@test.com`;
  const pswrdC=`testdev`;
  const [notDemo,setNotDemo]=useState(true)
  const [sign,setSign]=useState({"email":"","pwrd":""});
  const handleChange=(e)=>{
    if(notDemo){
    setSign((prev)=>{
      return(
        {...prev,
          [e.target.id]:e.target.value
        }
      )
    })}
  }
  const loginTrue=()=>{
    console.log(sign);
    navigate("/");
    setIsLogin(false);
  }
  const Logon=()=>{
    if(emailC===sign.email && pswrdC===sign.pwrd){
    loginTrue()
  }
  }
  
  // console.log(log)


  return (
    <>
      <div className="login">
        <div className="Lleft">
          <div className="logod">
            <div className="logoi">
              <img src={logo} alt="" />
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
            <div className="lgn" >
              <NavLink to="/login" ><span>Login</span></NavLink> / <NavLink to="/signup" ><span>SignUp</span></NavLink>
            </div>
            <div className="ipt">
            <input autoComplete="off"
                type="text"
                placeholder="Enter your Name"
                id="fname" onChange={handleChange}
              />
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
                <i className="fa-brands fa-google"></i><i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          <button className="btnn" onClick={()=>{navigate("/login"); setIsLogin(false);}} >Demo test the website</button>
          <h5 style={{color:"red"}}>*This is Under development</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
