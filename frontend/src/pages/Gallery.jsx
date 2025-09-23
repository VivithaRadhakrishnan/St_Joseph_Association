import { useState } from "react";
import labImage1 from "../assets/images/labImage1.png" 
import labImage2 from "../assets/images/labImage2.png"
import labImage3 from "../assets/images/labImage3.png"
import labImage4 from "../assets/images/labImage4.png"

export default function Gallery() {
  // Example slides (replace with your real 10 images + descriptions)
  const slides = [
    { img: labImage1, text: "Helping hands reach farther together." },
    { img: labImage2, text: "Our members working in the community." },
    { img: labImage3, text: "Food distribution drive." },
    { img: labImage4, text: "Charity walkathon event." },
    { img: labImage1, text: "Volunteers teaching children." },
    { img: labImage2, text: "Blood donation campaign." },
    { img: labImage3, text: "Support for local families." },
    { img: labImage4, text: "Medical aid contribution." },
    { img: labImage1, text: "Fundraising concert." },
    { img: labImage2, text: "Together, we make change possible." },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Welcome to the Gallery
      </h1>

      {/* Carousel */}
      <div className="relative">
        <img
          src={slides[current].img}
          alt={`Slide ${current + 1}`}
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Description Card */}
      <div className="mt-6 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        <p className="text-lg text-gray-700">{slides[current].text}</p>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
