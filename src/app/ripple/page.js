import React from 'react'
import '../../app/globals.css'  

const Ripple = () => {
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/1_jix322.jpg" />
        <div className='project-section'>
          <div className='project-section-heading'>Introduction</div>
              
              {/* information */}
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
                  <p className='mb-5'>UXplorer’22 organized by YUJ Designs, UXplorer’22 offers an excellent platform for students to exhibit their elegant, human-centred product ideas.</p>
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

        <div className='project-section'>
          <div className='project-section-heading'>Design Process</div>
          <p>To understand brief and to come up with solution in limited time, we preferred to follow double diamond method.</p>
          <p>But during <span className='text-ripple font-semibold'>finalising the concept, we again had to do research</span> so mostly we followed double diamond with little back and forth of domain research.</p>
          <img className='p-4 md:p-16' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718521663/vedika-website/ripple/double-diamond_ochbye.png"/>
        </div>
        
        <div className='project-section'>
          <div className='project-section-heading'>Research and Synthesis - First Diamond</div>
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
                  <img className='w-full md:w-1/2' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718690089/vedika-website/ripple/Group_338_ospfeh.png"/>
                  <img className='w-full md:w-1/2' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1718691885/vedika-website/ripple/reduce_time_am9ihd.png"/>
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

        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095539/website/ripple/23_l0wnwh.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095543/website/ripple/24_nlkd5p.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095547/website/ripple/25_bfddk9.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095535/website/ripple/29_kk0vwh.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/30_hhaqus.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095532/website/ripple/31_lvxrhc.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095529/website/ripple/32_hz5z6g.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095535/website/ripple/33_wfc4j2.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095529/website/ripple/34_qyvwtc.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095529/website/ripple/35_kf1yna.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095539/website/ripple/36_zsr289.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095544/website/ripple/37_itnayq.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095547/website/ripple/38_rg0mkk.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095540/website/ripple/39_fdiynr.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095549/website/ripple/40_upp7j8.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095530/website/ripple/41_ysqtij.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095551/website/ripple/42_xmyodj.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095543/website/ripple/43_mjhpwe.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095526/website/ripple/44_wjsllt.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095521/website/ripple/45.5_qvepxm.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095544/website/ripple/45_anasyg.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095532/website/ripple/46_xkczhc.jpg" />
        <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1662095532/website/ripple/47_cgrwvs.jpg" />
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