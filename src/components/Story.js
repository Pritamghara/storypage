// src/components/Story.js

import React, { useState } from 'react';
import './Story.css'; // Import your CSS for styling

const Story = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTurningPage, setIsTurningPage] = useState(false);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setIsTurningPage(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
        setIsTurningPage(false);
      }, 500); // Adjust the transition duration as needed
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsTurningPage(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => prevPage - 1);
        setIsTurningPage(false);
      }, 500); // Adjust the transition duration as needed
    }
  };

  return (
    <div className={`story-container ${isTurningPage ? 'turning' : ''}`}>
      <div className="story-content">
        <div className="left-page">
          <p>{pages[currentPage].text}</p>
        </div>
        <div className="right-page" onClick={nextPage}>
          <img
            src={pages[currentPage].image}
            alt={`Page ${currentPage + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
