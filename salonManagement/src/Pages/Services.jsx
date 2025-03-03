import React from "react";
import MensOfferList from "../components/MensOfferList";
import WomensOfferList from "../components/WomensOfferList";

const Services = () => {
  return (
    <div className="services-page flex-col p-5 max-h-full ml-3">
      <div className="justify-items-center">
        <h1 className="text-blue-300 align-middle text-3xl font-serif mb-6">
          Our Services
        </h1>
      </div>

      {/* Mens Services Section */}
      <section className="p-6">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Mens Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <MensOfferList />
          </div>
        </div>
      </section>

      {/* Womens Services Section */}
      <section className="p-6">
        <div className="p-5 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Womens Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <WomensOfferList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
