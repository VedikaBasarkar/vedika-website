'use client'

import React, { useEffect } from 'react'
import '../../app/globals.css'  
import ReviewsCarousel from '@/components/reviews-carousel';
import Marquee from '@/components/marquee';

const recommendationList = [
    {
        "id": 1,
        "name":"RHYS HOBBS",
        "profile":"Senior Product Designer at Atlassian",
        "recommendation": "<div>Vedika worked with the Data Center team during our most important project rollout - a complete refresh of our UI design across our product suite.<br />Within a few days of starting, Vedika had hit the ground running - she redesigned a key side nan component and had future-proofed it via accessibility improvements (it now meets WCAG AA), ensured it was consistent across the Atlassian suite, and resolved longstanding usability issues. As an icing on the cake, she also found time to upskill the team with her frontend tech knowledge. All of this over a short period with the team.<br />Vedika's a triple-threat designer - she has a strong foundation in development, she's highly motivated and hard-working, and she has a keen eye for design.<br />I highly recommend Vedika. Any team that works with her will not only reap the rewards of her skills and knowledge but will also grow the team's capabilities.</div>" ,
    },
    {
        "id": 2,
        "name":"VINCENT FEENEY",
        "profile":"Senior Product Designer at Atlassian",
        "recommendation":"<div>Vedika came to work on our team as an intern and had an immediate impact, contributing to our work in building Dark Theme for our biggest Enterprise customers. Her engineering background meant she was able to bridge the gap between design and development teams. She had a growth mindset, and was a frequent sharer in our critique sessions, always looking to learn from those around her. Vedika has a unique skillset and I'd strongly recommend her for a UX role.</div>",
    },
    {
        "id": 3,
        "name":"PARAG CHIRDE",
        "profile":"Senior Product Designer at Atlassian",
        "recommendation":"<div>I had the pleasure of working closely with Vedika at our startup, where she demonstrated exceptional talent, dedication, and professionalism.<br \/> As a UI/UX designer, Vedika\'s creative vision and attention to detail were truly impressive. She consistently produced designs that were not only visually stunning but also intuitive and user-friendly. In addition to her design skills, Vedika excelled as a frontend developer.<br\/>Furthermore, Vedika is a pleasure to work with. She is a great communicator, collaborator, and problem-solver. Her positive attitude and willingness to go the extra mile make her an invaluable asset to any team.<br \/>In summary, I recommend Vedika highly. Her exceptional work ethic, combined with her talent and expertise, make her an outstanding candidate for any UI/UX design or frontend development role.</div>",
    },
  ]; 
const About = () => {
    
  return (
    <div className='text-white bg-primary-700'>
        <div className='flex flex-col md:flex-row px-4 md:px-20'>
            <img className="w-full md:w-1/2 rounded-md " src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717390167/vedika-website/profile-photo/IMG_3905_qswdbv.jpg' />
            <div className='md:w-1/2 flex flex-col justify-center'>
                <div className="font-yeseva lg:text-8xl text-4xl md:-ml-20 pt-4">Hello, <br />I'm <span className=''>Vedika</span></div>
                <div className='font-bold text-lg lg:text-2xl py-2 md:py-6 md:pl-20'>I'm a Indian Designer and Developer <br/>
                    Design to development, I cover whole UI part.<br/>I'm a <span className='text-cyan-400'>Computer Science Engineer</span> <br/>and now a full time <span className='text-cyan-400'>UI UX designer</span>. <br/>
                    Currently available for a full time role. </div>
            </div>
        </div>
        <div className="px-4 lg:px-40">
            <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-6 lg:pt-20 text-cyan-400">Vedika Basarkar (Kapatral)</div>
            <div className="pb-4 md:w-3/4 font-normal md:font-bold text-base lg:text-xl">
                I’m an experienced UI UX Designer and Developer. <br/> I completed my Masters in Designing in Electronic Product Designing from IIT Guwahati, 
                Expanding knowledge of designing skills of Adobe XD, Figma & User Experience Design. I’m a person with a creative vision, 
                innovative ideas, obsessed with aesthetics, and a problem-solving attitude.
            </div>
        {/* <hr className="lg:mt-10" />  */}
            <div className='font-yeseva text-3xl pt-14'>Work experience</div>
            <div className='flex flex-col lg:flex-row w-full mt-10'>
                <div className='flex flex-col lg:w-1/2 pr-10'>
                    {/* Atlassian */}
                    <div className='flex flex-col lg:flex-row text-left content-start'>
                        <img className='lg:bg-gray-800 px-4 py-4 h-24 rounded-lg text-left content-start' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717161218/vedika-website/atlassian/vertical-logo-gradient-blue-atlassian_rduhem.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Atlassian</div>
                            <div className="font-medium text-cyan-400">Product Design Intern </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>May 2023 - July 2023</div>
                            <div className="pb-4">
                            I interned at Atlassian as a Product design intern and my main gig was working on creating a Dark mode for Bitbucket’s user interface using Atlassian’s Design System Tokens. I also teamed up with developers to understand what we could and couldn't do with the design. Another thing I did was testing components to make sure they were consistent across the Atlassian Suite and fixing any usability issues that came up.
                            </div>
                        </div>
                    </div>
                    {/* IITG */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-800 px-4 py-4 h-30 md:h-24 rounded-lg justify-start items-start w-fit' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717162545/vedika-website/icons/IIT_Guwahati_Logo_3_xcs0bw.png' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">IIT Guwahati</div>
                            <div className="font-medium text-cyan-400">Faculty Research Assistant
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>August 2022 - May 2024</div>
                            <div className="">
                                I was assigned by my faculty mentor on to work on website. I worked on designing the official website for the Design department at IIT Guwahati. I teamed up with other designers to work on stuff like information architecture, user-flows, and making sure the user experience was top-notch. I made sure the website was responsive on all kinds of devices and also worked on making it totally usable. Plus, I made sure the typography and color scheme were on point too.
                            </div>
                        </div>
                    </div>
                    {/* Ortigan Technologies */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-800 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717163449/vedika-website/icons/ortigan_yn5yvq.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Ortigan Technologies</div>
                            <div className="font-medium text-cyan-400">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>August 2020 - May 2022</div>
                            <div className="">
                                My main role in Ortigan was to design and develop Progressive Web Apps (PWA) for various projects based on what the clients needed. 
                                I used VueJs, Gridsome, NuxtJs, and Tailwind CSS framework to bring these PWAs to life. <br/>
                                Handled things from designing wireframes and userflow to designing components and creating high fidelity designs with figma prototyping. 
                                Then converted the designs into UI components and developed responsive screens. 
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
                <div className='flex flex-col lg:w-1/2 '>
                    {/* Vitwit Technologies */}
                    <div className='flex flex-col lg:flex-row pt-10 lg:pt-0'>
                        <img className='lg:bg-gray-800 md:px-4 py-7 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717164635/vedika-website/icons/vitwit-logo_h7ifcj.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Vitwit</div>
                            <div className="font-medium text-cyan-400">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>June 2019 - May 2020</div>
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
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-800 px-4 py-5 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717566046/vedika-website/icons/iotrl-dark-log_copy_ekirb5.jpg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">IoT Research Labs</div>
                            <div className="font-medium text-cyan-400">Frontend Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>July 2018 - May 2019</div>
                            <div className="">
                              I worked on FleetConnect software which is a system that helps manage fleets. It gives you all sorts of real-time info like location, speed, and even driver behavior through sensors. To build it out, I worked with ReactJs+Redux, HTML5, CSS3, and Bootstrap for creating different components and modules like reports generation, live tracking, and a dashboard. 
                              I had to integrate APIs for all these modules too. And when the backend architecture got revamped, I created data models as well.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* about section (for work) */}
        <div className='font-bold text-lg lg:text-2xl my-10 md:my-32 md:mx-64'>
            <div className='text-lg mb-2'>At work</div>
            <div>I am a person who observes, and then asks lots of question but don't worry, you will definitely get good outcome out of it. I love to do research, always try to answers for all <span className='text-cyan-400'>WHY</span>s and <span className='text-cyan-400'>HOW</span>s. <br/>Working with team with different demographic background and managing time are the qualities I learnt with experience. I like to help people to solve their queries. </div>
        </div>

        </div>

        

        {/* Hobbies */}
        <div className='my-10 md:my-32'>
            <div className='flex flex-row justify-center w-full'><span className='text-2xl font-semibold font-yeseva mb-5'>Things I </span><img className='h-7 mt-1' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718974079/vedika-website/icons/heart_d96kbv.svg" /></div>
            <hr />
            <Marquee />
            <hr />
        </div>

        {/* Recommendations */}
        <div className='px-6 md:px-28 lg:px-40'>
            <div className='font-yeseva text-2xl md:text-4xl my-4 md:my-10 text-center'>Recommendations</div>
            <ReviewsCarousel reviews={recommendationList} interval={10000} />
        </div>
    </div>
  )
}
export default About