'use client';

import React, { useState } from 'react';
import '../app/globals.css'

const Marquee = () => {
  const words = [
    'Badminton', 'Clean Inbox', 'Clash of Clans', 'Photography', 'Simple UI',
    'Chess', 'Iced Tea', 'Mario', 'Photography', 'Team Building', 'CSS',
    'Supersonic Rocketship', 'French Fries', 'Embroidery'
  ];

  return (
    <div className="marquee">
      <div className="marquee-inner">
        {words.map((word, index) => (
          <span key={index} className="marquee-item my-6 font-bold text-base lg:text-xl">{word}</span>
        ))}
        {words.map((word, index) => (
          <span key={index + words.length} className="marquee-item my-6 font-bold text-base lg:text-xl">{word}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
