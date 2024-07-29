'use client'

import React, { useEffect } from 'react'
import '../globals.css'  
import ProgressBar from '@/components/progressBar'

const Plato = () => {
    
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
      <ProgressBar progressColor={'#158BA4'} />
      {/* <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1721804690/vedika-website/Plato/plato_cover_exhheb.png" /> */}
      
      <div className=''>
          {/* Nomads spaces */}
          {/* Info about internship */}
          {/* <div className='project-section'>
          <div className='project-section-heading'>Introduction</div>
            <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                    <div className='project-section-small-heading'>Domain<br /><span className='text-plato'>Design Method Study</span> </div>
                    <br/>
                    <div className='project-section-small-heading'>Timeline<br /><span className='text-plato'>12 Weeks</span> </div>
                    <br/>
                    <div className='project-section-small-heading'>Team Members<br /><span className='text-plato'>Niharika Bajaj <br/>Shubham Vernekar</span> </div>
                    <br/>
                    <div className='project-section-small-heading'>Supervisor<br /><span className='text-plato'>Dr. Debayan Dhar <br/>Dr. Supradeep Das</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                    <p>In the first year of our Masters in Design program, we had a subject called <span className='text-plato font-semibold'>Design Method Study</span>. It was totally focused on <span className='text-plato font-semibold'>learning to observe, identify the problem around us, learning about stakeholders, users, their behavior patterns</span>. We learnt to do research in this subject. 
                    We were taught <span className='text-plato font-semibold'>different design methods</span> which can be applied <span className='text-plato font-semibold'>to identify problems and come up with appropriate solution</span></p>
                    <p>We were asked to choose a context based on availability to research in the campus. With all possible context we chose <span className='text-plato font-semibold'>Mess and Eateries</span> as context to study. Mess is an integral part of every educational institution, its the only place students visit everyday without fail, hence we thought to discover the working of messes and intervene to solve problems faced by messes. 
                    Messes work continuously to feed hundreds and thousands of students everyday, while ensuring they maintain good quality, taste and profits while providing adequate quantity.</p>
                    <p></p>
                </div>
            
              <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                <div className='project-section-subheading'>Let’s understand first <span className='text-plato'>How Mess Operates</span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                <p>
                Institutional messes usually work on a contract basis, after research of the Barak mess at IIT Guwahati we understood more intricately about the basic working of their kitchens and staff. The contract winning company (A.K.H.S Hospitality) sends a team of cooks and service staff to the campus who camp at the campus. The menu is decided after discussions with the hostel authorities and respective student bodies. The company has a in kitchen supervisor and a visiting manager to overlook the day to day running of the mess.
                The kitchen starts work at 5:30 am everyday and closes at 11:30 pm cooking 3 full meals. The consumables like vegetables, meat are brought in everyday to maintain freshness and the other consumables like rice, wheat are brought in once a week and are stored in designated spaces.
                </p>
              </div>

            </div>
          </div> */}
          
          {/* <div className='project-section-heading'></div> */}
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1721804779/vedika-website/Plato/Presentation_tdymk3.jpg" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1721804774/vedika-website/Plato/Presentation-1_q6qbbx.jpg" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1721804776/vedika-website/Plato/Presentation-2_if79jj.jpg" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1721804776/vedika-website/Plato/Presentation-3_sft6ju.jpg" />


      </div>
      <div className='my-20'><a name="Home page of the website" className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default Plato