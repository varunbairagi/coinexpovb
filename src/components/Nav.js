import React, { useContext } from "react";
import logo from "../log-crypto.jpg";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";

const Nav = () => {
  const { isLogin,setCartView,cartView,setIsLogin } = useContext(AppContext);

  // console.log(isLoading);
  const hide=()=>{
   
    setIsLogin(true);
    cartView&&setCartView(false);
  }
  const showCart = () => {
    cartView?setCartView(false):setCartView(true)};
  return (
    <>
      <div className="sidebar">
        <div className="aside">
          <h2>CoinExpo</h2>
          <div className="logoimg">
            <img src={logo} alt="logo.jpg" />
          </div>
          <Link to="/">
            <div className="pd nv"><i class="fas fa-home-alt"/>Home</div>
          </Link>
          <Link to="/cryptocurrencies">
            <div className="pd nv"><i class="fas fa-coins"/>Crypto Currencies</div>
          </Link>
          <Link to="/marketcap">
            <div className="pd nv"><i class="fas fa-regular fa-chart-line"></i>MarketCap</div>
          </Link>
          {isLogin ? (
            <>
              <Link to="/login">
                <div className="pd nv"><i class="fa-sharp fa-solid fa-right-to-bracket"></i>Log In</div>
              </Link>
              <Link to="/signup">
                <div className="pd nv"><i class="fa-regular fa-address-card"></i>Sign Up</div>
              </Link>
            </>
          ) : (
            <>
              <div className="pd nv" onClick={showCart} style={{cursour:"pointer"}}><i class="fa-brands fa-bitcoin"></i>
               My Cart
              </div>
              <Link to="/">
                <div className="pd nv" onClick={hide}><i class="fa-solid fa-arrow-right-from-bracket" ></i>Log Out</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
