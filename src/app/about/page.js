import React from 'react'
import '../../app/globals.css'  


const About = () => {
  return (
      <div className="px-6 md:px-36  md:w-3/4 pb-24">
        <div className="font-yeseva text-3xl md:text-4xl py-6 md:pb-6 md:pt-20">Vedika Rajiv Basarkar</div>
        <div className="">
            I’m an experienced UI/UX Designer and Developer. <br/> Completed my Masters in Designing in Electronic Product Designing from IIT Guwahati, 
            Expanding knowledge of designing skills of Adobe XD, Figma & User Experience Design. I’m a person with a creative vision, 
            innovative ideas, obsessed with aesthetics, and a problem-solving attitude.
        </div>
        <hr className="md:mt-10" />
        <div className="font-yeseva text-xl py-2 md:pb-2 md:pt-10">Atlassian</div>
        <div className=" pb-2">(May 2023 - July 2023)</div>
        <div className="font-medium pb-4">Product Design Intern</div>
        <div className="">
            Worked with Atlassian’s Design System (ADS) Token, to complete the dark mode of Bitbucket’s user interface<br />
            Performed WCAG and AA tests on components which I redesigned to make it consistent across Atlassian Suite, to resolve usability issue.<br />
            Worked with developers to understand limitations for bringing changes in user interface design.
        </div>

        <div className="font-yeseva text-xl py-2 md:pb-2 md:pt-10">IIT Guwahati</div>
        <div className=" pb-2">(August 2022 - May 2024)</div>
        <div className="font-medium pb-4">Faculty Research Assistant</div>
        <div className="">
            Designed official website for department of design of IIT Guwahati<br />
            Worked on information architecture, user-flows, and user experience with a team of designers.<br />
            Designed components, responsive across different platform by taking care of usability. Also worked on typography and color theme.
        </div>

        <div className="font-yeseva text-xl py-2 md:pb-2 md:pt-10">Ortigan Technologies</div>
        <div className=" pb-2">(August 2020 - May 2022)</div>
        <div className="font-medium pb-4">UI Designer and Developer</div>
        <div className="">
            Developing PWA (Progressive Web App) using VueJs, Gridsome, NuxtJs, and Tailwind CSS framework for different projects according to client’s requirements.<br />
            Worked on creating Low-fidelity designs like creating wireframes and userflow for User Experience.<br />
            Converted designs to UI components and developed responsive screens.<br />
            Worked on High-fidelity designs, which includes setting up the color palette, font scheme, components design, and prototyping using Figma<br />
            Did product photography for use-case of product e-commerce web-applications. <br />
            Taught web development under the Ortigan Learning program.
        </div>
        <div className=" flex flex-row flex-wrap underline text-base pt-4">
            <a className="pr-4" target='_blank' href="https://www.nomadspaces.in/">https://www.nomadspaces.in/ </a>
            <a className="pr-4" target='_blank' href="https://debugsbunny.com/">https://debugsbunny.com/ </a>
            <a className="pr-4" target='_blank' href="https://jnec-website.ortigan.dev">https://jnec-website.ortigan.dev/ </a>
            <a className="pr-4" target='_blank' href="http://vitwit-dev.surge.sh/">http://vitwit-dev.surge.sh/</a>
        </div>

        {/* <div className="text-2xl py-2 md:pb-2 md:pt-10">Freelancing</div>
        <div className=" pb-4">(May - August 2020)</div>
        <div className="">
            Worked with Yashraj Mukhate for Logo Designing.<br />
            Worked with SAC Infrastructure and Shrikrushna Construction. <br />
            Worked with Shree Associates Solar for website design and development.
        </div> */}

        <div className="font-yeseva text-xl py-2 md:pb-2 md:pt-10">Vitwit Technologies</div>
        <div className=" pb-2">(June 2019 - May 2020)</div>
        <div className="font-medium pb-4">UI Designer and Developer</div>
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

        <div className="font-yeseva text-xl py-2 md:pb-2 md:pt-10">IoT Research Labs</div>
        <div className=" pb-2">(July 2018 - May 2019)</div>
        <div className="font-medium pb-4">Frontend Developer</div>
        <div className="">
            FleetConnect is a fleet management system that provides real-time visibility into all critical information like location, speed, driver’s behavior, vehicle status with live tracking and much more using different types of sensors.<br />
            Developed different components using ReactJs+Redux, HTML5, CSS3 and Bootstrap.<br />
            Developed different modules like reports generation and analytics, live tracking of vehicles, and
            dashboard. Completed API integration for all these modules.<br />
            Created data models, when backend architecture was getting revamped.<br />
            Developed company’s official website using ReactJs, Bootstrap, NextJs, HTML5, and CSS3.
        </div>
      </div>
  )
}
export default About