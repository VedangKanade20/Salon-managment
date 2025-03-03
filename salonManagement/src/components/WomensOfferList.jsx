import React from "react";
import womensServices from "../data/womensService";
import WomensOfferCard from "./WomensOfferCard";

const WomensOfferList = () => {
  const womensOffersList = womensServices();
  console.log(womensServices);
  return (
    <div className='"flex flex-row justify-center gap-6 p-6'>
      {womensOffersList.map((service, index) => (
        <WomensOfferCard key={index} womensServices={service} />
      ))}
    </div>
  );
};

export default WomensOfferList;
