'use client';

import React, { useState } from 'react';
import '../app/globals.css'


const Projects = [
    {
      "id": 1,
      "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1716143043/vedika-website/project-covers/atlassian-cover-light_kdbznh.jpg",
      "name":"Atlassian (Bitbucket)",
      "catagory":"Product Design",
      "date":"July 2023",
      "one-line":"Lorem ipsum dolor, aem Lorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajs",
      "url":'/atlassian'
    },
    {
        "id": 2,
        "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/1_jix322.jpg",
        "name":"Ripple",
        "catagory":"UI-UX Design",
        "date":"August 2022",
        "one-line":"Lorem ipsum dolor, aem Lorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajs",
        "url":'/ripple'
    },{
        "id": 3,
        "img": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381061/website/jnec/a1_jynfak.jpg",
       "name":"JNEC",
        "catagory":"UI-UX Design and Development",
        "date":"Jan 2022",
        "one-line":"Lorem ipsum dolor, aem Lorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajsLorem ipsum dolor, ajs",
        "url":'/jnec'
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
                  {/* <div>{item['one-line']}</div> */}
                  </a>
              </div>
          ))
          }

          {Projects.map(item => (
              <div key={item.id} className=''>
                  <div onClick={handleClick(item.url)}>
                      <img className="" src={item.img} />
                      <div className='text-white text-md tracking-wider font-medium'>{item.catagory}</div>
                      <div className='text-white'>{item.date}</div>
                      <div className='text-2xl font-semibold'>{item.name}</div>
                  </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default ProjectList;