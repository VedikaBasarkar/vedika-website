'use client';

import React, { useState } from 'react';
import '../app/globals.css'


const Projects = [
    {
      "id": 1,
      "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1719034644/vedika-website/project-covers/bitbucket_phbvrn.png",
      "name":"Atlassian (Bitbucket)",
      "catagory":"Product Design",
      "date":"July 2023",
      "url":'/atlassian',
      "textColor":'#ffffff',
      "backgroundColor":'#000000'
    },
    {
        "id": 2,
        "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/1_jix322.jpg",
        "name":"Ripple",
        "catagory":"UI-UX Design",
        "date":"August 2022",
        "url":'/ripple',
        "textColor":'#000',
        "backgroundColor":''
    },{
        "id": 3,
        "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381061/website/jnec/a1_jynfak.jpg",
       "name":"JNEC",
        "catagory":"UI-UX Design and Development",
        "date":"Jan 2022",
        "one-line":"Lorem ipsum dolor, aem Lorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajs",
        "url":'/jnec',
        "textColor":'#000',
        "backgroundColor":''
    },
  ]; 
  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

const ProjectList = () => {

  return (
    <div>
      <div className="px-4 md:px-36 w-full grid md:grid-cols-2 gap-20">
          {Projects.map(item => (
              <div key={item.id} className=''>
                  <a href={item.url}>
                  <div className="h-min overflow-hidden rounded-md shadow-xl hover:shadow-sm">
                      <img className=" hover:scale-110 transition-all duration-500" src={item.img} />
                  </div>
                  <div className='flex flex-row justify-between pt-4'>
                      <div className='text-cyan-600 text-md tracking-wider font-medium'>{item.catagory}</div>
                      <div className='text-gray-400'>{item.date}</div>
                  </div>
                  <div className='text-2xl font-semibold'>{item.name}</div>
                  </a>
              </div>
            ))
          }

          {Projects.map(item => (
                <div key={item.id} onClick={handleClick(item.url)} className="project-card" style={{ backgroundImage: `url(${item.img})`, color: `${item.textColor}`, backgroundColor: `${item.backgroundColor}` }}>
                  <div className="project-card-content p-8">
                    <div className="text-sm py-4 tracking-widest uppercase text-gray-400">{item.date}</div>
                    <div className='text-4xl font-bold'>{item.name}</div>
                    <p>{item.catagory}</p>
                  </div>
                </div>
            ))
          }
      </div>
    </div>
  );
};

export default ProjectList;