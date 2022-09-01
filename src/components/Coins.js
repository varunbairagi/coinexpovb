import React from "react";
import { NavLink } from "react-router-dom";
import millify from "millify";

const Coins = (props) => {
  const { name, iconUrl, price, marketCap, change, uuid } = props.Values;

  return (
    <>
      <div className="coindetails">
        <div className="pd first">
          <h4 className="mg pd">{name}</h4>
          <div className="imgd">
            <img src={iconUrl} alt="logo.jpg" />
          </div>
        </div>
        <div className="inside">
          <div>
            <div>
              <span className="mg pd" style={{ marginRight: "55px" }}>
                {" "}
                Price :
              </span>
              <span>{millify(price)}$</span>
            </div>
            <div>
              <span className="mg pd">Market Cap :</span>
              <span>{millify(marketCap)}</span>
            </div>
            <span className="mg pd">Daily Change :</span>
            <span>{change}</span>
          </div>
        </div>
        <NavLink to={`/${uuid}`}>
          <button style={{ marginLeft: "50px" }}>Show Details</button>
        </NavLink>
      </div>
    </>
  );
};

export default Coins;
