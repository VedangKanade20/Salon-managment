import React from "react";
import { useNavigate } from "react-router-dom";
import MensOfferList from "../components/MensOfferList";
import WomensOfferList from "../components/WomensOfferList";

const Services = () => {
  const navigate = useNavigate(); // Hook for navigation

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
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Ready to book? Click here to schedule your appointment.
          </button>
        </div>
      </section>

      {/* Women's Services Section */}
      <section className="w-full max-w-3xl mb-12 flex justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full text-center">
          <h2 className="text-3xl font-semibold text-pink-500 mb-6 border-b pb-3">
            Women's Services
          </h2>
          <div className="flex flex-col items-center">
            <WomensOfferList />
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Ready to book? Click here to schedule your appointment.
          </button>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full max-w-3xl mb-12 bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">
          What Our Clients Say
        </h2>
        <p className="italic text-gray-600">
          "Best haircut I’ve ever had! Highly recommended." – Alex J.
        </p>
        <p className="italic text-gray-600 mt-3">
          "Amazing facial cleanup. My skin feels so fresh!" – Sarah M.
        </p>
        <p className="italic text-gray-600 mt-3">
          "Professional and friendly service. Will visit again!" – Michael D.
        </p>
      </section>

      {/* Service Gallery */}
      <section className="w-full max-w-3xl mb-12 bg-white shadow-lg rounded-xl p-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">
          Our Work
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/service_haircut_men_1778787479761.png"
            alt="Haircut"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <img
            src="/service_beard_trim_1778787497567.png"
            alt="Beard Trim"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <img
            src="/service_hair_color_1778787513198.png"
            alt="Hair Color"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <img
            src="/service_facial_cleanup_1778787534840.png"
            alt="Facial Cleanup"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
