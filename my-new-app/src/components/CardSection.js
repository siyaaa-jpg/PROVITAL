import React, { useState, useEffect } from "react";
import './CardSection.css';
import nutrition from "../imagesss/Rectangle 144.png";
import physical from "../imagesss/Rectangle 152.png";
import restorative from "../imagesss/Rectangle 154.png";
import stress from "../imagesss/Rectangle 156.png";
import social from "../imagesss/Rectangle 158.png";
import substance from "../imagesss/Rectangle 160.png";

const CardSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the cards array within the component
  const cards = [
    { img: nutrition, title: "Nutrition", desc: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat, and reverse chronic illness." },
    { img: physical, title: "Physical Activity", desc: "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease." },
    { img: restorative, title: "Restorative Sleep", desc: "Consistent, quality sleep is essential for cognitive function and physical health." },
    { img: stress, title: "Stress Management", desc: "Effective stress management techniques are crucial for mental well-being and overall health." },
    { img: social, title: "Social Connection", desc: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health." },
    { img: substance, title: "Substance Abuse", desc: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health." },
  ];

  // Move to the next slide
  const nextSlide = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  // Move to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - 3); // Loop back to the end
    }
  };

  // Continuous loop functionality with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically move to the next slide
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex]);

  return (
    <div className="card-section">
      {/* Left Arrow */}
      <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
        {"<"}
      </button>

      {/* Cards Container */}
      <div className="cards-container" style={{ transform: `translateX(-${currentIndex * (247 + 20)}px)` }}>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default CardSection;
