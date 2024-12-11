=import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Pillars.css';

const Pillars = () => {
  const images = [
    '/images/image1.png', // Replace with your image paths
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Show next set of 3 images
  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Show previous set of 3 images
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="pillars-carousel-container">
      <button className="carousel-arrow left-arrow" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="pillars-carousel">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <Card key={index} style={{ width: '18rem' }} className="pillar-card">
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>Card Title {index + 1}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <button className="carousel-arrow right-arrow" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Pillars;
