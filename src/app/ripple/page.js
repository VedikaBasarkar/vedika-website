import React from 'react'
import '../../app/globals.css'  
import ProgressBar from '@/components/progressBar'

const Ripple = () => {
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
    <ProgressBar progressColor={'#EF3939'} />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/1_jix322.jpg" />
        
        {/* information */}
        <div className='project-section'>
          <div className='project-section-heading'>Introduction</div>              
            <div className=' flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                {/* <div className='project-section-small-heading'>Role<br /><span className='text-ripple'>UX Researcher and Designer</span> </div>
                <br/> */}
                <div className='project-section-small-heading'>Date<br /><span className='text-ripple'>July 2022 - August 2022</span> </div>
                <br />
                <div className='project-section-small-heading'>Team members<br /><span className='text-ripple'>Vedika Basarkar</span><br /><span className='text-ripple'>Sourajit Bhattacharjee</span> </div>
                <br />
                <img className='h-20' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718517877/vedika-website/ripple/yuj_vbaglj.png' />
              </div>
              <div className='w-full md:w-2/3 md:pl-4'>
                <p className='mb-5'>UXplorer’22 is design competition organized by YUJ Designs. UXplorer’22 offers an excellent platform for students to exhibit their elegant, human-centred product ideas.</p>
                <p className='mb-5'>Theme for this competition was <span className='text-ripple font-semibold'>Design of Digital Wellness by providing digital solution</span>. Challenge brief was as given below:</p>
                <p className='mb-5'>Social media is being perceived as a source of happiness today, but it often leads to stress and anxiety. And since we end up checking our phones every 4 minutes, 344 times a day, digital wellness has become more important than ever.</p>
                <p className='mb-5'>The biggest challenge therefore is to Design for Digital Wellness to:<br />
                <span className='text-ripple font-semibold'>• Safeguard sanity in a hyperconnected world<br />
                • Strike a balance between the real and reel life<br />
                • Minimize information overload</span>
                </p>
              </div>
            </div>
        </div>

        {/* Design Process */}
        <div className='project-section'>
          <div className='project-section-heading'>Design Process</div>
          <p>To understand brief and to come up with solution in limited time, we preferred to follow double diamond method.</p>
          <p>But during <span className='text-ripple font-semibold'>finalising the concept, we again had to do research</span> so mostly we followed double diamond with little back and forth of domain research.</p>
          <img className='p-4 md:p-16' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718521663/vedika-website/ripple/double-diamond_ochbye.png"/>
        </div>
        
        {/* First diamond */}
        <div className='project-section-heading text-ripple'>Research and Synthesis - First Diamond</div>
        
        {/* basic overview */}
        <div className='project-section'>
          <div className='project-section-heading'>Basic overview</div>
          {/* <div className='project-section-heading'>Secondary research</div> */}
          
          {/* Understanding terms */}
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Understanding <span className='text-ripple'>terms</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'>• Social media - Websites and Applications that focus on communication, community-based input, interaction, content-sharing and collaboration..</p>
              <p className='mb-5'>• Mental well-being - State that enables people to cope with the stress of life, realize their abilities, learn well & work well, and contribute to their community.</p>
              <p className='mb-5'>• Digital well-being - Term used to describe the impact of technologies and digital services on people's mental, physical, social and emotional health.</p>
            </div>
          </div>

          {/* Is it worth working? */}
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>But First of all, is it <span className='text-ripple'>worth working?</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'>Google trend for "Social media" shows that the interest over social media has increased considerably over time and is still on a rise.</p>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718596580/vedika-website/ripple/Screenshot_2024-06-17_at_09.24.34_nzt6sc.png" />
              <p className='my-5'>Google trend for "Digital wellbeing" shows that the interest over Digital wellbeing has boomed suddenly in past few years and it seems to stay due to increasing awareness.</p>
              <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718596679/vedika-website/ripple/Screenshot_2024-06-17_at_09.27.45_my1zcw.png' />
              <p className='mb-5'>Studying the trend justifies that the domain is worth looking into and looking for Design gaps.</p>
            </div>
          </div>

          {/* Looking into numbers */}
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>

            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Looking into the numbers <br /><span className='text-ripple'> for understanding users</span></div>
              <div className='text-sm italic mb-5 text-gray-400'>Source: Kepios Analysis Report and respective platform business repots</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718598624/vedika-website/ripple/user-chart-1_bmtdej.png' />
              <p className='mt-8 mb-4'>This is a huge number of users which are mutually included for using different social media platforms. Followings are some big social media platforms which has great active number of users. </p>
              <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718608094/vedika-website/ripple/active-users_ixt8tf.png' />
            </div>

            <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
              <div className='project-section-subheading'>Looking into the numbers <br /><span className='text-ripple'> for relation with digital wellness</span></div>
              <div className='text-sm italic mb-5 text-gray-400'>Source: Deloitte, Qualtrics and Accel, Common Sense Media, Cigna, and Nielsen.</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10 md:mt-20'>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>88%</span> People use Smartphones and <span className='text-ripple font-semibold text-xl'>95%</span> of them use it everyday.</p>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>150</span> is the average number of times millennials check their phone per day</p>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>70%</span> teens use social media multiple times a day and <span className='text-ripple font-semibold text-xl'>16%</span> of them feel addicted to it</p>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>18%</span> people feel lonely despite using social media on a regular basis. and overall <span className='text-ripple font-semibold text-xl'>47%</span> people feel a lack of in-person communication</p>
              <p className='mb-5'>According to sources <span className='text-ripple font-semibold text-xl'>11 hrs</span> is average daily consumption of media per day.</p>
              <p className='mb-5'>Fun fact that <span className='text-ripple font-semibold text-xl'>40%</span> of people are aware of overusing their phones.</p>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718621161/vedika-website/ripple/way_to_limit_usage_ywxxxm.png" />
              <p>Questions were : </p>
              <p><span className='text-ripple font-semibold'>Are we in Control of social media? <br />What is reason behind people spending lot of time? <br />If people are aware of overusage then are they doing something about it?</span></p>
            </div>

            <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
              <div className='project-section-subheading'>Looking into the numbers <br /><span className='text-ripple'> for people's perception</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10 md:mt-20'>
              <p className='mb-5'>A study by Google EMEA gives a lot of insights on how people perceive activities related to Media Consumption</p>
              <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718609836/vedika-website/ripple/google-numbers-survey_zry2ih.png' />
              <p className='mt-5 font-semibold text-ripple'>Checking Notifications came out to be a major distraction that’s pushing people to consume media</p>
            </div>
          </div>

          {/* News updates */}
          <div className='mt-10 md:mt-20'>
            <div className='project-section-subheading'>What the current <span className='text-ripple'>News Articles</span> say?</div>
            <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718520160/vedika-website/ripple/new-artivles_brpqqo.png' />
          </div>

          {/* Insights */}
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'><span className='text-ripple'>Insights </span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>People are in general aware of the issues of overconsumption of media but still can’t control the urges.</div>
              </div>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>Many undergraduate students experience Phantom vibrations or feeling of Notifications.</div>
              </div>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>Notifications came across as a major distraction element.</div>
              </div>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>Overuse of social media also affecting their physical health, like obesity, backpain, etc.</div>
              </div>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>Lot of people complain of mental health issues and lack of time due to social media.</div>
              </div>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>People were found to be stuck in a vicious cycle of social media apps where they kept using 3-4 of them in a loop.</div>
              </div>
              <div className='w-full md:w-1/2 pr-2 pb-4'>
                <div className='bg-ripple text-white p-4 rounded-md shadow-lg'>Although lot of companies are targeting mental wellbeing, but don’t implement hard features, possibly due to its negative impact on their usage and sales.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Literature Study */}
        <div className='project-section'>
          <div className='project-section-heading'>Literature Study</div>
          {/* Literature  */}
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Some Identified <span className='text-ripple'>Issues</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='mb-5 ripple-keywords'>Reduction in Attention Span </p>
              <p className='mb-5 ripple-keywords'>Addiction</p>
              <p className='mb-5 ripple-keywords'>Negative Cardiovascular Impacts</p>
              <p className='mb-5 ripple-keywords'>Cognitive Dysfunction</p>
              <p className='mb-5 ripple-keywords'>Social Anxiety</p>
              <p className='mb-5 ripple-keywords'>Suicidal Urges</p>
              <p className='mb-5 ripple-keywords'>Decreased Empathy</p>
              <p className='mb-5 ripple-keywords'>Vague-booking</p>
              <p className='mb-5 ripple-keywords'>Loneliness</p>
              <p className='mb-5 ripple-keywords'>Body Dysmorphia</p>
              <p className='mb-5 ripple-keywords'>Irregular Sleep Cycle</p>
              <p className='mb-5 ripple-keywords'>Disconnect with real world</p>
              <p className='mb-5 ripple-keywords'>Reduced Communication Abilities</p>
              <p className='mb-5 ripple-keywords'>Spending more than 3 hours on social media per day puts adolescents at a higher risk for mental health problems</p>
            </div>
          </div>

          {/* Root problem */}
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>What is the <span className='text-ripple'>root problem?</span></div>
              <div className='text-sm italic mb-5 text-gray-400'>Source: Psychology behind mobile addiction by lemonade blog </div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718625208/vedika-website/ripple/dopamin-cycle_webg0g.png" />
            </div>
          </div>

          {/* Notifications */}
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>It's the <span className='text-ripple'>Notifications</span></div>
              <div className='text-sm italic mb-5 text-gray-400'>Source: Livaditi, Vassilopoulou, Lougos, & Chorianopoulos, 2002; Bianchi & Phillips, 2005 </div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718627111/vedika-website/ripple/notifications_hiewqp.png" />
              <p className='my-5'>There are different resources to get notifications on your phone. Complex cognitive, emotional, and behavioral functioning gets hampered as brain starts working on emergency mode, resulting in anxious and stressful behavior.</p>
              <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718681084/vedika-website/ripple/notification_qsrval.png' />
            </div>
          </div>
        </div>

        {/* competitive analysis */}
        {/* <div className='project-section'> */}
          <div className='project-section-subheading'>Let's understand and study <span className='text-ripple'>the available digital solutions</span> in market</div>
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718519832/vedika-website/ripple/competitive-analysis-table_oybdsq.png" />
        {/* </div> */}

        {/* Potential opportunity */}
        <div className='project-section'>
          <div className='project-section-heading'>Potential opportunities</div>
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Minor Gaps</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'>1. The UI in most of the apps had glitches.</p>
              <p className='mb-5'>2. The ones with good and calming UI had problems with the UX of setting limits.</p>
              <p className='mb-5'>3. Many of the apps were based on numbers and facts. It might lead to further information overload for the users which is not intentional.</p>
              <p className='mb-5'>4. Maintaining the calmness of users while taking decision has not been catered to.</p>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'><span className='text-ripple'>Major Gaps</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'>1. None of the applications work across devices and are only limited to phones. Considering people are seeking rehab from phone, it could be a great missed opportunity.</p>
              <p className='mb-5'>2. The basis of most apps rely on forcefully making people not use phones or show them stats so that they don’t use phones. This often leads to more guilt.</p>
              <p className='mb-5'>3. Most of the apps rely on the user to set limits. Now users might tend to overestimate their ability to resist temptation. Inability to fulfil the task might lead them to give up easily.</p>
            </div>
          </div>
        </div>

        {/* Stakeholder study */}
        <div className='project-section'>
          <div className='project-section-heading'>Stakeholder study</div>
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Stakeholder <span className='text-ripple'>Identification</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'>The Exchange of Information in Social Media Platforms consists of the following Stakeholders</p>
              <img className="px-10 md:px-24" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718685199/vedika-website/ripple/stakeholder-1_chaqsn.png" />
            </div>
          </div>
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='project-section-subheading'>Stakeholder <span className='text-ripple'>Focus group</span></div>
              <p className='mb-5'>A small Focus Group was conducted with people in the age group of 18-42 to generate insights and narrow down to a problem</p>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718686308/vedika-website/ripple/focus-grp_vvwezv.png" />
          </div>
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Stakeholder <span className='text-ripple'>Survey</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'>A survey was conducted to validate the secondary research and also check the user behaviour between age 18 to 65 years old. There were patterns in social media usage.</p>
              <img className="px-10 md:px-20" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718690443/vedika-website/ripple/social_media_cffq47.png" />
              <p className='my-5 font-semibold text-ripple text-center'>Average time spent on these platforms</p>
              <div className='flex flex-row flex-wrap'>
                <div className='w-full mb-10'>
                    <p className='mb-3'>There were various ill effects stated during this survey. Some of those were listed below: </p>
                    <div className='flex flex-row px-4'>
                      <div className='w-1/2'>
                        <p>• Depression</p>
                        <p>• Performace anxiety</p>
                        <p>• FOMO on Trends</p>
                        <p>• Jealousy/ Envy</p>
                        <p>• Tiredness</p>
                        <p>• Inferior Complex</p>
                        <p>• Suicidal Thoughts</p>
                        <p>• Unconsciously Open Instagram</p>
                      </div>
                      <div className='w-1/2'>
                        <p>• Attention Deficiency</p>
                        <p>• Addiction</p>
                        <p>• Content Overload</p>
                        <p>• Fluctuations in Thoughts</p>
                        <p>• Stress</p>
                        <p>• Negative Aspirations</p>
                        <p>• Continuous Distraction from Notifications</p>
                      </div>
                    </div>
                  </div>
                  <img className='w-full md:w-1/2' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718705647/vedika-website/ripple/Group_338_sy2okw.png"/>
                  <img className='w-full md:w-1/2' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718705647/vedika-website/ripple/Group_350_pnzmwr.png"/>
              </div>
            </div>
          </div>
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Survey <span className='text-ripple'>Observations</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>74.2%</span> accepted that social media overuse is bad for mental health</p>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>22.6%</span> parents monitor the phone usage for their children to reduce addiction</p>
              <p className='mb-5'><span className='text-ripple font-semibold text-xl'>75.3%</span> parents have noticed the ill effects of social media in their children</p>
              <p className='mb-5'>Almost 90% of the people who experienced the ill-effects of Social Media have tried to take steps to reduce it. <span className='text-ripple font-semibold'>A positive intent can be seen</span>.</p>
              <p className='mb-5'>The steps taken by the users were mostly the obvious steps suggested online. <span className='text-ripple font-semibold'>But a majority of them failed</span>. </p>
              <p className='mb-5'><span className='text-ripple font-semibold'>Users downloaded apps to defeat other apps</span>. Ultimately the phone is accessed in both cases, which could be a problem.</p>
              <p className='mb-5'>On further questioning the survey participants, it was found that Screen Timers <span className='text-ripple font-semibold'>added guilt</span> to the already existing Emotions with same outcome.</p>
              <p className='mb-5'>Those who are planning to take a step <span className='text-ripple font-semibold'>are confused</span> which method would be the best considering the wide array of options available online.</p>
              <p className='mb-5'><span className='text-ripple font-semibold'>Nobody was considering an option of Offline Self Help or Rehabilitation from Addiction</span> since they didn’t see this as a severe issue.</p>
            </div>
          </div>
        </div>

        {/* Personae */}
        <div className='project-section'>
          <div className='project-section-heading'>Personae</div>
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Persona <span className='text-ripple'>One</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <div className='flex flex-row mb-10'>
                <img className="h-24" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718861579/vedika-website/ripple/mayank-persona_yqqwto.png"/>
                <div className='px-10'>
                  <div className='project-section-small-heading text-ripple'>Mayank</div>
                  <p className='text-sm'>43, Co-founder, Aviato</p>
                  <div className='font-semibold'>“It’s really hard to control screen time of my children when I am away from them.”</div>
                </div>
              </div>
              <div className='flex flex-row flex-wrap'>
                <div className='w-full lg:w-1/2 lg:pr-4'>
                  <b>Pain points</b>
                  <p>• It’s hard to keep children away from mobile when I am not around.</p>
                  <p>• Children start throwing tantrum and becoming more impatient cause of continous use.</p>
                  <p>• Job demands working on mobile. Children see and start immitating.</p>
                </div>
                <div className='w-full lg:w-1/2 lg:pl-4'>
                  <b>Goals</b>
                  <p>• Reduce screen time of children.</p>
                  <p>• Taking care of children’s physical as well as mental health.</p>
                  <p>• Reduce curiosity towards social media and reduce it’s influence.</p>
                  <p>• Monitor their use of application and restrict use.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Persona <span className='text-ripple'>Two</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <div className='flex flex-row mb-10'>
                <img className="h-24" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718879991/vedika-website/ripple/Ellipse_22_z0jcdt.png"/>
                <div className='px-10'>
                  <div className='project-section-small-heading text-ripple'>Shriya</div>
                  <p className='text-sm'>19, Student, IIT Rourkela</p>
                  <div className='font-semibold'>“Social media is becoming a bad addiction for me”</div>
                </div>
              </div>
              <div className='flex flex-row flex-wrap'>
                <div className='w-full lg:w-1/2 lg:pr-4'>
                  <b>Pain points</b>
                  <p>• It’s hard to control the urge of using social media.</p>
                  <p>• Ending up spending more time than expected.</p>
                  <p>• Not able to focus on studying when notifications keeping pinging.</p>
                  <p>• One after another social media is spread even if you remove any.</p>
                </div>
                <div className='w-full lg:w-1/2 lg:pl-4'>
                  <b>Goals</b>
                  <p>• Reduce usage of social media and overall mobile.</p>
                  <p>• Increase ability to focus while working.</p>
                  <p>• Should be aware of time spent on different applications.</p>
                  <p>• To tackle with continuous distraction by notifications.</p>
                  <p>• Create meaningful connections.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Persona <span className='text-ripple'>Three</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <div className='flex flex-row mb-10'>
                <img className="h-24" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718879990/vedika-website/ripple/Ellipse_21_rkpg4c.png"/>
                <div className='px-10'>
                  <div className='project-section-small-heading text-ripple'>Arjun</div>
                  <p className='text-sm'>32, Product manager, Hublo</p>
                  <div className='font-semibold'>“I need stress free life without mobile”</div>
                </div>
              </div>
              <div className='flex flex-row flex-wrap'>
                <div className='w-full lg:w-1/2 lg:pr-4'>
                  <b>Pain points</b>
                  <p>• I have to use mobile for my work purpose, which strains my eyes and head after some time.</p>
                  <p>• Other than work, I get many notifications from social media platforms, which takes up lot of time.</p>
                  <p>• Since lockdown my use of mobile has also increased way too much and it’s affecting my mental and physical health.</p>
                </div>
                <div className='w-full lg:w-1/2 lg:pl-4'>
                  <b>Goals</b>
                  <p>• Optimise screen time as much possible.</p>
                  <p>• Reduce distractions while working.</p>
                  <p>• Reduce stress, anxiety, headache.</p>
                  <p>• Improve mental health and physical health.</p>
                  <p>• Reduce Notification count.</p>
                </div>
              </div>
            </div>
          </div>


          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>User <span className='text-ripple'>Journey</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
              <p>Following is a scenario for one of persona</p>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718879992/vedika-website/ripple/Ripple-storyboard-1_1_tzfvgw.png"/>
            </div>
          </div>
        </div>

        {/* Affinity Mapping */}
        <div className='project-section'>
          <div className='project-section-heading'>Affinity Mapping</div>
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'><span className='text-ripple'>Pain </span>points</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='ripple-keywords'>Excessive screen time creating imbalance in personal and professional life</p>
              <p className='ripple-keywords'>Inability to cut off influence of social media</p>
              <p className='ripple-keywords'>Inability to leave phones alone</p>
              <p className='ripple-keywords'>With every notification users check their phones</p>
              <p className='ripple-keywords'>Low attention span</p>
              <p className='ripple-keywords'>Even without notification, users check their looking for missed notifications</p>
              <p className='ripple-keywords'>Users have the intent but aren’t able to maintain healthy screen habits</p>
              <p className='ripple-keywords'>Emotional disconnect</p>
              <p className='ripple-keywords'>Lack of offline engagement with community</p>
              <p className='ripple-keywords'>Constant Distractions</p>
              <p className='ripple-keywords'>Deteriorating Physical and Mental Health</p>
              <p className='ripple-keywords'>Laxed attitude towards Addiction</p>
              <p className='ripple-keywords'>Lack of ecosystem to keep Phones away</p>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Needs</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='ripple-keywords'>Reduce over usage of social media and mobile as well</p>
              <p className='ripple-keywords'>Reduce interruption of notifications generated by applications</p>
              <p className='ripple-keywords'>Monitoring of application use and if possible content as well</p>
              <p className='ripple-keywords'>Creating distance between children and mobile or social media</p>
              <p className='ripple-keywords'>Need of breaking streak of continous usage of every application</p>
              <p className='ripple-keywords'>Monitor physical and mental health</p>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'><span className='text-ripple'>Goals </span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='ripple-keywords'>Spending more time Offline with real People</p>
              <p className='ripple-keywords'>Lower Cognitive Load from Phones</p>
              <p className='ripple-keywords'>A healthy lifestyle mentally and socially</p>
            </div>
          </div>
        </div>

        {/* Define problem */}
        <div className='project-section'>
          <div className='project-section-heading text-ripple'>Defining the Problem</div>
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'><span className='text-ripple'>Problem </span>statement</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='project-section-small-heading'>Designing a means to allow users to indulge in tech, rehabilitate from their addiction of social media by cutting them out of the notification dopamine reward cycle in order to lead a healthier lifestyle.</p>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'><span className='text-ripple'>Vision </span>statement</div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='project-section-small-heading'>A digital non-phone based system/ application that allows users to cut off notifications without being harsh on the users’ habits or behaviour that they adopt as a part of their lifestyle.</p>
            </div>
          </div>
        </div>

        {/* second diamond */}
        <div className='project-section-heading text-ripple'>Ideation and Implementation - Second Diamond</div>

        {/* Ideation */}
        <div className='project-section'>
          <div className='project-section-heading'>Ideation</div>
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>If Not Phones,<span className='text-ripple'> then What? </span></div>
              {/* <div className='text-sm italic mb-5 text-gray-400'>Medium blog "Rise of Wearables and future of Wearable technology" by Manasi Mishra</div> */}
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <p className='my-5'>What else are people carrying every time that might help in reducing screen time?</p>
              {/* <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718883825/vedika-website/ripple/smart-wearables_j31pkk.png" /> */}
              <img className="md:px-20 mb-5" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718883582/vedika-website/ripple/wearables_ytb2ir.png" />
            </div>
          </div>

          <div className='project-section-subheading mt-10 md:mt-20'>Brainstorming on <span className='text-ripple'> Ideas </span></div>
          <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1718882131/vedika-website/ripple/Ideation_cdsxdw.png'/>
        </div>

        {/* Redefining problem */}
        <div className='project-section'>
          <div className='project-section-heading'>Redefining problem</div>
          <div className='flex flex-row flex-wrap-reverse '>
            <div className='w-full md:w-1/2 md:pr-4 justify-center'>
              <img className="md:px-20" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718883185/vedika-website/ripple/image_66_rnwxrb.png" />
            </div>
            <div className='w-full md:w-1/2 md:pl-4 flex flex-col justify-center'>
              <p className='project-section-subheading pb-10'>Designing an Application to allow people using <span className='text-ripple'>Smart Wearables</span> from their addiction of social media by <span className='text-ripple'>cutting them out of the notification dopamine reward cycle</span> in order to lead a healthier lifestyle.</p>
            </div>
          </div>
        </div>

        {/* concept  */}
        <div className='project-section'>
          <div className='project-section-heading'>Concept</div>

          <div className='project-section-subheading'><span className='text-ripple'>Features </span></div>
          <p className='my-5'>Out of many ideas, some were finalised as shown below</p>
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718885320/vedika-website/ripple/features_ojjqq0.png" />

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Finalising<span className='text-ripple'> Device</span></div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap'>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718884467/vedika-website/ripple/users_mtlou0.png" />
              <p className='my-5'>Considering the pros and cons of each, and also the application areas of all the devices, smartwatches were decided to be the main application area.</p>
            </div>
          </div>

          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Final<span className='text-ripple'> Concept</span></div>
              <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718885822/vedika-website/ripple/smart-watch_cuhlvr.svg" />
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap font-semibold'>
              <p className='mb-5 font-semibold'>• Reminding users to not use phones through Vibrations.</p>
              <p className='mb-5 font-semibold'>• Giving out vibrations using Smartwatches to distract user.</p>
              <p className='mb-5 font-semibold'>• Controlling vibrations to make users feel calm after distraction.</p>
              <p className='mb-5 font-semibold'>• Using AI to study the user’s behaviour and health data.</p>
              <p className='mb-5 font-semibold'>• Making quick decisions if user is using social media a lot and sending feedback.</p>
              <p className='mb-5 font-semibold'>• Also checking current state of users and suggesting activities to do.</p>
              <p className='mb-5 font-semibold'>• Using calm images and animations to distract users from notifications.</p>
              <p className='mb-5 font-semibold'>• Studying unlock durations and predicting temptations using AI.</p>
              <p className='mb-5 font-semibold'>• App doesn’t require support from phone, hence keeping it out of loop.</p>
              <p className='mb-5 font-semibold'>• Using games to distract users in case of boredom.</p>
              <p className='mb-5 font-semibold'>• A parental mode could be provided for parents of teens .</p>
            </div>
          </div>
        </div>

        {/* Vibration and working */}
        <div className='project-section'>
          <div className='project-section-heading'>Vibration and It's working</div>
          <div className='flex flex-row flex-wrap'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Finding Vibration<span className='text-ripple'> Pattern</span></div>
              <div className='text-sm italic mb-5 text-gray-400'>Source: -Kelling, C., Pitaro, D., & Rantala, J. (2016, October). Good vibes: the impact of haptic patterns on stress levels. In Proceedings of the 20th International Academic Mindtrek Conference (pp. 130-136). </div>
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap font-semibold'>
              <img className='md:px-20 mb-5' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718901902/vedika-website/ripple/The-frequency-of-each-vibration-pattern-according-to-their-ratings-of-pleasantness_1_hytkwy.png" />
              <p className='mb-5'>The intensity reduces to calm the nerves and the frequency increases so that the brain doesn’t get distracted instantly. Also, the pattern follows the Fibonacci series which has been proven to be pleasing by research.</p>
              {/* <img className='md:px-10' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718901902/vedika-website/ripple/Group_356_kys0cz.png" />
              <p></p> */}
            </div>
          </div>
          <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
            <div className='w-full md:w-1/3 md:pr-4'>
              <div className='project-section-subheading'>Merging with<span className='text-ripple'> sound</span></div>
              {/* <div className='text-sm italic mb-5 text-gray-400'>Source: -Kelling, C., Pitaro, D., & Rantala, J. (2016, October). Good vibes: the impact of haptic patterns on stress levels. In Proceedings of the 20th International Academic Mindtrek Conference (pp. 130-136). </div> */}
            </div>
            <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap font-semibold'>
              <p className='mb-5'>The vibrations could also be merged with an amplifier to give out calming sounds corresponding to the vibrations produced by the motor. But this would limit to devices which have amplifiers/ speakers.</p>
              <p className='mb-5'>The servo motor inside Wearables can be controlled using a simple code executed through the product. The intensity of vibrations as well as the frequency can be controlled through it</p>
            </div>
          </div>
        </div>

        {/* Information Architecture */}
        <div className='project-section'>
          <div className='project-section-heading'>Information Architecture</div>
            <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718901227/vedika-website/ripple/Yuyj_Project_IA_s0tc3l.png" />
            <img className="mt-10" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718901415/vedika-website/ripple/IA_secqcy.svg" />
        </div>


        {/* <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095539/website/ripple/23_l0wnwh.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095543/website/ripple/24_nlkd5p.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095547/website/ripple/25_bfddk9.jpg" /> */}
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095521/website/ripple/45.5_qvepxm.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095520/website/ripple/48_q5tbja.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095520/website/ripple/49_wcgszj.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095544/website/ripple/50_ubwtiq.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095535/website/ripple/51_x0eeqn.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095549/website/ripple/53_q0vycm.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095536/website/ripple/55_lcmaky.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095520/website/ripple/56_zhbxtw.jpg" />
        <div className='my-20'><a className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default Ripple