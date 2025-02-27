import React from "react";
import { IoEyeOutline } from "react-icons/io5"; // Ensure you have this import

const ProfileCard = ({ employees }) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = getRandomInt(45, 50);

  return (
    <div className="w-64 h-96 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={employees.imgUrl}
          alt={employees.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="p-4">
        {/* Name and Views */}
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold text-gray-800">
            {employees.name}
          </h4>
          <div className="flex items-center gap-1">
            <IoEyeOutline className="text-gray-500" size={18} />
            <span className="text-sm text-gray-500">{randomNumber}</span>
          </div>
        </div>

        {/* Gender */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Gender:</span> {employees.gender}
        </p>

        {/* Experience */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Experience:</span>{" "}
          {employees.experience}
        </p>

        {/* Specialization */}
        <p className="text-sm text-gray-600">
          <span className="font-medium">Specialization:</span>{" "}
          {employees.specialization.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
