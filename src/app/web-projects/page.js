'use client'

import React, { useEffect } from 'react'
import '../../app/globals.css'  

const WebProjects = () => {
    
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716143043/vedika-website/project-covers/atlassian-cover_os3cw9.jpg" />
      
      <div className=''>
          {/* Nomads spaces */}
          {/* Info about internship */}
          <div className='project-section'>
          <div className='project-section-heading'>1. Nomadspaces</div>
              
              {/* information */}
              <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-small-heading'>Role<br /><span className='text-nomad'>UI Designed & Developer</span> </div>
                  <br/>
                  <div className='project-section-small-heading'>Timeline<br /><span className='text-nomad'>3 Months</span> </div>
                  <br/>
                  <div className='project-section-small-heading'>Project<br /><span className='text-nomad'>Team project at Ortigan</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p><span className='text-nomad font-semibold'>Nomadspaces</span> is fun loving and hardworking group of people who provides <span className='text-nomad font-semibold'>infrastructure and working space to startups, entrepreneurs, and freelancers</span>. They made sure of providing coworking space with <span className='text-nomad font-semibold'>all necessary amenities</span>. Their co-working spaces are in <span className='text-nomad font-semibold'>bangalore at various location</span> with great capacity.</p>
                  <p>Nomadspaces team came up with a requirement <span className='text-nomad font-semibold'>to design and develop new official website</span>. Where they needed to show basic information with lead generation form. They wanted to gather all responses at one place, so that they can convert these leads to customer. </p>
                </div>
            

                {/* responsibilities */}
                <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                  <div className='project-section-subheading'>What were my <span className='text-nomad'>responsibilities?</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                  <p>One of the important responsibilities was, <span className='text-nomad font-semibold'>to gather requirements, understand their vision and convert into ideations</span>.<br/>
                    • I was responsible <span className='text-nomad font-semibold'>to handle communication between client and our team</span><br />
                    • I was working with <span className='text-nomad font-semibold'>a designer and a developer</span> to deliver project aligning their vision.<br />
                    • <span className='text-nomad font-semibold'>Understanding client's vision and communication proposed solution</span> was my responsibility.<br/>
                    • By understanding vision of client, I collaborated with designer to come up with <span className='text-nomad font-semibold'>appropriate visual language, information architecture and responsive web designs</span>.<br />
                    • Once we got confirmation, then I collaborated with developer to make it into proper functioning website. We even provided a portal where they can check all generated leads.
                  </p>
                </div>

                {/* Visual language */}
                <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                  <div className='project-section-subheading'><span className='text-nomad'>Visual</span> Language</div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                  <p>
                  </p>
                </div>
            </div>
          </div>

      </div>
      <div className='my-20'><a name="Home page of the website" className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default WebProjects