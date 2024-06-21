'use client';

import React, { useState, useEffect } from 'react';
import '../app/globals.css'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust scroll height as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener to scroll event
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <a href="#" className="back-to-top" onClick={scrollToTop}>&larr; BACK TO TOP</a>
      )}
    </>
  );
};

export default BackToTop;
