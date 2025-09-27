import React from "react";

const CardSection = ({ cards }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2
            className={`text-2xl font-bold mb-2`}
            style={{ color: card.color || "#000" }}
          >
            {card.title}
          </h2>
          <p className="text-gray-700 text-center">{card.text}</p>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
