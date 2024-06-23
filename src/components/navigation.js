'use client';

import React, { useState } from 'react';
import '../app/globals.css'


const Navbar = () => {

  return (
    <nav className="z-30">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-10">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold">
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              {/* VEDIKA BASARKAR */}<div className='text-4xl font-extrabold'>V.</div>
            {/* <img className="h-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg' /> */}
            </span>
          </a>
          <a href="/about" className='tracking-wider font-semibold hover:text-trailOne'>ABOUT</a>
      </div>
    </nav>
  );
};

export default Navbar;
