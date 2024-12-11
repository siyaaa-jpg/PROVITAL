import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import "./styles.css";
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
}

export default App;
