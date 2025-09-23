import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Members from "./pages/Members";
import Contribution from "./pages/Contribution";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contribution" element={<Contribution />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />
      </div>
    
  );
}
