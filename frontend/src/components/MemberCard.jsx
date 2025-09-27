import React from "react";

const MemberCard = ({ img, name, age, qualification, years }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-600">Qualification: {qualification}</p>
      <p className="text-gray-600">Years of Service: {years}</p>
    </div>
  );
};

export default MemberCard;
