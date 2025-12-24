import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Feature from "./assets/Feature";
import Scroller from "./assets/Scroller";
import Footer from "./assets/Footer";
import HeroSection from "./assets/HeroSection";
import CardScroller from "./assets/CardScoller";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import About from "./components/About";
import Register from "./Register";

function App() {
  return (
    <>
      <HeroSection />

      

      {/* ✅ Routing yahan aayegi */}
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/About" element={<About />} />
      </Routes>

       <div className="bg-gray-100">
        <CardScroller />
      </div>

      <Feature />
      <Scroller />
      <Footer />
    </>
  );
}

export default App;
