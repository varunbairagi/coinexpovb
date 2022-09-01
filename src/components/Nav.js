import React, { useContext } from "react";
import logo from "../log-crypto.jpg";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";

const Nav = () => {
  const { isLoading } = useContext(AppContext);
  console.log(isLoading);
  return (
    <>
      <div className="sidebar">
        <div className="aside">
          <h2>CoinExpo</h2>
          <div className="logoimg">
            <img src={logo} alt="logo.jpg" />
          </div>
          <Link to="/">
            {" "}
            <div className="pd nv">Home</div>
          </Link>
          <Link to="/cryptocurrencies">
            {" "}
            <div className="pd nv">Crypto Currencies</div>
          </Link>
          <Link to="/marketcap">
            {" "}
            <div className="pd nv">MarketCap</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
