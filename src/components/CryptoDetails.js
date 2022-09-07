import React, { useContext } from "react";
// import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context";
import millify from "millify";
import Loader from "./Loader";
import parse from "html-react-parser";

const CryptoDetails = () => {
  let { coinId } = useParams();
  const { setId, coinData, iscLoading,fixed ,isLogin,cart,setCart
  } = useContext(AppContext);
  setId(coinId);
  const setVal=()=>{
    
  }
  
    
  // const [coinData,setCoinData] =useState();

  //  setIds(coinId)
  // console.log(iscLoading)
  console.log(coinData)

  return (
    <>
      {iscLoading ? (
        <Loader />
      ) : (
        <>
          <div className="detailscont">
            <div style={{ textAlign: "center" ,marginTop:"20px"}}>
              <h2>{`${coinData.name} (${coinData.symbol}) Price`}</h2>
              <h5>
                {coinData.name} price in US Dollar (USD). View value statistics,
                market cap and supply.
              </h5>
              {!isLogin&&
                <button style={{ margin: "5px",fontSize:".8rem" }} onClick={setVal}>Buy Now</button>}
            </div>
            <div className="det">
              <div className="valueSt">
                <h3 className="pd mg cen">{coinData.name} Value Statistics</h3>
                <p className="pd mg">
                  An overview showing the statistics of {coinData.name}, such as
                  the base and quote currency, the rank, and trading volume.
                </p>
                <div className="tof mg pd">
                  <div className="fx">
                    <h4>Price to USD</h4> <h3>$ {fixed(coinData.price)}</h3>
                  </div>
                  <div className="fx">
                    <h4>Rank</h4> <h3>{coinData.rank}</h3>
                  </div>
                  <div className="fx">
                    <h4>24h Volume</h4> <h3>$456</h3>
                  </div>
                  <div className="fx">
                    <h4>Market Cap</h4> <h3>{millify(coinData.marketCap)}</h3>
                  </div>
                  <div className="fx">
                    <h4>All Time High</h4>{" "}
                    <h3>{millify(coinData.allTimeHigh.price)}</h3>
                  </div>
                </div>
              </div>
              <div className="valueSt">
                <h3 className="pd mg cen">Other Stats Info</h3>
                <p className="pd mg">
                  An overview showing the statistics of {coinData.name}, such as
                  the base and quote currency, the rank, and trading volume.
                </p>
                <div className="tof mg pd">
                  <div className="fx">
                    <h4>Number Of Markets</h4>{" "}
                    <h3>{coinData.numberOfMarkets}</h3>
                  </div>
                  <div className="fx">
                    <h4>Number Of Exchanges</h4>{" "}
                    <h3>{coinData.numberOfExchanges}</h3>
                  </div>
                  <div className="fx">
                    <h4>Aprroved Supply</h4> <h3>yes</h3>
                  </div>
                  <div className="fx">
                    <h4>Total Supply</h4>{" "}
                    <h3>{millify(coinData.supply.total)}</h3>
                  </div>
                  <div className="fx">
                    <h4>Circulating Supply</h4>{" "}
                    <h3>{millify(coinData.supply.circulating)}</h3>
                  </div>
                </div>
              </div>
              <div className="valueSt">
                <h2 className="pd mg cen">What is {coinData.name}?</h2>
                <p className="pd mg">{parse(coinData.description)}</p>
              </div>
              <div className="valueSt">
                <h3 className="pd mg cen">{coinData.name} Links</h3>

                <div className="tof mg pd">
                  {coinData.links.map((el, i) => {
                    return (
                      <div key={i} className="fx pt">
                        <h4 style={{ textTransform: "uppercase" }}>
                          {el.type}
                        </h4>{" "}
                        <h3>
                          <a
                            href={el.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              textTransform: "uppercase",
                              color: "blue",
                            }}
                          >
                            {" "}
                            {el.name}
                          </a>
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CryptoDetails;
