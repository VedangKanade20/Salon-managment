import React from "react";

const MensOfferCard = ({ mensServices }) => {
  return (
    <div className="w-96 h-120 bg-wheat rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      OfferCard
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={mensServices.imgUrl}
          alt={mensServices.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Details Section */}
      <div className="p-4">
        {/* Name and Views */}
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold text-gray-800">
            {mensServices.title}
          </h4>
          <h4 className="text-lg font-semibold text-gray-800">
            Rate:{mensServices.prices}
          </h4>
        </div>
      </div>
      {/* Desc */}
      <p className="text-sm text-gray-600 mb-1">
        <span className="font-medium">Description:</span>{" "}
        {mensServices.description}
      </p>
    </div>
  );
};

export default MensOfferCard;
