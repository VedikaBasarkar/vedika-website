'use client';

import React, { useState, useEffect } from 'react';
import '../app/globals.css'

export default function Navbar () {
  
  return (
    <nav className="z-30" 
    style={window.location.pathname == '/about'? {backgroundColor:'#020317'} : {backgroundColor:'#ffffff'}}
    >
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-10">
          <a name="Home Page" href="/" className="flex items-center space-x-3 rtl:space-x-reverse font-bold">
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              <div className='text-4xl font-extrabold' 
              style={window.location.pathname == '/about'? {color:'#ffffff'} : {color:'#030637'}}
              >V.</div>
            {/* <img className="h-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1664265875/website/vedika-logo_q8g9zi.svg' /> */}
            </span>
          </a>
          {
          window.location.pathname == '/about' ? 
          <a name="Contact" href="mailto:vedika.basarkar30@gmail.com" target='_blank' className='tracking-wider font-semibold text-cyan-400 hover:text-white'>Drop an e-mail</a> : 
          <a name="About page" href="/about" className='tracking-wider font-semibold hover:text-cyan-400'>ABOUT</a>
          }
      </div>
    </nav>
  );
};