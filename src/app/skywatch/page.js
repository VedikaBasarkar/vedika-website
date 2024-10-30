import React from 'react'
import '../globals.css'
import ProgressBar from '@/components/progressBar'

const JNEC = () => {
  return (
      <div className='flex flex-col px-6 md:px-28 lg:px-40'>
      <ProgressBar progressColor={'#AF744C'} />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1730292093/vedika-website/skywatch/skywatch-cover_dm9dww.jpg" />
        <div className=''>
          {/* Introduction */}
          <div className='project-section'>
              <div className='project-section-heading'>Introduction</div>
              {/* information */}
              <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-small-heading mb-5'>Role<br /><span className='text-skywatch'>Product Designer</span> </div>
                  <div className='project-section-small-heading mb-5'>Company<br /><span className='text-skywatch'>Flytbase (Design challenge)</span> </div>
                  <div className='project-section-small-heading'>Timeline<br /><span className='text-skywatch'>5 Days</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p className='mb-5'>Imagine you're designing a security solution for smart cities using Drone in a Box (DiaB) technology. These drones are housed in automated docking stations placed strategically around the city. Each docking station acts as both a charging hub and a secure storage unit, allowing the drones to autonomously deploy, patrol, and return for recharging—all without human intervention.</p>
                  <p className='mb-5'>The city has implemented a network of DiaB systems to patrol critical infrastructure such as government buildings, transportation hubs, parks, and public spaces. The drones operate autonomously, flying scheduled routes, monitoring for security threats, and responding to emergencies. They capture real-time video feeds, detect suspicious activities through AI, and provide immediate situational awareness to security teams.</p>
                  <p className='mb-5'>As the Product designer, your challenge is to create a responsive, real-time interface for managing the city’s drone fleet.</p>
                </div>
              </div>

              {/* <div className=' flex flex-row flex-wrap mt-10 md:mt-20'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-subheading mb-5'>Design <span className='text-skywatch'>Brief</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                <p className='mb-5'>Imagine you're designing a security solution for smart cities using Drone in a Box (DiaB) technology. These drones are housed in automated docking stations placed strategically around the city. Each docking station acts as both a charging hub and a secure storage unit, allowing the drones to autonomously deploy, patrol, and return for recharging—all without human intervention.</p>
                  <p className='mb-5'>The city has implemented a network of DiaB systems to patrol critical infrastructure such as government buildings, transportation hubs, parks, and public spaces. The drones operate autonomously, flying scheduled routes, monitoring for security threats, and responding to emergencies. They capture real-time video feeds, detect suspicious activities through AI, and provide immediate situational awareness to security teams.</p>
                  <p className='mb-5'>As the Product designer, your challenge is to create a responsive, real-time interface for managing the city’s drone fleet.</p>
                </div>
              </div> */}
          </div>

          {/* high fidelity design */}
          <div className='project-section'>
            <div className='project-section-heading'>High Fidelity Designs</div>
          </div>

          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1730291714/vedika-website/skywatch/Group_145_w27r3h.png" />

        </div>
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1730291715/vedika-website/skywatch/Group_146_xtowkq.png" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1730291715/vedika-website/skywatch/Group_147_wwqy2f.png" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1730291714/vedika-website/skywatch/Group_148_ptdgwz.png" />
          
          <div className='my-20'><a name="Home page of the webiste" className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default JNEC