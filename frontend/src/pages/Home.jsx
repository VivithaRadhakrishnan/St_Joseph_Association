import React from "react";
import oldarch1 from "../assets/images/oldarch1.webp";
const Home = () => {
  return (
    <div>
      {/* <Header/>  Already it is present in the app.jsx*/}
      {/* <Footer/> */}
      <section className="w-full h-screen relative">
        <img
          src={oldarch1}
          alt="Charity banner"
          className="w-full h-full object-cover"
        />

        {/* Optional overlay text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Welcome to Charity Association
          </h1>
        </div>
      </section>

      {/* Two cards with hover lift */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-2 text-red-600">Our Mission</h2>
          <p className="text-gray-700">
            We strive to help those in need and create meaningful change in the
            community.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">
            Get Involved
          </h2>
          <p className="text-gray-700">
            Join our volunteer programs, participate in events, or contribute to
            charity drives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
