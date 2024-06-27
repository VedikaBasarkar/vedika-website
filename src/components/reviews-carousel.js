'use client'

import React, { useState, useEffect } from 'react';

const ReviewsCarousel = ({ reviews, interval = 5000 }) => {
  const [currentReview, setCurrentReview] = useState(0);

  // Function to move to the next review
  const nextReview = () => {
    const nextIndex = (currentReview + 1) % reviews.length;
    setCurrentReview(nextIndex);
  };

  // Function to move to the previous review
  const prevReview = () => {
    const prevIndex = (currentReview - 1 + reviews.length) % reviews.length;
    setCurrentReview(prevIndex);
  };

  // Automatically move to the next review after a certain interval
  useEffect(() => {
    const timer = setInterval(nextReview, interval);
    return () => clearInterval(timer);
  }, [currentReview]);

  return (
    <div className="flex flex-row w-full carousel-container">
      <div className='hidden lg:block lg:w-1/12'><button className="lg:p-4" onClick={prevReview}> <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717655800/vedika-website/icons/left_ohpwfe.svg" /> </button></div>
      <div className="w-full lg:w-10/12 px-4 lg:px-20">
        <div className='mb-2 lg:mb-6 item-group'>
          <div className="text-md lg:text-lg font-extrabold tracking-wider text-cyan-400">{reviews[currentReview].name}</div>
          <div className="text-sm lg:text-base text-gray-400">{reviews[currentReview].profile}</div>
        </div>
        <div className="text-sm lg:text-lg italic text-left" dangerouslySetInnerHTML={ { __html:reviews[currentReview].recommendation }}></div>
      </div>
      <div className='hidden lg:block lg:w-1/12'><button className="p-4" onClick={nextReview}><img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717655800/vedika-website/icons/right_qd7fgv.svg" /> </button></div>
    </div>
  );
};

export default ReviewsCarousel;
