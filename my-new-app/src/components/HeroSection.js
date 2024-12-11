import React from "react";
import "./HeroSection.css";
import image1 from "./FrontendTask1/Rectangle 3468486.png";
import image2 from "./FrontendTask1/Rectangle 3468483.png"; // Replace with actual filename
import image3 from "./FrontendTask1/Rectangle 3468480.png"; // Replace with actual filename
import image4 from "./FrontendTask1/Rectangle 3468484.png"; // Replace with actual filename
import image5 from "./FrontendTask1/Rectangle 3468481.png"; // Replace with actual filename
import image6 from "./FrontendTask1/Rectangle 3468482.png"; // Replace with actual filename
import image7 from "./FrontendTask1/Rectangle 3468487.png"; // Replace with actual filename
import image8 from "./FrontendTask1/Rectangle 3468485.png"; // Replace with actual filename

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="image-columns">
        <div className="column">
          <img src={image1} alt="1" />
          <img src={image2} alt="2" />
          <img src={image3} alt="3" />
          <img src={image4} alt="4" />
        </div>
        <div className="column">
          <img src={image8} alt="8" />
          <img src={image7} alt="7" />
          <img src={image6} alt="6" />
          <img src={image5} alt="5" />
        </div>
      </div>
      <div className="hero-content">
        <h1>
          Book an appointment with{" "}
          <span className="highlight-text">lifestyle medicine experts</span>
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Condition, Procedure, Specialty"
            className="icon"
          />
          <input
            type="text"
            placeholder="City, State, or Zipcode"
            className="icon"
          />
          <select>
            <option value="" disabled selected>
              Insurance Carrier
            </option>
            <option value="carrier1">Carrier 1</option>
            <option value="carrier2">Carrier 2</option>
            <option value="carrier3">Carrier 3</option>
          </select>
          <button className="gradient-button">Find Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
