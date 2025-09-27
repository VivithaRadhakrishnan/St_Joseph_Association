import React, { useState } from "react";

const FlipCard = ({ img, title, text, details }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-72 h-96 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white shadow-xl rounded-xl flex flex-col items-center justify-center p-4 backface-hidden">
          <img
            src={img}
            alt={title}
            className="w-24 h-24 object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2 text-center">{text}</p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-gray-800 text-white shadow-xl rounded-xl p-4 flex items-center justify-center backface-hidden rotate-y-180">
          <p className="text-center">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
