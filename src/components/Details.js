import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { coinId } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "11953919f1msha36b523db985331p136566jsnef85400936d7",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(
      `https://coinranking1.p.rapidapi.com/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });
  console.log(coinId);
  return <div>Details {coinId}</div>;
};

export default Details;
