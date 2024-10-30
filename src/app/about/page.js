'use client'

import React, { useEffect } from 'react'
import '../globals.css'  
import ReviewsCarousel from '@/components/reviews-carousel';
import Marquee from '@/components/marquee';
import RippleBG from '@/components/rippleBg';


const Skills = [
    {
        "id":1,
        "name": "User Research",
    },
    {
        "id":2,
        "name": "User Centered Design"
    },
    {
        "id":3,
        "name": "User Flows",
    },
    {
        "id":4,
        "name": "Information Architecture",
    },
    {
        "id":5,
        "name": "High Fidelity Design",
    },
    {
        "id":6,
        "name": "Prototyping",
    },
    {
        "id":7,
        "name": "WCAG Standards",
    },
    {
        "id":8,
        "name": "Responsive Web Design system",
    },
    {
        "id":9,
        "name": "Usability Testing",
    },
    {
        "id":10,
        "name": "User Experiance Design",
    },
    {
        "id":11,
        "name": "Frontend Development",
    },
    {
        "id":12,
        "name": "Database Design",
    },
]

const skillLogos = [
    {
        "id":1,
        "name":"Figma",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302964/vedika-website/icons/image_7_qlnm7y.png'
    },
    {
        "id":2,
        "name":"Adobe Illustrator",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302964/vedika-website/icons/image_8_dzxayu.png'
    },
    {
        "id":3,
        "name":"Adobe Photoshop",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302965/vedika-website/icons/image_9_nzggoe.png'
    },
    {
        "id":4,
        "name":"Affinity",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302977/vedika-website/icons/image_10_kvklcu.png'
    },
    {
        "id":5,
        "name":"ReactJs",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302964/vedika-website/icons/image_1_tuj1lm.png'
    },
    {
        "id":6,
        "name":"VueJs",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302964/vedika-website/icons/image_2_rslk4n.png'
    },
    {
        "id":7,
        "name":"HTML5",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302964/vedika-website/icons/image_4_ltvb1m.png'
    },
    {
        "id":8,
        "name":"CSS3",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302965/vedika-website/icons/image_5_w6on0f.png'
    },
    {
        "id":9,
        "name":"Git",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721303310/vedika-website/icons/git_iinhjy.png'
    },
    {
        "id":10,
        "name":"Jira",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721303311/vedika-website/icons/jira_eap8mz.png'
    },
    {
        "id":11,
        "name":"Adobe XD",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721715805/vedika-website/icons/adobe_xd_awhq5a.png'
    },
    {
        "id":12,
        "name":"Invision",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721715850/vedika-website/icons/invision_mt9s8j.png'
    },
    {
        "id":13,
        "name":"Sketch",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721715864/vedika-website/icons/sketch_gwbazz.png'
    },
    {
        "id":14,
        "name":"Webflow",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721715866/vedika-website/icons/webflow_t4rs6x.png'
    },
    {
        "id":15,
        "name":"Miro",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721715875/vedika-website/icons/miro_klsjfs.png'
    }
]

const recommendationList = [
    {
        "id": 1,
        "name":"RHYS HOBBS",
        "profile":"Design Leadership at Atlassian",
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
        "profile":"Co-founder at Ortigan",
        "recommendation":"<div>I had the pleasure of working closely with Vedika at our startup, where she demonstrated exceptional talent, dedication, and professionalism.<br \/> As a UI/UX designer, Vedika\'s creative vision and attention to detail were truly impressive. She consistently produced designs that were not only visually stunning but also intuitive and user-friendly. In addition to her design skills, Vedika excelled as a frontend developer.<br\/>Furthermore, Vedika is a pleasure to work with. She is a great communicator, collaborator, and problem-solver. Her positive attitude and willingness to go the extra mile make her an invaluable asset to any team.<br \/>In summary, I recommend Vedika highly. Her exceptional work ethic, combined with her talent and expertise, make her an outstanding candidate for any UI/UX design or frontend development role.</div>",
    },
  ]; 
const About = () => {
    
  return (
    <div className='text-white bg-primary-700'>
        <div className='flex flex-col md:flex-row px-4 md:px-40'>
            <img className="w-full md:w-1/2 rounded-md h-auto " src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1721362901/vedika-website/profile-photo/profile-vedika_eu3zya.png' />
            <div className='md:w-3/5 flex flex-col justify-center'>
                <div className="font-yeseva md:text-8xl text-4xl md:-ml-20 pt-4">Hello, <br />I'm <span className=''>Vedika</span></div>
                <div className='font-bold text-lg lg:text-2xl py-2 md:py-6 md:pl-20'>I'm an Indian <span className='text-amber-400'>Designer</span> with the background of <span className='text-amber-400'>Developement</span>. <br/>
                    Design to development, I cover the entire UI part.<br/>I'm a <span className='text-amber-400'>Computer Science Engineer</span> <br/>and now a full time <span className='text-amber-400'>UI UX designer</span>. <br/>
                    Currently available for a full time role. </div>
            </div>
        </div>
        {/* <RippleBG /> */}
        <div className="px-4 lg:px-40">
            <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-6 lg:pt-20 text-amber-400">Vedika Basarkar (Kapatral)</div>
            <div className="pb-4 md:w-3/4 font-normal md:font-bold text-base lg:text-xl">
                I’m an experienced UI UX Designer and Developer. <br/> I completed my Masters in Designing in Electronic Product Designing from IIT Guwahati. 
                Expanding my knowledge of designing skills in User Experience Design, Adobe XD & Figma. I worked in the industry in a full time role as well as a freelancer. I’m a person with a creative vision, 
                innovative ideas, obsession with aesthetics, and a problem-solving attitude.
            </div>
            {/* Work experience  */}
            <div className='font-yeseva text-3xl pt-14'>Work experience</div>
            <div className='flex flex-col lg:flex-row w-full mt-10'>
                <div className='flex flex-col lg:w-1/2 pr-10 '>
                    {/* Atlassian */}
                    <div className='flex flex-col lg:flex-row text-left content-start'>
                        <img className='lg:bg-gray-900 px-4 py-4 h-24 rounded-lg text-left justify-start items-start content-start' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717161218/vedika-website/atlassian/vertical-logo-gradient-blue-atlassian_rduhem.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">Atlassian</div>
                            <div className="font-medium text-amber-400">Product Design Intern </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>May 2023 - July 2023</div>
                            <div className="pb-4 text-sm">
                                I interned at Atlassian as a Product design intern and my main gig was working on creating a Dark mode for Bitbucket’s user interface using Atlassian’s Design System Tokens. I teamed up with developers to understand what we could and couldn't do with the design. I also tested components to make sure they were consistent across the Atlassian Suite and fixing any usability issues that came up.
                            </div>
                        </div>
                    </div>
                    {/* IITG */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-900 px-4 py-4 h-30 md:py-4 md:w-24 md:h-24 rounded-lg justify-start items-start w-fit' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717162545/vedika-website/icons/IIT_Guwahati_Logo_3_xcs0bw.png' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">IIT Guwahati</div>
                            <div className="font-medium text-amber-400">Faculty Research Assistant
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>August 2022 - May 2024</div>
                            <div className="pb-4 text-sm">
                                I was assigned by my faculty mentor to work on the official website of the Design department at IIT Guwahati with a team of designers from our department. We worked on information architecture, user-flows, and making sure the user experience was top-notch. Worked on the responsive web design (RWD) with better usability and also on typography & color scheme.
                            </div>
                        </div>
                    </div>
                    {/* Ortigan Technologies */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-900 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717163449/vedika-website/icons/ortigan_yn5yvq.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">Ortigan Technologies</div>
                            <div className="font-medium text-amber-400">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>August 2020 - May 2022</div>
                            <div className="pb-4 text-sm">
                                My main role in Ortigan was to design and develop Progressive Web Apps (PWA) for various projects based clients requirements. 
                                My responsibilities included designing wireframes and userflow to designing components and creating high fidelity designs with figma prototyping. 
                                I converted the designs into UI components and developed responsive screens using VueJS, Grodsome and Tailwind CSS. 
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
                        <img className='lg:bg-gray-900 md:px-4 py-7 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717164635/vedika-website/icons/vitwit-logo_h7ifcj.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">Vitwit</div>
                            <div className="font-medium text-amber-400">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>June 2019 - May 2020</div>
                            <div className="pb-4 text-sm">
                                At Vitwit, I worked on 2 platforms, Aneka (Blockchain explorer) and Jagar (Blockchain’s validators monitoring and alerting tool), collaboarting with a designer to work on information architecture and high fidelity designs. Along with that I was part of the frontend development team. We built the platforms using ReactJS, Bootstrap and Ant Design library.
                            </div>
                        </div>
                    </div>
                    {/* IoT Research Labs */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-900 px-4 py-5 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717566046/vedika-website/icons/iotrl-dark-log_copy_ekirb5.jpg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">IoT Research Labs</div>
                            <div className="font-medium text-amber-400">Frontend Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>July 2018 - May 2019</div>
                            <div className="pb-4 text-sm">
                              I worked on FleetConnect which is a system that helps in managing fleets. It gives real-time information like location, speed, and even driver behavior through sensors. We used ReactJs+Redux, HTML5, CSS3, and Bootstrap for development. Responsive components and modules like reports generation, live tracking, and a dashboard were built. 
                              I integrated APIs for all these modules and created data models when the backend architecture was revamped.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about section (for work) */}
            <div className='font-bold text-lg lg:text-2xl my-10 md:my-32 md:mx-64'>
                <div className='text-lg mb-2'>At work</div>
                <div>I am a person who observes, and then asks a lots of question. But don't worry, you will definitely get a good outcome out of it. I love to do research, always try to answers for all <span className='text-amber-400'>WHY</span>s and <span className='text-amber-400'>HOW</span>s. <br/>Working with teams with different demographic background and managing time are the qualities I learnt with experience. I like to help people in solving their queries. </div>
            </div>

            {/* Skills and Technologies */}
            <div className='font-bold text-lg lg:text-2xl mx-5 my-10 md:my-32 md:mx-20'>
                <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-20 lg:pt-20 ">Skills</div>
                <div className="w-full flex flex-col md:grid md:grid-cols-4 gap-3 md:gap-16 mb-10">
                    {Skills.map(item => (
                        <div key={item.id} className="text-left md:text-center text-base md:text-xl cursor-pointer hover:text-amber-400 md:hover:scale-105" >{item.name}
                        </div>
                        ))
                    }
                </div>

                <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-20 lg:pt-20 ">Softwares and Technologies</div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-16 items-center mb-10">
                    {skillLogos.map(item => (
                        <div key={item.id} className="hover:name-display tooltip" >
                            <img className='skill-icon' src={item.imgUrl} alt={item.name} />
                            {/* <span class="tooltiptext">{item.name}</span> */}
                        </div>
                        ))
                    }
                </div>
            </div>

            {/* Certifications */}
            <div className='my-20 md:my-40'>
                <div className='font-yeseva text-2xl md:text-4xl my-4 md:my-10 text-center'>Certifications</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8'>
                    <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                        <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1725340619/vedika-website/icons/IBM-circle_kjbspi.png' />
                        <a href='https://www.credly.com/badges/528bbf6b-cffc-4511-9dd9-10a6d0b4a825?source=linked_in_profile' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-amber-400'>Enterprise Design Thinking Practitioner <br /><p className='text-sm mt-2'>course by IBM </p></a>
                    </div>

                    <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                        <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1725340619/vedika-website/icons/IBM-circle_kjbspi.png' />
                        <a href='https://www.credly.com/badges/528bbf6b-cffc-4511-9dd9-10a6d0b4a825?source=linked_in_profile' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-amber-400'>Enterprise Design Thinking Co-Creator<br /><p className='text-sm mt-2'>course by IBM </p></a>
                        
                    </div>

                    <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                        <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718978513/vedika-website/icons/google_f3cpxv.png' />
                        <a href='https://www.coursera.org/account/accomplishments/certificate/DL2CJ6VC3YAY' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-amber-400'>Fundamentals of UX Design<br /><p className='text-sm mt-2'>course by Google on Coursera </p></a>
                    </div>

                    <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                        <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718978513/vedika-website/icons/google_f3cpxv.png' />
                        <a href='https://www.coursera.org/account/accomplishments/certificate/AJ9YYL8AWRPQ' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-amber-400'>Start the UX Design Process: Empathise, Define, and Ideate <p className='text-sm mt-2'>course by Google on Coursera </p></a>
                    </div>
                </div>
            </div>
 
        </div>

        {/* Hobbies */}
        <div className='my-20 md:my-40'>
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