'use client';

import React, { useState } from 'react';
import '../app/globals.css'

const data = [
    {
      "id": 1,
      "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-bg-bw/rushab-bg-bw.jpg",
      "name": "Rushab, Microsoft",
      "courseName":"Fundamentals of UX Design",
      "mode":"online certification",
      "startDate":"1 May 2024",
      "oneLine":'Master the essentials of UX design and craft intuitive digital experiences with our comprehensive online program.',
      "url":'/courses/fundamentals-of-UX-design-program'
    },
    {
      "id": 2,
      "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-bg-bw/Suraj-bg-bw.jpg",
      "name": "Suraj, Nutanix",
      "courseName":"Figma Masterclass",
      "mode":"online certification",
      "startDate":"1 May 2024",
      "oneLine":'Unlock the full potential of Figma and revolutionize your design workflow with our comprehensive online master class.',
      "url":'/courses/figma-masterclass'
    },
    {
      "id": 3,
      "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/profile-photos/square-bg-bw/Vector.jpg",
      "name": "Aditya, Thoughtspot",
      "courseName":"Advanced UX Design",
      "mode":"online certification",
      "startDate":"1 May 2024",
      "oneLine":'Elevate your UX design expertise to the next level with our advanced online program, exploring strategies and innovative techniques.',
      "url":'/courses/advanced-UX-design-program'
    },
  ]; 
  
  const offLine = [
    {
      "id": 1,
      "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/course%20icon-02.jpg",
      "courseName":"Design Launchpad",
      "mode":"Offline Courses",
      "duration":"2 Years",
      "oneLine":'An exhaustive 2-year Design preparation program offered to learners after completion of Grade 10.',
      "url":'/courses/design-launchpad'
    },
    {
      "id": 2,
      "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/course%20icon-01.jpg",
      "courseName":"Design Dojo",
      "mode":"Offline Courses",
      "duration":"1 Year",
      "oneLine":'An exhaustive fast track 1-year Design preparation program offered to learners after completion of Grade 11.',
      "url":'/courses/design-dojo'
    },
    {
      "id": 3,
      "img": "https://design-habitat.nyc3.cdn.digitaloceanspaces.com/illustrations/course%20icon-03.jpg",
      "courseName":"Design Master",
      "mode":"Offline Courses",
      "duration":"1 Year",
      "oneLine":'An exhaustive fast track 1-year Design preparation program offered to learners completing their final year of graduation or who have completed their graduation.',
      "url":'/courses/design-master'
    },
  ]; 
  
const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs flex flex-col">
    <div className='text-center'>
      <button className={`tab ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>Online Certificate Program</button>
      <button className={`tab ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>Mentorship for Design Entrance</button>
    </div>
    <div>
      <div className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {data.map(item => (
            <div key={item.id} className='text-center w-full justify-center'>
                <div className='w-full flex justify-center'>
                <img className='h-80' src={item.img} />
                </div>
                <div className='bg-primary-50 px-4 text-lg w-fit rounded-full shadow-md mode-badge text-secondary-500'>
                {item.mode}
                </div>
                <div className='w-full flex justify-center -mt-10'>
                <div className='bg-primary-400 px-6 py-2 font-medium text-lg w-fit rounded-full shadow-md'>{item.name}</div>
                </div>
                <div className="shadow-md p-4 lg:px-8 lg:py-2 text-center rounded-mobBigBox bg-primary-50">
                <div className='text-xl pb-2 text-secondary-500 font-bold pt-2 '>{item.courseName}</div>
                <div className='h-auto md:h-44 lg:h-40 xl:h-24 text-left px-2'>{item.oneLine}</div>
                <div className='font-bold'>{item.startDate}</div>
                <button onClick={() => router.push(item.url)} className="my-2 rounded-full bg-secondary-500 text-white py-2 px-6">Check Details</button>
                </div>
            </div>
            ))
            }
        </div>
      </div>
      <div className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {offLine.map(item => (
                <div key={item.id} className='text-center w-full justify-center'>
                    <div className='w-full flex justify-center'>
                    <img className='h-80' src={item.img} />
                    </div>
                    <div className='bg-primary-50 px-4 text-lg w-fit rounded-full shadow-md mode-badge text-secondary-500'>
                    {item.mode}
                    </div>
                    <div className="shadow-md p-4 lg:px-8 lg:py-2 text-center rounded-mobBigBox bg-primary-50">
                    <div className='text-xl pb-2 text-secondary-500 font-bold pt-2 '>{item.courseName}</div>
                    <div className='h-auto md:h-40 xl:h-24 text-left px-2'>{item.oneLine}</div>
                    <div className='font-bold'>{item.duration}</div>
                    <button onClick={() => router.push(item.url)} className="my-2 rounded-full bg-secondary-500 text-white py-2 px-6">Check Details</button>
                    </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
    </div>
  );
};

export default Tabs;
