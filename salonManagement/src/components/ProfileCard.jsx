import React from "react";

const ProfileCard = ({ employees }) => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomNumber = getRandomInt(45, 50);
  return (
    <div className="w-1/4 h-72 bg-yellow-400 font-serif text-center align-middle border-r-8 p-5 text-red-950 items-center flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <div>
        <img
          src={employees.imgUrl}
          alt={employees.name}
          className="w-full h-56 object-cover rounded-t-2xl"
        />
      </div>

      {/* Emp details */}

      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">{employees.name}</h4>
        </div>
        <div className="flex items-center gap-2">
          <IoEyeOutline className="text-gray-700" size={20} />
          <span className="text-gray-700 text-sm">{randomNumber}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600">Gender: {employees.gender}</p>
      <p className="text-sm text-gray-500">
        Experience: {employees.experience}
      </p>
      <p className="text-sm text-gray-500">
        Specialization: {employees.specialization}
      </p>
    </div>
  );
};

export default ProfileCard;
