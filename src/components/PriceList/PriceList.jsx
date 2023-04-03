import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const loadPrices = async () => {
      const res = await fetch("prices.json");
      const data = await res.json();
      setPrices(data);
    };
    loadPrices();
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold p-4 text-4xl text-purple-950 bg-purple-300">
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mx-6">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
