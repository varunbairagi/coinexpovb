import React, {  useContext } from "react";
import "./components/Style/Home.css";
import { AppContext } from "./Context";
// import ComA from "./ComA";
import Nav from "./components/Nav";
// import Details from "./components/Details";
import Cryptolist from "./components/Cryptolist";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
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
