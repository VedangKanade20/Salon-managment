import React from "react";
import MensOfferCard from "./MensOfferCard";
import mensServices from "../data/mensServices";

const MensOfferList = () => {
  const mensOffersList = mensServices();
  console.log(mensServices);
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {mensOffersList.map((service, index) => {
        <MensOfferCard key={index} mensServices={service} />;
      })}
    </div>
  );
};

export default MensOfferList;
