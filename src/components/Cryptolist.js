import React, { useContext } from "react";
import { AppContext } from "../Context";
import Coins from "./Coins";
const Cryptolist = () => {
  const { marketData } = useContext(AppContext);
 

  return (
    <>
      <div className="cryptomain">
        <h2 className="pd mg">Top 20 Crypto Currencies</h2>
       
        <div className="list">
          {marketData?.coins?.map((el, i) => {
            return <Coins Values={el} key={i} id={i} />;
          })}
        </div>
      </div>
      {/*
        show && <CryptoDetails coinId={id}/>*/}
    </>
  );
};

export default Cryptolist;
