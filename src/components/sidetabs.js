import React from 'react'

function SideTabs() {
  return (
    <div>
        <div className='flex flex-row'>

        <hr className="lg:mt-10" /> 
            <div className='font-yeseva text-4xl py-10'>Work experience</div>
            <div className='flex flex-col w-full mt-10'>
                <div className='flex flex-col pr-10'>
                    {/* Atlassian */}
                    <div className='flex flex-col lg:flex-row '>
                        <img className='lg:bg-gray-100 px-4 py-4 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717161218/vedika-website/atlassian/vertical-logo-gradient-blue-atlassian_rduhem.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Atlassian</div>
                            <div className="font-medium">Product Design Intern </div>
                            <div className='text-gray-400 font-light pb-4'>May 2023 - July 2023</div>
                            <div className="pb-4">
                            I interned at Atlassian as a Product design intern and my main gig was working on creating a Dark mode for Bitbucket’s user interface using Atlassian’s Design System Tokens. I also teamed up with developers to understand what we could and couldn't do with the design. Another thing I did was testing components to make sure they were consistent across the Atlassian Suite and fixing any usability issues that came up.
                            </div>
                        </div>
                    </div>
                    {/* IITG */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-100 px-4 py-4 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717162545/vedika-website/icons/IIT_Guwahati_Logo_3_xcs0bw.png' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">IIT Guwahati</div>
                            <div className="font-medium">Faculty Research Assistant
                            </div>
                            <div className='text-gray-400 font-light pb-4'>August 2022 - May 2024</div>
                            <div className="">
                                I was assigned by my faculty mentor on to work on website. I worked on designing the official website for the Design department at IIT Guwahati. I teamed up with other designers to work on stuff like information architecture, user-flows, and making sure the user experience was top-notch. I made sure the website was responsive on all kinds of devices and also worked on making it totally usable. Plus, I made sure the typography and color scheme were on point too.
                            </div>
                        </div>
                    </div>
                    {/* Ortigan Technologies */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-100 px-4 py-4 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717163449/vedika-website/icons/ortigan_nav_bar_logo_left_kkv2u4_chn30i.svg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">Ortigan Technologies</div>
                            <div className="font-medium">UI Designer and Developer
                            </div>
                            <div className='text-gray-400 font-light pb-4'>August 2020 - May 2022</div>
                            <div className="">
                                My main role in Ortigan was to design and develop Progressive Web Apps (PWA) for various projects based on what the clients needed. 
                                I used VueJs, Gridsome, NuxtJs, and Tailwind CSS framework to bring these PWAs to life. <br/>
                                Handled things from designing wireframes and userflow to designing components and creating high fidelity designs with figma prototyping. 
                                Then converted the designs into UI components and developed responsive screens. 
                            </div>
                        </div>
                    </div>
                    {/* Vitwit Technologies */}
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-100 px-4 py-7 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590867/vedika-website/icons/vitwit-dark-icon_hmscjf.png' />
                        <div className='lg:pl-6'>
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
                    <div className='flex flex-col lg:flex-row mt-10'>
                        <img className='lg:bg-gray-100 px-4 py-5 w-24 h-24 rounded-lg' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717566046/vedika-website/icons/iotrl-dark-log_copy_ekirb5.jpg' />
                        <div className='lg:pl-6'>
                            <div className="font-yeseva text-2xl lg:pb-2">IoT Research Labs</div>
                            <div className="font-medium">Frontend Developer
                            </div>
                            <div className='text-gray-400 font-light pb-4'>July 2018 - May 2019</div>
                            <div className="">
                              I worked on FleetConnect software which is a system that helps manage fleets. It gives you all sorts of real-time info like location, speed, and even driver behavior through sensors. To build it out, I worked with ReactJs+Redux, HTML5, CSS3, and Bootstrap for creating different components and modules like reports generation, live tracking, and a dashboard. 
                              I had to integrate APIs for all these modules too. And when the backend architecture got revamped, I created data models as well.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col '>
                    
                </div>
            </div>

        {/* Main project content */}
        <div className='w-full md:w-3/4 md:pl-4'>
          <div className='text-gray-400 my-4'>Project</div>

          <div className='project-section' id='intro'>
            <div className='project-section-heading'>Introduction</div>
              <p>Bitbucket is a Git based code hosting and collaboration tool, built for teams. It allows users to do basic Git operations such as reviewing or merging code while controlling read and write access to the code. It also provides integration with other Atlassian tools. Bitbucket's best-in-class Jira and Trello integrations are designed to bring the entire software team together to execute on a project. It provides one place for your team to collaborate on code from concept to Cloud, build quality code through automated testing, and deploy code with confidence.</p>
            </div>
          
          <div className='project-section' id='role'>Hello </div>
        </div>
      </div>
          {/* side tabs */}
          <div className='none md:block w-1/4 font-semibold'>
            <div className='text-gray-400 mb-4'>Process</div>
            <div className='side-tab-element'><a name="Github link" href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a name="Github link" href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a name="Github link" href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a name="Github link" href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a name="Github link" href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a name="Github link" href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a name="Github link" href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a name="Github link" href='#role'>Role and Responsibility</a></div>
          </div>

          {/* Main project content */}
          <div className='w-full md:w-3/4 md:pl-4'>
            <div className='text-gray-400 mb-4'>Project</div>

            <div className='project-section' id='intro'>
              <div className='project-section-heading'>Introduction</div>
              <p>Bitbucket is a Git based code hosting and collaboration tool, built for teams. It allows users to do basic Git operations such as reviewing or merging code while controlling read and write access to the code. It also provides integration with other Atlassian tools. Bitbucket's best-in-class Jira and Trello integrations are designed to bring the entire software team together to execute on a project. It provides one place for your team to collaborate on code from concept to Cloud, build quality code through automated testing, and deploy code with confidence.</p>
            </div>
            
            <div className='project-section' id='role'>Hello </div>
          </div>
        </div>
  )
}

export default SideTabs