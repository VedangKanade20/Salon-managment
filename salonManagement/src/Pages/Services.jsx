import React from "react";
import MensOfferList from "../components/MensOfferList";
import WomensOfferList from "../components/WomensOfferList";

const Services = () => {
  return (
    <div className="services-page flex flex-col p-5 max-h-full ml-3">
      <div className="flex justify-center">
        <h1 className="text-blue-400 text-center text-4xl font-serif mb-8">
          Our Services
        </h1>
      </div>

      {/* Mens Services Section */}
      <section className="p-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-5 text-gray-700">
            Men's Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MensOfferList />
          </div>
        </div>
      </section>

      {/* Womens Services Section */}
      <section className="p-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-5 text-gray-700">
            Women's Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WomensOfferList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
