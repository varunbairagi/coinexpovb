import React,{useContext} from "react";
import Marketcap from "./Marketcap";
import Cryptolist from "./Cryptolist";
import Loader from "./Loader";
import Cart from "./Cart";
import { AppContext } from "../Context";


const HomePage = ({ isLoading, marketData }) => {
  const {cartView} =useContext(AppContext);
  // console.log(marketData)
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        
        <div className="Home">
        <div className="homeO">
          <Marketcap data={marketData?.stats} />
          <Cryptolist coins={marketData?.coins} />
          </div>
          {cartView&&<Cart />}
        </div>
      )}
    </>
  );
};

export default HomePage;
