'use client';

import React, { useState, useEffect } from 'react';
import '../app/globals.css';

const ProgressBar = ({ progressColor = '#4caf50' }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollTop}%`, backgroundColor: progressColor }}></div>
    </div>
  );
};

export default ProgressBar;
