import React from "react";
import MensOfferList from "../components/MensOfferList";
import WomensOfferList from "../components/WomensOfferList";

const Services = () => {
  return (
    <div className="services-page flex flex-col items-center px-6 py-12 bg-gray-800 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-100 mb-12">Our Services</h1>

      {/* Men's Services Section */}
      <section className="w-full max-w-3xl mb-12 flex justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full text-center">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6 border-b pb-3">
            Men's Services
          </h2>
          <div className="flex flex-col items-center">
            <MensOfferList />
          </div>
        </div>
      </section>

      {/* Women's Services Section */}
      <section className="w-full max-w-3xl flex justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full text-center">
          <h2 className="text-3xl font-semibold text-pink-500 mb-6 border-b pb-3">
            Women's Services
          </h2>
          <div className="flex flex-col items-center">
            <WomensOfferList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
