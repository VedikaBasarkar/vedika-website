import React from 'react'
import '../globals.css'
import ProgressBar from '@/components/progressBar'

const JNECDetailed = () => {
  return (
      <div className='flex flex-col px-6 md:px-28 lg:px-40'>
      <ProgressBar progressColor={'#AF744C'} />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381061/website/jnec/a1_jynfak.jpg" />
        <div className=''>
          {/* Introduction */}
          <div className='project-section'>
              <div className='project-section-heading'>Introduction</div>
              {/* information */}
              <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-small-heading mb-5'>Role<br /><span className='text-jnec'>UI UX Designer and Developer</span> </div>
                  <div className='project-section-small-heading mb-5'>Client<br /><span className='text-jnec'>MGM's Jawaharlal Nehru Engineering College</span> </div>
                  <div className='project-section-small-heading'>Date<br /><span className='text-jnec'>Oct 2021 -  March 2022</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p className='mb-5'>Jawaharlal Nehru Engineering College popularly known as JNEC is the constituent college of MGM University.<span className='text-jnec font-semibold'> All the engineering programs</span> are approved by AICTE and the Architecture programs by COA. </p>
                  <p className='mb-5'>This college came to us with a requirement of creating <span className='text-jnec font-semibold'>a brand new official website</span> with some prerequisites. They needed a total <span className='text-jnec font-semibold'>design and technical transformation</span> to take a massive leap with the newly established university. Target was to get the new website ready before <span className='text-jnec font-semibold'>the new admission process started for June 2022 batch</span>.</p>
                  <p><span className='text-jnec font-semibold'>Vice Principal Dr. Vijaya Musande</span> and other faculties, trusted us with our work and we started with the official website project.</p>
                </div>
              </div>

              <div className=' flex flex-row flex-wrap mt-10 md:mt-20'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-subheading mb-5'>Design <span className='text-jnec'>Brief</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p className='mb-5'>The redesign of Jawaharlal Nehru Engineering College's website aims to create <span className='text-jnec font-semibold'>a modern, user-friendly platform</span> that reflects the institution's innovative spirit and commitment to excellence. The new design will prioritize <span className='text-jnec font-semibold'>intuitive navigation,</span> ensuring that prospective students, 
                  current students, faculty, and alumni can easily find relevant information. Aesthetically, the website will feature <span className='text-jnec font-semibold'>a clean, contemporary look with dynamic visuals</span> that showcase cutting-edge facilities, diverse academic programs, and vibrant campus life. We will integrate <span className='text-jnec font-semibold'>responsive design principles </span>
                  to provide a seamless experience across all devices. Additionally, the website will incorporate <span className='text-jnec font-semibold'>enhanced accessibility features and interactive elements,</span> such as virtual tours and real-time updates, to engage and inform diverse audiences effectively. </p>
                </div>
              </div>
          </div>

          {/* Stakeholders study */}
          <div className='project-section'>
              <div className='project-section-heading'>Requirement gathering</div>
              <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-subheading mb-5'>Interviewing <span className='text-jnec'>Stakeholders</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p className='mb-5'>After the first meeting, we came up with a set of questions which were categorised in different verticles. These were important and helpful to understand customer's (stakeholder's) needs and vision.</p>
                  <p className='font-semibold text-jnec'>General Information</p>
                  <b>1. Purpose and Goals</b>
                    <p>- What are the primary goals you want to achieve with the website redesign?</p>
                    <p>- What are the key messages or values that the website should communicate?</p>

                  <b>2. Target Audience</b>
                    <p>- Who are the primary and secondary audiences for the website? (e.g. prospective students, current students, faculty, alumni, industry partners)</p>
                    <p>- What specific needs and expectations do each of these audience groups have from the website?</p>

                  <p className='mt-5 font-semibold text-jnec'>Content and Features</p>
                  <b>3. Content Management</b>
                    <p>- What type of content will be featured on the website? (e.g. news, events, research publications, course information)</p>
                    <p>- Who will be responsible for managing and updating the website content?</p>

                  <b>4. Features and Functionality</b>
                    <p>- What specific features and functionalities are essential for the new website? (e.g. search functionality, event calendar, online application forms)</p>
                    <p>- Are there any new features you would like to introduce that are not present on the current website?</p>

                  <p className='mt-5 font-semibold text-jnec'> Design and Usability</p>
                  <b>5. Design Preferences</b>
                    <p>- Are there any specific design elements or styles that you prefer or want to avoid?</p>
                    <p>- How should the design reflect the college’s brand and identity?</p>

                  <b>6. User Experience</b>
                    <p>- What are the common user journeys that need to be supported? (e.g. finding course information, applying for programs, accessing research resources)</p>
                    <p>- Are there any usability issues with the current website that need to be addressed?</p>

                  <p className='mt-5 font-semibold text-jnec'> Technical Requirements</p>
                  <b>7. Integration and Compatibility</b>
                    <p>- What existing systems or databases does the website need to integrate with? (e.g.,student information system, learning management system)</p>
                    <p>- Are there any specific technical constraints or requirements? (e.g. preferred CMS, hosting environment)</p>

                  <p className='mt-5 font-semibold text-jnec'> Feedback and Evaluation</p>
                  <b>8. Current Website Feedback</b>
                    <p>- What are the strengths and weaknesses of the current website?</p>
                    <p>- Have you received any feedback from users about the current website? If so, what are the common themes?</p>

                  <p className='mt-5 font-semibold text-jnec'> Implementation and Maintenance</p>
                  <b>9. Timeline and Budget</b>
                      <p>- What is the desired timeline for the website redesign project?</p>
                      <p>- What is the budget allocated for this project?</p>

                  <b>10. Ongoing Maintenance</b>
                      <p>- Who will be responsible for maintaining the website post-launch?</p>
                      <p>- What level of support and training will be needed for the team managing the website?</p>
                </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mb-5'><span className='text-jnec'>Insights </span>from Stakeholder's interview </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
                <p className='jnec-keywords'>Enhancing user engagement and experience is a priority.</p>
                <p className='jnec-keywords'>Modern, clean and professional design.</p>
                <p className='jnec-keywords'>Increase in prospective student applications.</p>
                <p className='jnec-keywords'>Website should focus primarily on admission process and relevant information</p>
                <p className='jnec-keywords'>Specific needs include program details, academic resources, research updates and community involvement opportunities.</p>
                <p className='jnec-keywords'>Emphasis on navigation ease, readability, and brand alignment.</p>
                <p className='jnec-keywords'>Current website has issues like slow load times, complex navigation, outdated design.</p>
                <p className='jnec-keywords'>Preference for a scalable CMS with easy content management capabilities.</p>
                <p className='jnec-keywords'>More users visiting website specially students and parents.</p>
                <p className='jnec-keywords'>Content will be provided by our marketing team.</p>
              </div>
            </div>


            <div className=' flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mb-5'><span className='text-jnec'>Targetted </span>Users</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719549894/vedika-website/jnec/targetted_users_wy4fuc.png" alt='targetted users' />
                <p className='mt-5'>Focusing the current requirement and timeline, we are targetting primary users first. </p>
              </div>
            </div>
          </div>

          {/* Old website study */}
          <div className='project-section'>
            <div className='project-section-heading'>Old website study</div>
            <div className=' flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mb-5'><span className='text-jnec'>Performance</span> test</div>
                <div className='text-sm italic mb-5 text-gray-400'>Source: Google's PageSpeed Insights, GTMatrix, Google PageRank Checker.</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4'>
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719487559/vedika-website/jnec/Group_1180_mtfnii.png" alt="page rank" />
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719487559/vedika-website/jnec/Group_1181_llwm5q.png" alt="google page insight" />
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719487559/vedika-website/jnec/J6_gjmi6d.png" alt="gtmatrix grade" />
              </div>
            </div>

            <div className='mt-10 md:mt-20'>
              <div className='project-section-subheading'>Old website<span className='text-jnec'> Screenshots</span></div>
              <img className='mt-10' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719557634/vedika-website/jnec/a5_su8g0a_yshrl9.jpg" alt='old website screenshot' />
            </div>

            <div className='mt-10 md:mt-20'>
              <div className='project-section-subheading'>Old <span className='text-jnec'>Information Architecture </span></div>
              <img className='mt-10' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719559220/vedika-website/jnec/old_IA_epb7gu.png" alt='old website IA' />
            </div>

            <div className='mt-10 md:mt-20'>
              <div className='project-section-subheading'><span className='text-jnec'>Heuristic </span>Analysis</div>
              <img className="mt-10" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719574220/vedika-website/jnec/heuristics_qxnxv4.png" alt='Heuristic analysis' />
            </div>

            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mb-5'><span className='text-jnec'>Findings </span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
                <p className='jnec-keywords'>Slow image loading</p>
                <p className='jnec-keywords'>Content redundancy</p>
                <p className='jnec-keywords'>Difficult navigation</p>
                <p className='jnec-keywords'>Poor information architecture</p>
                <p className='jnec-keywords'>Lack of component standardization</p>
                <p className='jnec-keywords'>Lack of accessibility to important content</p>
                <p className='jnec-keywords'>Missing potential call to actions</p>
                <p className='jnec-keywords'>Inconsistent visual design with font and size uniformity</p>
                <p className='jnec-keywords'>External redirections and cluttered webpages</p>
                <p className='jnec-keywords'>Mobile menu issues with overall non-responsive design elements</p>
                <p className='jnec-keywords'>Absence of analytics and tracking</p>
                <p className='jnec-keywords'>Insufficient mobile optimization</p>
                <p className='jnec-keywords'>Inconsistent user experience cause the lack of user-friendly features</p>
                <p className='jnec-keywords'>Excessive sections with outdated information</p>
                <p className='jnec-keywords'>Inconsistent branding</p>
                <p className='jnec-keywords'>Confusing terminology and inadequate feedback mechanisms</p>
              </div>
            </div>
          </div>

          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662488780/website/jnec/a9_iwlqu2.jpg" />

          {/* new website  */}
          <div className='project-section'>
            <div className='project-section-heading'>New Information Architecture</div>
            <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1719834307/vedika-website/jnec/new-IA_ckovhe.png" alt="New information architecture" />

          </div>

        </div>
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381065/website/jnec/a13_fnlns6.jpg" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662983743/website/jnec/J16_cwenyg.jpg" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662983734/website/jnec/J17-1_dweajc.jpg" />
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662983752/website/jnec/J17_o7pa9v.jpg" />
          <div className="flex flex-row justify-center w-full">
            <a className="font-poppins redirectLink text-xl justify-center" name="JNEC official webiste" href="https://jnec.org/" target="_blank">New Website Link</a>
          </div>
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662381065/website/jnec/a15_bi4mko.jpg" />
          <div className='my-20'><a name="Home page of the webiste" className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default JNECDetailed