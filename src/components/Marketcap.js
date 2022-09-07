import React, { useContext } from "react";
import millify from "millify";
import { AppContext } from "../Context";


const Marketcap = (props) => {
  const { marketData } = useContext(AppContext);
  const {
    total,
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = marketData.stats;

  return (
    <>
      <div className="mcp">
        <h2 className="pd mg"> Market Details</h2>
        <div className="top pd">
          <div className="kd">
            <h5 className="pd">Total Crypto Currencies</h5>
            <h3 className="pd">{millify(totalCoins)}</h3>
          </div>
          <div className="kd">
            <h5 className="pd">Total </h5>
            <h3 className="pd">{millify(total)}</h3>
          </div>
          <div className="kd">
            <h5 className="pd">Total Exchanges</h5>
            <h3 className="pd">{millify(totalExchanges)}</h3>
          </div>
          <div className="kd">
            <h5 className="pd">Total Market Cap</h5>
            <h3 className="pd">{millify(totalMarketCap)}</h3>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div className="kd">
              <h5 className="pd">Total 24h Volume</h5>
              <h3 className="pd">{millify(total24hVolume)}</h3>
            </div>
            <div className="kd">
              <h5 className="pd">Total markets</h5>
              <h3 className="pd">{millify(totalMarkets)}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Marketcap;
