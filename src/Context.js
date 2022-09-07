import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();
const Context = ({children}) => {
    const [marketData, setMarketData] = useState(null);
    const [coinData,setCoinData]=useState();
    const [isLoading, setIsLoading] = useState(true);
    const [iscLoading, setcIsLoading] = useState(true);
    const [coinId,setCoinId]=useState(null);
    const [isLogin,setIsLogin] =useState(true);
    const [cartView,setCartView]=useState(false);
    const [finalAmount,setFinalAmount]=useState(0);
    const [cart,setCart]=useState([])
    const setId=(val)=>{
        setCoinId(val)
    }
    const fixed=(num)=>{return(parseFloat(num).toFixed(2))}
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    const getMarket = () => {
      setIsLoading(true);
      fetch(
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=20&offset=0",
        options
      )
        .then((response) => response.json())
        .then((response) => setMarketData(response?.data))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    };
    getMarket();
    
    if(coinId){
        setcIsLoading(true);
    fetch(`https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
      .then(response => response.json())
      .then(response => setCoinData(response?.data?.coin))
      .catch(err => console.error(err)).finally(()=>setcIsLoading(false));
    }
    
  }, [coinId]);
 return(
    <AppContext.Provider value={{marketData,iscLoading,isLoading,setId,coinData,isLogin,setIsLogin,cartView,setCartView,finalAmount,setFinalAmount,cart,setCart,fixed}}>{children}</AppContext.Provider>)
 
};

export { AppContext, Context };
