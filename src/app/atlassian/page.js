import React from 'react'
import '../../app/globals.css'
import ProgressBar from '@/components/progressBar'

function Atlassian() {
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
      <ProgressBar progressColor={'#0052CC'} />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716143043/vedika-website/project-covers/atlassian-cover_os3cw9.jpg" />
      
      <div className=''>
        {/* Main project content */}

          {/* Introduction */}
          {/* Info about internship */}
          <div className='project-section'>
          <div className='project-section-heading'>Introduction</div>
              
              {/* information */}
              <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-small-heading'>Role<br /><span className='text-atlassian'>Product Design Intern</span> </div>
                  <br/>
                  <div className='project-section-small-heading'>Date<br /><span className='text-atlassian'>May 2023 - July 2023</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p>I got an opportunity to work at <span className='text-atlassian font-semibold'>Atlassian</span>, as a <span className='text-atlassian font-semibold'>Product Design Intern</span>. It spanned 8 weeks (2 months).</p>
                  <p className='mb-5'>I was assigned to <span className='text-atlassian font-semibold'>Enterprise Data Center Design Team (Australia)</span> Ent journey to cloud in design - Enterprise Department and worked on product named <span className='text-atlassian font-semibold'>BITBUCKET</span>.</p>
                  <p className='mb-5'>During this internship, <br/>
                  <span className='text-atlassian font-semibold'>Vincent Feeney</span> (Design manager) was the manager <br />
                  <span className='text-atlassian font-semibold'>Rhys Hobbs</span> (Senior product designer) was the mentor <br />
                  <span className='text-atlassian font-semibold'>Nebin Biju</span> (Product designer) was the buddy.
                  </p>
                </div>
            
            {/* understand Bitbucket first */}
              <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                <div className='project-section-subheading'>Let’s understand first <span className='text-atlassian'>Bitbucket</span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                <p>
                Bitbucket is a <span className='text-atlassian font-semibold'>Git based code hosting and collaboration tool</span>, built for teams. It allows users to do basic Git operations such as <span className='text-atlassian font-semibold'>reviewing or merging code</span> while controlling read and write access to the code. It also provides integration with other Atlassian tools. Bitbucket's best-in-class <span className='text-atlassian font-semibold'>Jira and Trello integrations</span> are designed to bring the entire software team together to execute on a project. It provides one place for your team to collaborate on code from concept to Cloud, build quality code through automated testing, and deploy code with confidence.
                </p>
              </div>

              {/* responsibilities */}
              <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                <div className='project-section-subheading'>What were my <span className='text-atlassian'>responsibilities?</span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                <p>
                  During my internship at Atlassian, <br/>
                  • It was my responsibility <span className='text-atlassian font-semibold'>to work on the Dark mode of Bitbucket’s user interface.</span><br />
                  • I was working with <span className='text-atlassian font-semibold'>Atlassian’s Design System (ADS) Token</span> to assign proper color tokens to components.<br />
                  • <span className='text-atlassian font-semibold'>Understanding the developer’s limitations</span> to update dark mode.<br/>
                  • Completing Bitbucket’s dark mode along with testing.
                </p>
              </div>

            </div>
          </div>
          
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717396600/vedika-website/atlassian/Bitbucket-dark-team_x9zs5h.jpg" />

          {/* the design process */}
          <div className='project-section'>
          <div className='project-section-heading'>The Design Process</div>
          <div className='project-section-subheading'>Understanding current stage of <span className='text-atlassian'>Atlassian’s design process</span></div>

            <div className=' flex flex-row flex-wrap'>
              <div className='w-full md:w-1/2 md:pr-4'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717395724/vedika-website/atlassian/dp-atlassian_gnbwyc.jpg' />
              </div>
              <div className='w-full md:w-1/2 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Before I joined Atlassian, for the Bitbucket project, the <span className='text-atlassian font-semibold'>Wonder and Explore</span> phase were completed by AUI and design-token-system team.</p>
                <p className='mb-5'>I needed to understand Atlassian Design System first so I went through the existing documentations of <span className='text-atlassian font-semibold'>AUI and Atlaskit design system</span> for light and dark mode.</p>
                <p>My team was in <span className='text-atlassian font-semibold'>Impact and Make</span> phases, but for some design decisions, I had to go back to the Explore phase.</p>
              </div>
            </div>
          </div>

          {/* Timeline  */}
          <div className='project-section-heading'>Timeline of Internship</div>
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717423991/vedika-website/atlassian/timeline-atlassian_xjykba.png" />

          {/* Working with design */}
          <div className='project-section'>
          <div className='project-section-heading'>Working with Design </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>What are the tokens and How do these <span className='text-atlassian'>tokens work?</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Atlassian's design team created <span className='text-atlassian font-semibold'>Atlassian Design Tokens (ADT)</span> which now comes with both, light and dark color variants. You can find open documentation on <a name="Atlassian.design webiste" className='text-atlassian' href='https://atlassian.design/components/tokens/all-tokens'>Atlassian.design</a> website.</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717427728/vedika-website/atlassian/Screenshot_2024-06-03_at_20.44.58_bq9t0y.png' />
                <p className='my-5'>Same tokens were listed in Atlassian design system (ADS) pluging of Figma, which had hex values also mentioned in their description section. Following image can give more clarity on how it is works</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717498865/vedika-website/atlassian/ads_Plugin_ouag2h.png' />
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Understanding the token's <span className='text-atlassian'>naming conventions, values and light & dark hex color values</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>In documentation, <span className='text-atlassian font-semibold'>different states</span> of different components like links, buttons, etc. were <span className='text-atlassian font-semibold'>covered and had separate tokens</span> assigned.</p>
                <p className='mb-5'>Some hex values of tokens came with <span className='text-atlassian font-semibold'>transparency</span> and some had actual color code value. I had to take care of this transaparency parameter as <span className='text-atlassian font-semibold'>color does get affected by the background color</span>.</p>
                <p className='mb-5'>One important factor which was affected while assigning the tokens to dark theme that <span className='text-atlassian font-semibold'>all tokens do affect light mode as well</span>. So It is important to choose appropriate tokens by taking care of both light and dark modes</p>
              </div>
            </div>

            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Performing <span className='text-atlassian'>AA, AAA tests</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>There are some WCAG (Web Content Accessibility Guidelines) set of guidelines created by the World Wide Web Consortium (W3C) which we followed during the product design. These outlines how to make web content more accessible to people with disabilities.</p>
                <p className='mb-5'>I performed these <span className='text-atlassian font-semibold'>AA and AAA tests</span> for all components using figma plugins.</p>
                <p className='mb-5'>Level A is the minimum level of conformance, while level AAA is the highest level of conformance. These guidelines for color contrast fall under level AA conformance, which means that they are essential for ensuring accessibility</p>
              </div>
            </div>
          </div>

          {/* Working with engineer */}
          <div className='project-section'>
          <div className='project-section-heading'>Working with Engineer</div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>How were things setup from the <span className='text-atlassian'>development side</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Bitbucket's Development team worked on an automation tool which mapped the new design tokens <span className='text-atlassian font-semibold'>(DS token)</span> to old design tokens <span className='text-atlassian font-semibold'>(AUI tokens)</span>.</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717500472/vedika-website/atlassian/tokens-preview_szkvjv.png' />
                <p className='my-5'>From inspect element's inspector section, we were able to identify and understand these tokens. But at many places, automated mapping did not work as intended and were displaying old AUI tokens. Also some color values were hard coded and us designers needed to test and assign the new DS tokens.</p>
                <p className='my-5'>Engineer Carlos from Bitbucket team provided us a test environment with extra themes to identify issues with token mapping, which helped in identifying the list of components that needed to be worked on. Also it helped us in identifying the hard coded values.</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717500927/vedika-website/atlassian/test-env_abspe8.png' />
                <p className='my-5'>In the above image, you can see the components which used the old AUI tokens or hard coded values,<span className='text-atlassian font-semibold'> which did not turn yellow</span> and they needed new DS token to be assigned.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>How to share <span className='text-atlassian'>new assigned design tokens</span> with engineer</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>We gave access to Engineer Carlos to our figma file and created a section where the final work was showcased.</p>
                <p className='mb-5'>I came up with <span className='text-atlassian font-semibold'>Before and After approach</span>, which was helpful for the engineer to understand where exactly the tokens were needed to be assigned.</p>
                <div className='flex flex-row flex-wrap'>
                  <div className='w-full md:w-1/2'><p className='pr-6'>My mentor suggested the token naming conventions with all the required details, which was helpful to co-ordinate with the engineer.</p></div>
                  <img className='w-full md:w-1/2' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717503038/vedika-website/atlassian/token-box_bfvqgh.png' />
                </div>
              </div>
            </div>
          </div>

          {/* Components I worked on */}
          <div className='project-section'>
            <div className='project-section-heading'>Components and pages I worked on</div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>1. Page Headers</span></div>
                <i>Note: All Images used are not readable because details are not allowed to be disclosed as a part of NDA. These images are just for showcasing the work.</i>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717503539/vedika-website/atlassian/Page_headers_work_dsgl5h.png' />
              </div>

              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mt-10'><span className='text-atlassian'>2. Git command field</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717503957/vedika-website/atlassian/git-comman-section_nenb9v.png' />
              </div>

              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mt-10'><span className='text-atlassian'>3. Markdown preview</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717503958/vedika-website/atlassian/markdown-preview_c7bihl.png' />
              </div>

              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mt-10'><span className='text-atlassian'>4. Right hand side sheet (panel)</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717504452/vedika-website/atlassian/RHS-panel_wcdjpe.png' />
              </div>

              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mt-10'><span className='text-atlassian'>5. Left hand side sheet (Side navigation panel)</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717504370/vedika-website/atlassian/LHS-panel_hr5urx.png' />
              </div>

              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading mt-10'><span className='text-atlassian'>6. "Welcome to Bibucket" page</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center mt-10'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717504298/vedika-website/atlassian/welcome-page_fkgcl5.png' />
              </div>
            </div>
          </div>

          {/* Crit session */}
          <div className='project-section'>
            <div className='project-section-heading'>Critique session with DC team</div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Critque session</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>An interesting thing happened with me during the internship. My manager gave me a chance to present my designs in a critique session called <span className='text-atlassian font-semibold'>ACDC (A Crit for Data Center)</span>.</p>
                <p className='mb-5'>In the 5th week of my internship, I got a chance to present my design in front of the entire Ent-DC-Design team. I brought 2 components to the design critique session, left hand side sheet and right hand side sheet</p>
                <img className='mb-5' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717559678/vedika-website/atlassian/crit-session-components_nqerq1.png' />
                <p className='mb-5'>Issue with these components was that the colors used were not consistent across Atlassian’s other products like Jira, Confluence, etc. I came up with a few combinations which could be used throughout the Atlassian Suite. So I brought these designs to get inputs and critique from other designers.</p>
                <p className='mb-5'>I conducted this crit session on Figma where the team was welcoming and gave feedback through the comment sections. They had a total of 15 mins to observe the designs and provide feedback.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Feedback</span> from the session</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <img className='mb-5' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717566537/vedika-website/atlassian/Layer_1_rj4ngv.png' />
                <p className='mb-5'>Got feedback, inputs and ideas. This actually opened other perspectives, which was helpful in making a checklist of what the final designs should have.</p>
                <p className='mb-5'>The above image displays a few snippets of feedback I received. I was able to catagorise these feedback comments according to the priority queue.  </p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Finalizing <span className='text-atlassian'>design</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>With the help of my mentor, I went back to the design decision making documentation, which was made by the core design team. Also I went to the slack channel where all the queries regarding these tokens were discussed.</p>
                <p className='mb-5'>I got references and I went through documents. With the help of all the feedback, documentation, and mentor's guidance, the designs were finalized. I documented all the design decisions which I made and sent to the core design team. It would impact components across all the products but It's now uniform across all Atlassian suite.</p>
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717587760/vedika-website/atlassian/finalised-design_ildcjg.png"/>
              </div>
            </div>
          </div>

          {/* User interviews */}
          <div className='project-section'>
            <div className='project-section-heading'>User Interview</div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Shadowing</span> designer and being <span className='text-atlassian'>silent observer</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>During the seventh week of internship, I worked with 2 senior designers for a user interview. They identified users and scheduled online interviews with them. </p>
                <p className='mb-5'>This was for <span className='text-atlassian font-semibold'>user testing of dark mode</span> as well as <span className='text-atlassian font-semibold'>to understand the gaps or issues</span> if any. I was part of one of the interviews as a silent observer. Before going into the user interviews, we defined <span className='text-atlassian font-semibold'>a task, an activity and prepared a list of questions</span>. </p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Insights and <span className='text-atlassian'>affinity mapping</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Being a part of user interview, as a silent observer, I noted down all the observations in the format of <span className='text-atlassian font-semibold'>an empathy map</span>. I needed to catagorise the actions into what the user says, thinks and feels.</p>
                <p className='mb-5'>Along with me, the other two senior designers also noted down the points and we compiled them in a single FigJam file. After that we started to <span className='text-atlassian font-semibold'>categorise and complete the affinity mapping</span>. </p>
                <p className='mb-5'>Then we used <span className='text-atlassian font-semibold'>Imapct-efforts Matrix and MoSCoW analysis </span>to define priorities of new the features, functionalities or tasks.</p>
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div className='project-section'>
            <div className='project-section-heading'>Challenges</div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Confusion with<span className='text-atlassian'> tokens</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>In the beiginning, confusion between AUI token and DS tokens was creating problems. I did not use appropriate tokens but color applied were correct. My mentor helped me in clarifying this confusion.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Technical</span> issues with new variables</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>I found an issue with DS variables mapping on AUI variables. From inspect element, I found the issue with color variables not being as mentioned in the confluence document and Atlassian's figma plugin</p>
                <img className='mb-5' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717587930/vedika-website/atlassian/token-mapping-issue_a7tvjm.png" />
                <p className='mb-5'>With the help of the engineer we addressed and resolved this issue of mapping variables.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Leaving behind biases</span> for user interviews</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>I was a developer so I understood this product and how it should be used. In my opinion, this was my biggest bias. Forming questions or designing an activity were getting hampered because of my bias. My mentor and senior designers helped me in overcoming this bias. They opened up a perspective on how to look at things as a novice user and it helped me in framing questions.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Challenges for my <span className='text-atlassian'>designer colleagues</span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>My technical background and knowledge also helped other designers to understand and expolre how the inspect element can be used for design purpose. I walked them through some tricks with colors, psuedo element, accessibility module, etc. </p>
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717589809/vedika-website/atlassian/inspect-element_zgqxem.png" />
              </div>
            </div>
          </div>

          {/* Learnings */}
          <div className='project-section'>
            <div className='project-section-heading'>Learnings and Key Takeaways</div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>About<span className='text-atlassian'> Atlassian</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4'>
                <p className='mb-5 font-semibold'>• Learnt the five values of Atlassian.</p>
                <p className='mb-5 font-semibold'>• Learnt about different products of the Atlassian, their purpose and how it's interconnected.</p>
                <p className='mb-5 font-semibold'>• Atlassian's work culture, communities and hierarchy.</p>
                <p className='mb-5 font-semibold'>• Design Hub, Design principle, AUI and DS tokens, Atlassian Design System.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Thoughtful<span className='text-atlassian'> Takeaways</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5 font-semibold'>• Each designer has their own method of working.</p>
                <p className='mb-5 font-semibold'>• Play as a team - collaboration with not only designers but also engineers will help us succeed.</p>
                <p className='mb-5 font-semibold'>• No input or feedback is wrong, you have to decide what would you like to take along.</p>
                <p className='mb-5 font-semibold'>• Some features need content-first approach and some features need functionality-first approach.</p>
              </div>
            </div>
          </div>

          {/* Thanks to support system */}
          <div className='project-section flex flex-col w-full'>
            <div className='project-section-heading text-center'>Thanks to my <span className='text-atlassian'>support system</span> </div>
            <img className="px-4 md:px-40" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717587113/vedika-website/atlassian/support-system_bynrsc.png" />
          </div>

      </div>
      <div className='my-20'><a name="Home page of the website" className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default Atlassian