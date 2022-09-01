import React from "react";
import Marketcap from "./Marketcap";
import Cryptolist from "./Cryptolist";
import Loader from "./Loader";

const HomePage = ({ isLoading, marketData }) => {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Marketcap data={marketData?.stats} />
          <Cryptolist coins={marketData?.coins} />
        </>
      )}
    </>
  );
};

export default HomePage;
