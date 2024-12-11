import React from 'react';
import './ImageColumns.css';

// Import images from the components/FrontendTask1 folder
import image1 from './FrontendTask1/Rectangle 3468486.png';
import image2 from './FrontendTask1/Rectangle 3468481.png';
import image3 from './FrontendTask1/Rectangle 3468484.png';
import image4 from './FrontendTask1/Rectangle 3468485.png';
import image5 from './FrontendTask1/Rectangle 3468485.png';
import image6 from './FrontendTask1/Rectangle 3468486.png';
import image7 from './FrontendTask1/Rectangle 3468480.png';
import image8 from './FrontendTask1/Rectangle 3468483.png';

const ImageColumns = () => {
  return (
    <div className="image-container">
      {/* Column 1 - Moves top to bottom */}
      <div className="column column-1">
        <img src={image1} alt="aloo" />
        <img src={image2} alt="kadoo" />
        <img src={image3} alt="ziz" />
        <img src={image4} alt="piz" />
      </div>

      {/* Column 2 - Moves bottom to top */}
      <div className="column column-2">
        <img src={image5} alt="ss" />
        <img src={image6} alt="Imss" />
        <img src={image7} alt="ss" />
        <img src={image8} alt="Issss" />
      </div>
    </div>
  );
};

export default ImageColumns;
