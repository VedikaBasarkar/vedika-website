'use client';

import React, { useState, useEffect } from 'react';
import '../app/globals.css'

export default function Navbar () {
  
  let pathURL = '';

  if (typeof window !== "undefined"){
    pathURL = window.location.pathname;
  }
  
  return (
    <div>
    {
      pathURL == '/about' ? 

      <nav className="z-30 bg-primary-700">
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-10">
          <a name="Home Page" href="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold">
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              {/* <div className='text-4xl font-extrabold text-white font-yeseva' 
              >V.</div> */}
            <img className="h-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg' />
            </span>
          </a>
          <a name="About page" href="/about" className='tracking-wider font-semibold text-white hover:text-amber-600'>Drop me an e-mail</a>
        </div>
      </nav>

      :

      <nav className="z-30 bg-white">
        <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-10">
          <a name="Home Page" href="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold">
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              {/* <div className='text-4xl font-extrabold text-primary-700'>V.</div> */}
            <img className="h-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg' />
            </span>
          </a>
          <a name="About page" href="/about" className='tracking-wider font-semibold hover:text-amber-600'>ABOUT</a>
        </div>
      </nav>

      }
    </div>
  );
};