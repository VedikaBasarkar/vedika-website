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

  let pathURL = '';

    if (typeof window !== "undefined"){
      pathURL = window.location.pathname;
    }

  return (
    <>
    {pathURL == '/about' ?
    <div className='back-to-top-card'>
      {isVisible && (
        <a name="Back to top" href="#" className="back-to-top text-white" onClick={scrollToTop}>&larr; BACK TO TOP</a>
      )}
      {isVisible && (
        <a name="Back to Home page" href="/" className="home-fixed text-white">HOME PAGE</a>
      )}
    </div> 
    : <div className='back-to-top-card'>
      {isVisible && (
        <a name="Back to top" href="#" className="back-to-top" onClick={scrollToTop}>&larr; BACK TO TOP</a>
      )}
      {isVisible && (
        <a name="Back to Home page" href="/" className="home-fixed">HOME PAGE</a>
      )}
    </div>}
    </>
  );
};

export default BackToTop;
