import React from "react";
import FlipCard from "../components/FlipCard";
import bunImg from "../assets/images/cuteBunImage.png";
import breadImg from "../assets/images/cuteBreadImage.png";
import waterImg from "../assets/images/waterImage.png";
import iceImg from "../assets/images/iceImage.png";

const Contribution = () => {
  const contributions = [
    {
      img: bunImg,
      title: "Food Drive",
      text: "Helping feed the hungry.",
      details:
        "We organized a charity bun distribution, serving over 500 people in the community.",
    },
    {
      img: breadImg,
      title: "Bread Sharing",
      text: "Community support initiative.",
      details:
        "Our bread sharing program supported 300 families during Good Friday week.",
    },
    {
      img: waterImg,
      title: "Clean Water Project",
      text: "Safe drinking water for all.",
      details:
        "We installed 5 water tanks across villages, ensuring clean water for 2000+ residents.",
    },
     {
      img: iceImg,
      title: "Food Drive",
      text: "Helping feed the hungry.",
      details:
        "We organized a charity bun distribution, serving over 500 people in the community.",
    },
    {
      img: bunImg,
      title: "Bread Sharing",
      text: "Community support initiative.",
      details:
        "Our bread sharing program supported 300 families during Good Friday week.",
    },
    {
      img: waterImg,
      title: "Clean Water Project",
      text: "Safe drinking water for all.",
      details:
        "We installed 5 water tanks across villages, ensuring clean water for 2000+ residents.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Contributions</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {contributions.map((c, i) => (
          <FlipCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Contribution;
