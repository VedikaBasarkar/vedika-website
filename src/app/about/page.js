'use client'

import React, { useEffect } from 'react'
import '../../app/globals.css'  
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
      }, []);
  return (
    <div className=''>
        <div className='flex flex-col md:flex-row px-4 md:px-20'>
            <img className="w-full md:w-1/2 rounded-md " src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717390167/vedika-website/profile-photo/IMG_3905_qswdbv.jpg' />
            <div data-aos="fade-down" className='md:w-1/2 flex flex-col justify-center'>
                <div className="font-yeseva lg:text-8xl text-2xl md:-ml-20 pt-4">Hello, <br />I'm <span className=''>Vedika</span></div>
                <div className='font-bold text-lg lg:text-2xl py-2 md:py-6 md:pl-20'>I am an Indian Designer and Developer. <br/>
                    Yes, You read it write, <br/>I am a <span className='text-cyan-600'>Computer Science Engineer</span> <br/>and now I am a full time <span className='text-cyan-600'>UI UX designer</span>. <br/>
                    I am available for a full time role. </div>
            </div>
        </div>
        <div></div>
        <div data-aos="fade-down" className="px-6 lg:px-40">
            <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-6 lg:pt-20">Vedika Basarkar (Kapatral)</div>
            <div className="pb-4">
                I’m an experienced UI UX Designer and Developer. <br/> Completed my Masters in Designing in Electronic Product Designing from IIT Guwahati, 
                Expanding knowledge of designing skills of Adobe XD, Figma & User Experience Design. I’m a person with a creative vision, 
                innovative ideas, obsessed with aesthetics, and a problem-solving attitude.
            </div>
            {/* <hr className="lg:mt-10" /> */}
            <div className='flex flex-row w-full mt-10'>
                <div className='flex flex-row lg:flex-col lg:w-1/2 pr-10'>
                    {/* Atlassian */}
                    <div className='flex flex-row'>
                        <img className='bg-gray-100 px-4 py-4 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717161218/vedika-website/atlassian/vertical-logo-gradient-blue-atlassian_rduhem.svg' />
                        <div className='pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Atlassian</div>
                            <div className="font-medium">Product Design Intern </div>
                            <div className='text-gray-400 font-light pb-4'>May 2023 - July 2023</div>
                            <div className="pb-4">
                                I was responsible to work on the Dark mode of Bitbucket’s user interface using Atlassian’s Design System (ADS) Token. 
                                Performed WCAG and AA tests on components which I redesigned to make it consistent across Atlassian Suite, to resolve usability issue. Teamed up with developers to understand limitations for bringing changes in user interface design.
                            </div>
                        </div>
                    </div>
                    {/* IITG */}
                    <div className='flex flex-row mt-10'>
                        <img className='bg-gray-100 px-4 py-4 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717162545/vedika-website/icons/IIT_Guwahati_Logo_3_xcs0bw.png' />
                        <div className='pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">IIT Guwahati</div>
                            <div className="font-medium">Faculty Research Assistant
                            </div>
                            <div className='text-gray-400 font-light pb-4'>August 2022 - May 2024</div>
                            <div className="">
                                Designed official website for department of design of IIT Guwahati. Also Worked on information architecture, user-flows, and user experience with a team of designers.<br />
                                Designed components, responsive across different platform by taking care of usability. Also worked on typography and color theme.
                            </div>
                        </div>
                    </div>
                    {/* Ortigan Technologies */}
                    <div className='flex flex-row mt-10'>
                        <img className='bg-gray-100 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717163449/vedika-website/icons/ortigan_yn5yvq.svg' />
                        <div className='pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Ortigan Technologies</div>
                            <div className="font-medium">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 font-light pb-4'>August 2020 - May 2022</div>
                            <div className="">
                                Designing and Developing PWA (Progressive Web App) using VueJs, Gridsome, NuxtJs, and Tailwind CSS framework for different projects according to client’s requirements.
                                Designed wireframes, userflow and High Fidelity Designs, along with setting up the color palette, typography, components design, and prototyping using Figma. Converted designs to UI components and developed responsive screens. 
                                Taught web development under the Ortigan Learning program.
                                {/* <div className=" flex flex-row flex-wrap underline text-base pt-4">
                                    <a className="pr-4" target='_blank' href="https://www.nomadspaces.in/">https://www.nomadspaces.in/ </a>
                                    <a className="pr-4" target='_blank' href="https://debugsbunny.com/">https://debugsbunny.com/ </a>
                                    <a className="pr-4" target='_blank' href="https://jnec-website.ortigan.dev">https://jnec-website.ortigan.dev/ </a>
                                    <a className="pr-4" target='_blank' href="http://vitwit-dev.surge.sh/">http://vitwit-dev.surge.sh/</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col lg:w-1/2 border-l border-l-gray-500 pl-10 border-dashed'>
                    {/* Vitwit Technologies */}
                    <div className='flex flex-row'>
                        <img className='bg-gray-100 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717164635/vedika-website/icons/vitwit-logo_h7ifcj.svg' />
                        <div className='pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Vitwit</div>
                            <div className="font-medium">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 font-light pb-4'>June 2019 - May 2020</div>
                            <div className="">
                                <div className="font-Medium">Aneka - Blockchain explorer</div>
                                <div className="">
                                Aneka is a block explorer for blockchains that helps users visualize various events happening in the selected blockchains based on cosmos SDK and other test networks as well as main networks.
                                </div>
                                <div className="font-Medium">Vwallet - Cryptocurrency wallet</div>
                                <div className="">
                                Vwallet is an interactive cryptocurrency wallet that lets a user make transactions across IBC (Interblockchain communication) compatible chains. It represents the steps taken to initiate and receive a transaction with minimal input from the end-user.
                                </div>
                                <div className="font-Medium">Jagar - Blockchain’s validators monitoring and alerting tool</div>
                                <div className="">
                                This tool lets users register the validators of various cosmos-based chains and helps delegators to keep track of their delegations. Users can configure custom alerts that can be sent to a telegram account or on email.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* IoT Research Labs */}
                    <div className='flex flex-row mt-10'>
                        <img className='bg-gray-100 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717164635/vedika-website/icons/vitwit-logo_h7ifcj.svg' />
                        <div className='pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">IoT Research Labs</div>
                            <div className="font-medium">Frontend Developer
                            </div>
                            <div className='text-gray-400 font-light pb-4'>July 2018 - May 2019</div>
                            <div className="">
                                FleetConnect is a fleet management system that provides real-time visibility into all critical information like location, speed, driver’s behavior, vehicle status with live tracking and much more using different types of sensors.<br />
                                Developed different components using ReactJs+Redux, HTML5, CSS3 and Bootstrap.<br />
                                Developed different modules like reports generation and analytics, live tracking of vehicles, and
                                dashboard. Completed API integration for all these modules.<br />
                                Created data models, when backend architecture was getting revamped.<br />
                                Developed company’s official website using ReactJs, Bootstrap, NextJs, HTML5, and CSS3.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-20'>
            <div className='text-center'>What I  <span className='text-red-800'>Love</span></div>
            <marquee className='my-6 font-bold text-xl' loop="-1" direction='left' play="true" speed={50} delay={0}>
                <span className='p-8'>Simple UI</span>
                <span className='p-8'>Chess</span>
                <span className='p-8'>Iced Tea</span>
                <span className='p-8'>Mario</span>
                <span className='p-8'>Badminton</span>
                <span className='p-8'>Clean Inbox</span>
                <span className='p-8'>Clash of Clans</span>
                <span className='p-8'>Photography</span>
                <span className='p-8'>Team Building</span>
                <span className='p-8'>CSS</span>
                <span className='p-8'>Supersonic Rocketship</span>
                <span className='p-8'>French Fries</span>
                <span className='p-8'>Embroidery</span>
            </marquee>
        </div>
    </div>
  )
}
export default About