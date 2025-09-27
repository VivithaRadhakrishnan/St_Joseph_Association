import React, { useState, useEffect } from "react";

const Carousel = ({ slides, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Manual navigation
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [slides.length, autoPlay, interval]);

  return (
    <section className="max-w-full px-4 py-18 mx-auto  flex flex-col items-center">
      {/* Carousel image */}
      <div className="relative w-full">
        <img
          src={slides[currentIndex].img}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-80 md:h-96  object-fill rounded-xl shadow-lg"
        //    className="max-h-full object-fill rounded-xl shadow-lg"
        //   className="w-full h-full object-fill rounded-xl shadow-lg"
        />
   
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200/70 rounded-full p-2 hover:bg-black/70"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200/70 rounded-full p-2 hover:bg-black/70"
        >
          &#10095;
        </button>
      </div>

      {/* Description */}
      <p className="mt-4 text-center text-white-500 text-lg max-w-2xl">
        {slides[currentIndex].text}
      </p>
    </section>
  );
};

export default Carousel;
