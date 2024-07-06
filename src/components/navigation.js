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
    <nav className="z-30 bg-primary-700" 
    // style={pathURL == '/about' ? {backgroundColor:'#020317'} : {backgroundColor:'#ffffff'}}
    >
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-10">
          <a name="Home Page" href="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold">
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              <div className='text-4xl font-extrabold text-white' 
              // style={pathURL == '/about' ? {color:'#ffffff'} : {color:'#030637'}}
              >V.</div>
            {/* <img className="h-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg' /> */}
            </span>
          </a>
          {/* {
          pathURL == '/about' ?  */}
          {/* <a name="About page" href="/about" className='tracking-wider font-semibold text-white hover:text-cyan-400'>Drom me an e-mail hi</a> :  */}
          {/* // <a name="About page" href="/about" className='tracking-wider font-semibold hover:text-cyan-400'>ABOUT</a>
          // } */}
      </div>
    </nav>
    :
    <div>
    <nav className="z-30 bg-white" 
    // style={pathURL == '/about' ? {backgroundColor:'#020317'} : {backgroundColor:'#ffffff'}}
    >
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-10">
          <a name="Home Page" href="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold">
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              <div className='text-4xl font-extrabold text-primary-700' 
              // style={pathURL == '/about' ? {color:'#ffffff'} : {color:'#030637'}}
              >V.</div>
            {/* <img className="h-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg' /> */}
            </span>
          </a>
          {/* {
          pathURL == '/about' ? 
          <a name="About page" href="/about" className='tracking-wider font-semibold text-white hover:text-cyan-400'>Drom me an e-mail hi</a> :  */}
          <a name="About page" href="/about" className='tracking-wider font-semibold hover:text-cyan-400'>ABOUT</a>
          {/* } */}
      </div>
    </nav>
    </div>
        }</div>
  );
};