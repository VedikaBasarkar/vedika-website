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
      "backgroundColor":'#0A1E43',
      "timeColor":'#9F9E9C'
    },
    {
        "id": 2,
        "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721719211/vedika-website/project-covers/Ripple-cover_wkqvc4.png",
        "name":"Ripple",
        "catagory":"UI-UX Design",
        "date":"August 2022",
        "url":'/ripple',
        "textColor":'#EF3939',
        "backgroundColor":'#FFFAF1',
        "timeColor":'#FD7F7F'
    },{
        "id": 3,
        "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721717713/vedika-website/project-covers/jnec_cover_ugo1lv.png",
       "name":"JNEC",
        "catagory":"Website Design and Development",
        "date":"Jan 2022",
        "one-line":"Lorem ipsum dolor, aem Lorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajs",
        "url":'/jnec',
        "textColor":'#EFE0BB',
        "backgroundColor":'#3B271D',
        "timeColor":'#EFE0BB'
    },
  ]; 
  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

const ProjectList = () => {

  return (
    <div>
      <div className="px-4 md:px-32 w-full flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-20">
          {/* {Projects.map(item => (
              <div key={item.id} className=''>
                  <a href={item.url}>
                  <div className="h-min overflow-hidden rounded-md shadow-xl hover:shadow-sm">
                      <img className=" hover:scale-110 transition-all duration-500" src={item.img} />
                  </div>
                  <div className='flex flex-row justify-between pt-4'>
                      <div className='text-fuchsia-600 text-md tracking-wider font-medium'>{item.catagory}</div>
                      <div className='text-gray-400'>{item.date}</div>
                  </div>
                  <div className='text-2xl font-semibold'>{item.name}</div>
                  </a>
              </div>
            ))
          }  */}

          {Projects.map(item => (
                <div key={item.id} onClick={handleClick(item.url)} className="project-card" style={{ backgroundImage: `url(${item.img})`, color: `${item.textColor}`, backgroundColor: `${item.backgroundColor}` }}>
                  <div className="p-4 md:p-8">
                    <div className="text-sm py-2 md:py-4 tracking-widest uppercase" style={{ color:`${item.timeColor}`}}>{item.date}</div>
                    <div className='text-2xl md:text-4xl font-bold'>{item.name}</div>
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
