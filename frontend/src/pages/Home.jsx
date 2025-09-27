import React from "react";
import oldarch1 from "../assets/images/oldarch1.webp";
import CardSection from "../components/CardSection";
import cuteBunImage from "../assets/images/cuteBunImage.png";
import cuteBreadImage from "../assets/images/cuteBreadImage.png";
import waterImage from "../assets/images/waterImage.png";
import iceImage from "../assets/images/iceImage.png";
import Carousel from "../components/Carousel";
import img1 from "../assets/images/bunStacked.jpg";
import img2 from "../assets/images/tentABanner.jpg";
import img3 from "../assets/images/blindPeople.jpg";
import img4 from "../assets/images/nearDrum.jpg";
import img5 from "../assets/images/givingBun.jpg";
import img6 from "../assets/images/rice2020.png";


const Home = () => {

// First section cards
const firstCards = [
  {
    img: cuteBunImage,
    title: "Our Mission",
    text: "We strive to help those in need and create meaningful change in the community.",
    color: "#B91C1C", // Deep red for Good Friday theme
  },
  {
    img: waterImage,
    title: "Get Involved",
    text: "Join our volunteer programs, participate in events, or contribute to charity drives.",
    color: "#2563EB", // Blue accent
  },
];

// Second section cards
const secondCards = [
  {
    img: iceImage,
    title: "Our Mission",
    text: "We strive to help those in need and create meaningful change in the community.",
    color: "#B91C1C",
  },
  {
    img: cuteBreadImage,
    title: "Get Involved",
    text: "Join our volunteer programs, participate in events, or contribute to charity drives.",
    color: "#2563EB",
  },
];

  const slides = [
  { img: img1, text: "Charity bun distribution at the community." },
  { img: img2, text: "Bread sharing program for the needy." },
  { img: img3, text: "Clean water initiative for local families." },
  { img: img4, text: "Church volunteers preparing charity donations." },
  { img: img5, text: "Food offerings and charity setup on Good Friday." },
  { img: img6, text: "Food offerings and charity setup on Good Friday." },
];

  return (
    <div className="bg-white-700 text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full h-screen relative mb-26">
        <img
          src={oldarch1}
          alt="Charity banner"
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to Charity Association
          </h1>
        </div>
      </section>

<section className="w-full bg-gray-100 text-white">
      {/* First Card Section */}
      {/* <CardSection cards={firstCards} className="mb-24"/> */}
      <CardSection cards={firstCards}/>
</section>


{/* // Auto-play every 5 seconds (default)
<Carousel slides={slides} /> */}
{/* // Or customize interval to 3 seconds */}
{/* <Carousel slides={slides} autoPlay={true} interval={3000} /> */}
{/* {/* // Disable auto-play */}
<Carousel slides={slides} autoPlay={false}/>
{/* Placeholder Text Section */}
      <section className="w-full bg-white text-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Our Association</h2>
          <p className="text-lg text-gray-600">
            {/* Leave this empty for now */}
          </p>
        </div>
      </section>

<section className="w-full bg-gray-100 text-white">
      {/* Second Card Section */}
      <CardSection cards={secondCards}/>
</section>
    </div>
  );
};

export default Home;
