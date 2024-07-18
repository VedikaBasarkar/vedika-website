'use client'

import React, { useEffect } from 'react'
import '../../app/globals.css'  
import ReviewsCarousel from '@/components/reviews-carousel';
import Marquee from '@/components/marquee';


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
    // {
    //     "id":9,
    //     "name":"Tailwind",
    //     "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721302964/vedika-website/icons/image_3_mv5v3t.png'
    // },
    {
        "id":9,
        "name":"Git",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721303310/vedika-website/icons/git_iinhjy.png'
    },
    {
        "id":10,
        "name":"Jira",
        "imgUrl":'https://res.cloudinary.com/db3h7h0pa/image/upload/v1721303311/vedika-website/icons/jira_eap8mz.png'
    }
]

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
            <img className="w-full md:w-1/2 rounded-md h-auto " src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717390167/vedika-website/profile-photo/IMG_3905_qswdbv.jpg' />
            <div className='md:w-1/2 flex flex-col justify-center'>
                <div className="font-yeseva md:text-8xl text-4xl md:-ml-20 pt-4">Hello, <br />I'm <span className=''>Vedika</span></div>
                <div className='font-bold text-lg lg:text-2xl py-2 md:py-6 md:pl-20'>I'm a Indian Designer and Developer <br/>
                    Design to development, I cover whole UI part.<br/>I'm a <span className='text-purple-400'>Computer Science Engineer</span> <br/>and now a full time <span className='text-purple-400'>UI UX designer</span>. <br/>
                    Currently available for a full time role. </div>
            </div>
        </div>
        <div className="px-4 lg:px-40">
            <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-6 lg:pt-20 text-purple-400">Vedika Basarkar (Kapatral)</div>
            <div className="pb-4 md:w-3/4 font-normal md:font-bold text-base lg:text-xl">
                I’m an experienced UI UX Designer and Developer. <br/> I completed my Masters in Designing in Electronic Product Designing from IIT Guwahati, 
                Expanding knowledge of designing skills of Adobe XD, Figma & User Experience Design. I worked in industry as for full time role and worked as a freelancer as well. I’m a person with a creative vision, 
                innovative ideas, obsessed with aesthetics, and a problem-solving attitude.
            </div>
        {/* <hr className="lg:mt-10" />  */}
            <div className='font-yeseva text-3xl pt-14'>Work experience</div>
            <div className='flex flex-col lg:flex-row w-full mt-10'>
                <div className='flex flex-col lg:w-1/2 pr-10 '>
                    {/* Atlassian */}
                    <div className='flex flex-col lg:flex-row text-left content-start'>
                        <img className='lg:bg-gray-900 px-4 py-4 h-24 rounded-lg text-left justify-start items-start content-start' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717161218/vedika-website/atlassian/vertical-logo-gradient-blue-atlassian_rduhem.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">Atlassian</div>
                            <div className="font-medium text-purple-400">Product Design Intern </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>May 2023 - July 2023</div>
                            <div className="pb-4 text-sm">
                                I interned at Atlassian as a Product design intern and my main gig was working on creating a Dark mode for Bitbucket’s user interface using Atlassian’s Design System Tokens. I also teamed up with developers to understand what we could and couldn't do with the design. Another thing I did was testing components to make sure they were consistent across the Atlassian Suite and fixing any usability issues that came up.
                            </div>
                        </div>
                    </div>
                    {/* IITG */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-900 px-4 py-4 h-30 md:py-4 md:w-24 md:h-24 rounded-lg justify-start items-start w-fit' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717162545/vedika-website/icons/IIT_Guwahati_Logo_3_xcs0bw.png' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">IIT Guwahati</div>
                            <div className="font-medium text-purple-400">Faculty Research Assistant
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>August 2022 - May 2024</div>
                            <div className="pb-4 text-sm">
                                I was assigned by my faculty mentor on to work on website with a team of designers from our department for the official website for the Design department at IIT Guwahati. We worked on information architecture, user-flows, and making sure the user experience was top-notch. Made sure the responsive web design (RWD) with better usability, worked on typography and color scheme.
                            </div>
                        </div>
                    </div>
                    {/* Ortigan Technologies */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-900 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717163449/vedika-website/icons/ortigan_yn5yvq.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">Ortigan Technologies</div>
                            <div className="font-medium text-purple-400">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>August 2020 - May 2022</div>
                            <div className="pb-4 text-sm">
                                My main role in Ortigan was to design and develop Progressive Web Apps (PWA) for various projects based on what the clients needed. 
                                Handled things from designing wireframes and userflow to designing components and creating high fidelity designs with figma prototyping. 
                                Then converted the designs into UI components and developed responsive screens using VueJS, Grodsome and Tailwind CSS. 
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
                            <div className="font-medium text-purple-400">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>June 2019 - May 2020</div>
                            <div className="pb-4 text-sm">
                                At Vitwit, I worked on these 2 platforms, Aneka (Blockchain explorer) and Jagar (Blockchain’s validators monitoring and alerting tool), collaboarting with a designer to work on information architecture and high fidelity designs. Along with that I was part for frontend development team. Using ReactJS, Bootstrap and Ant Design library, we build the platform.
                            </div>
                        </div>
                    </div>
                    {/* IoT Research Labs */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-900 px-4 py-5 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717566046/vedika-website/icons/iotrl-dark-log_copy_ekirb5.jpg' />
                        <div className='lg:pl-6'>
                            <div className="font-semibold text-2xl lg:pb-2">IoT Research Labs</div>
                            <div className="font-medium text-purple-400">Frontend Developer
                            </div>
                            <div className='text-gray-400 text-sm font-light pb-4'>July 2018 - May 2019</div>
                            <div className="pb-4 text-sm">
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
            <div>I am a person who observes, and then asks lots of question but don't worry, you will definitely get good outcome out of it. I love to do research, always try to answers for all <span className='text-purple-400'>WHY</span>s and <span className='text-purple-400'>HOW</span>s. <br/>Working with team with different demographic background and managing time are the qualities I learnt with experience. I like to help people to solve their queries. </div>
        </div>

        <div className='font-bold text-lg lg:text-2xl mx-5 my-10 md:my-32 md:mx-20'>
            <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-20 lg:pt-20 ">Skills</div>
            <div className="w-full flex flex-col md:grid md:grid-cols-4 gap-3 md:gap-16 mb-10">
                {Skills.map(item => (
                    <div key={item.id} className="text-left md:text-center text-base md:text-xl cursor-pointer hover:text-purple-400 md:hover:scale-105" >{item.name}
                    </div>
                    ))
                }
            </div>

            <div className="font-yeseva text-2xl lg:text-4xl py-6 lg:pb-20 lg:pt-20 ">Softwares and Technologies</div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-16 items-center mb-10">
                {skillLogos.map(item => (
                    <div key={item.id} className="text-center" >
                        <img className='skill-icon' src={item.imgUrl} alt={item.name} />
                        {/* <p>{item.name}</p> */}
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
                    <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/c_crop,ar_1:1/v1718978402/vedika-website/icons/image_12_smey3z.png' />
                    <div href='https://www.credly.com/badges/528bbf6b-cffc-4511-9dd9-10a6d0b4a825?source=linked_in_profile' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-purple-400'>Enterprise Design Thinking Practitioner <br /><p className='text-sm mt-2'>course by IBM </p></div>
                </div>

                <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                    <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718978403/vedika-website/icons/image_13_ar6pod.png' />
                    <div href='https://www.credly.com/badges/528bbf6b-cffc-4511-9dd9-10a6d0b4a825?source=linked_in_profile' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-purple-400'>Enterprise Design Thinking Co-Creator<br /><p className='text-sm mt-2'>course by IBM </p></div>
                    
                </div>

                <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                    <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718978513/vedika-website/icons/google_f3cpxv.png' />
                    <a href='https://www.coursera.org/account/accomplishments/certificate/DL2CJ6VC3YAY' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-purple-400'>Fundamentals of UX Design<br /><p className='text-sm mt-2'>course by Google on Coursera </p></a>
                </div>

                <div className='flex flex-col md:flex-row py-2 items-center text-center md:text-left'>
                    <img className="h-32 px-10" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718978513/vedika-website/icons/google_f3cpxv.png' />
                    <div href='https://www.coursera.org/account/accomplishments/certificate/AJ9YYL8AWRPQ' target='_blank' className='pt-4 md:pt-0 text-lg md:text-xl font-semibold hover:text-purple-400'>Start the UX Design Process: Empathise, Define, and Ideate <p className='text-sm mt-2'>course by Google on Coursera </p></div>
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