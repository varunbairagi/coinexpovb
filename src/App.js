import React, { useContext, useState } from "react";
import "./components/Style/Home.css";
import { AppContext } from "./Context";
import LoginOut from "./components/LoginOut";
// import ComA from "./ComA";
// import Details from "./components/Details";
import Cryptolist from "./components/Cryptolist";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Signup from "./components/Singup";
import CryptoDetails from "./components/CryptoDetails";
import Marketcap from "./components/Marketcap";
import { Routes, Route } from "react-router-dom";

const App = () => {
  
  const { isLoading, marketData } = useContext(AppContext);

  // console.log(marketData);
  // if (isLoading) return <div>Loading Data</div>;
  return (
    <>
      <div className="main">
        <Nav />
        
          <div className="rside">
            <div>
              <Routes>
              <Route
              exact
              path="/login"
              element={<LoginOut />}
            />
            <Route exact path="/signup" element={<Signup />} />
                <Route
                  exact
                  path="/"
                  element={
                    <HomePage isLoading={isLoading} marketData={marketData} />
                  }
                />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptolist coins={marketData?.coins} />}
                />
                <Route
                  exact
                  path="/marketcap"
                  element={<Marketcap data={marketData?.stats} />}
                />
                <Route exact path="/:coinId" element={<CryptoDetails />} />
              </Routes>
            </div>
            <Footer />
          </div>
       
        
      </div>
      
    </>
  );
};

// export { Data };
export default App;
