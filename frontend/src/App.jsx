import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// we should let the router dom know about all the pages present in the project
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Members from "./pages/Members";
import Contribution from "./pages/Contribution";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/header" element={<Header />} /> */}
        {/* <Route path="/footer" element={<Footer />} /> */}
        <Route path="/members" element={<Members />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}
