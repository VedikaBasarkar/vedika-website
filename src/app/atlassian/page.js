import React from 'react'
import '../../app/globals.css'  

function Atlassian() {
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
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
                  <p>I got an opportunity to work at <span className='text-atlassian font-semibold'>Atlassian</span>, as a <span className='text-atlassian font-semibold'>Product Design Intern</span>. internship was of 8 weeks (2 months) internship.</p>
                  <p className='mb-5'>I was assigned to <span className='text-atlassian font-semibold'>Enterprise Data Center Design Team (Australia)</span> Ent journey to cloud in design - Enterprise Department and worked on product named <span className='text-atlassian font-semibold'>BITBUCKET</span>.</p>
                  <p className='mb-5'>During this internship, <br/>
                  <span className='text-atlassian font-semibold'>Vincent Feeney</span> (Design manager) was manager <br />
                  <span className='text-atlassian font-semibold'>Rhys Hobbs</span> (Senior product designer) was mentor <br />
                  <span className='text-atlassian font-semibold'>Nebin Biju</span> (Product designer) was buddy.
                  </p>
                </div>
            
            {/* understand bitbucket first */}
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
                  • I was responsible <span className='text-atlassian font-semibold'>to work on the Dark mode of Bitbucket’s user interface.</span><br />
                  • I was working with <span className='text-atlassian font-semibold'>Atlassian’s Design System (ADS) Token</span> to assign proper color tokens to components.<br />
                  • <span className='text-atlassian font-semibold'>Understanding developer’s limitations</span> to update dark mode.<br/>
                  • Completing whole Bitbucket’s dark mode along with testing.
                </p>
              </div>

            </div>
          </div>
          
          <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717396600/vedika-website/atlassian/bitbucket-dark-team_x9zs5h.jpg" />

          {/* the design process */}
          <div className='project-section'>
          <div className='project-section-heading'>The Design Process</div>
          <div className='project-section-subheading'>Understanding current stage of <span className='text-atlassian'>Atlassian’s design process</span></div>

            <div className=' flex flex-row flex-wrap'>
              <div className='w-full md:w-1/2 md:pr-4'>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717395724/vedika-website/atlassian/dp-atlassian_gnbwyc.jpg' />
              </div>
              <div className='w-full md:w-1/2 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Before me joining Atlassian, For the Bitbucket project, the <span className='text-atlassian font-semibold'>Wonder and Explore</span> phase were completed by AUI and design-token-system team.</p>
                <p className='mb-5'>I needed to understand Atlassian Design System first so I went through existing documentations of <span className='text-atlassian font-semibold'>AUI and Atlaskit design system</span> for light and dark mode.</p>
                <p>My team was in <span className='text-atlassian font-semibold'>Impact and Make</span> phase, but for some design decisions, I had to go back Explore phase.</p>
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
                <p className='mb-5'>Atlassian design team created <span className='text-atlassian font-semibold'>Atlassian Design Tokens (ADT)</span> which now comes with both, light and dark color variants. You can find open documentation on <a className='text-atlassian' href='https://atlassian.design/components/tokens/all-tokens'>Atlassian.design</a> website.</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717427728/vedika-website/atlassian/Screenshot_2024-06-03_at_20.44.58_bq9t0y.png' />
                <p className='my-5'>Same tokens were listed in Atlassian design system (ADS) pluging of Figma, which had hex values also mention in their description section. Following image can give more clarity on how it is shows</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717498865/vedika-website/atlassian/ads_Plugin_ouag2h.png' />
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Understanding the token's <span className='text-atlassian'>naming conventions, values and light & dark hex color values</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>In documentation, <span className='text-atlassian font-semibold'>different states</span> of different components like links, buttons, etc. were <span className='text-atlassian font-semibold'>covered and had separate tokens</span> assigned.</p>
                <p className='mb-5'>Some hex values of tokens came with the <span className='text-atlassian font-semibold'>transparency</span> and some had actual color code value. I had to take care of this transaparency parameter as, <span className='text-atlassian font-semibold'>color does get affected by the background color</span>.</p>
                <p className='mb-5'>One important that was affect while assigning the tokens to dark theme, <span className='text-atlassian font-semibold'>All tokens do affect light mode as well</span>. So It is important to choose appropriate tokens by taking care of both, light and dark modes</p>
              </div>
            </div>

            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Performing <span className='text-atlassian'>AA, AAA tests</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>There are some WCAG (Web Content Accessibility Guidelines) set of guidelines created by the World Wide Web Consortium (W3C) that we followed during the product design. These outlines how to make web content more accessible to people with disabilities.</p>
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
                <div className='project-section-subheading'>How were thing from the <span className='text-atlassian'>development side</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Bitbucket's Development team worked on some automation to map the new design tokens <span className='text-atlassian font-semibold'>DS token</span> on old design tokens, which were <span className='text-atlassian font-semibold'>AUI tokens</span>.</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717500472/vedika-website/atlassian/tokens-preview_szkvjv.png' />
                <p className='my-5'>From inspect element's inspector section, we were able to identify and understand these tokens. But at many places, automated mapping did not work and were using old AUI tokens. Also some color values were hard coded, and we designers needed to test and assign them new DS tokens.</p>
                <p className='my-5'>Engineer Carlos from bitbucket team provided us test environment with extra themes to identify issues with token mapping, which helped us to identify the list of components that needed to work work on, also it helped us to identify hard coded values.</p>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717500927/vedika-website/atlassian/test-env_abspe8.png' />
                <p className='my-5'>In Above image, Components which used old AUI tokens or hard coded values,<span className='text-atlassian font-semibold'> did not turn yellow</span>, and needed new DS token</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>How to share <span className='text-atlassian'>new assigned design tokens</span> with engineer</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>We gave access to Engineer Carlos to our figma file and created section where final work was showcased.</p>
                <p className='mb-5'>I came up with <span className='text-atlassian font-semibold'>Before and After approach</span>, which will be helpful for engineer to understand where exactly the work is needed.</p>
                <div className='flex flex-row'>
                  <div className='w-1/2'><p className='pr-6'>Mentor, Rhys suggested the token naming conventions with all required details, which was helful to co-ordinate with engineer.</p></div>
                  <img className='w-1/2' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717503038/vedika-website/atlassian/token-box_bfvqgh.png' />
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
                <i>Note: All Images used are not readable cause details were not allowed to disclose as a part of NDA. These images are just for showcase purpose to give work idea.</i>
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
                <div className='project-section-subheading mt-10'><span className='text-atlassian'>5. Left hand side sheet (Side navigation panle)</span></div>
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
                <p className='mb-5'>One interesting thing happened with me. My manager gave me chance to present my designs in critique session called <span className='text-atlassian font-semibold'>The ACDC (A Crit for Data Center)</span>.</p>
                <p className='mb-5'>In 5th week of my internship, I got chance to present design in front of the entire Ent-DC-Design team. I brought 2 components to design critique session, Left hand sidesheet and right hand sidesheet</p>
                <img className='mb-5' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717559678/vedika-website/atlassian/crit-session-components_nqerq1.png' />
                <p className='mb-5'>Issue with these components was, colors used were not consistent across Atlassian’s products, like Jira, Confluence, etc. I came up with some combinations which can be used throughout Atlassian Suite. So brought these designs to get inputs and critique from other designers.</p>
                <p className='mb-5'>I conducted this crit session on Figma where team was welcomed to give feedback through comments sections. They had total 15 mins to observe the designs and write feedback.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Feedbacks</span> from the session</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <img className='mb-5' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717566537/vedika-website/atlassian/Layer_1_rj4ngv.png' />
                <p className='mb-5'>Got some feedbacks, inputs and some opinions. This actually opened all possible perspectives, which was helpful to make checklist of what final designs should have.</p>
                <p className='mb-5'>Above image shows some of all feedbacks. I was able to catagories these all comments. </p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Finalizing <span className='text-atlassian'>design</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>I categorised all inputs into sections. With the help of mentor, I went back to design decision making documentation, which was made by core design team. Also I went to slack channel where all queries regarding these tokens were discussed.</p>
                <p className='mb-5'>I got references and I went through documents. With the help of all feedbacks, documentation, and mentor's guidance, the designs were finalized. I documented all design decisions which I made and sent to core design team. It will impact component across all products but It's now uniform across all Atlassian</p>
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
                <p className='mb-5'>During second last week of internship, I worked with 2 senior designers for user interview. They found users and scheduled online interview with them. </p>
                <p className='mb-5'>This was <span className='text-atlassian font-semibold'>user testing for dark mode</span> of product as well as <span className='text-atlassian font-semibold'>to understand the gaps or issues</span> if any. I was part of one of the interviews as silent observer. Before going into user interviews, we defined <span className='text-atlassian font-semibold'>a task, an activity and prepared list of questions</span>. </p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Insights and <span className='text-atlassian'>affinity mapping</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Being part of user interview, as a Silent observer, I noted down all observations in format of <span className='text-atlassian font-semibold'>empathy map</span>. I needed to catagories actions, what user says, thinks and feels.</p>
                <p className='mb-5'>Along with me, other two senior designers also noted points and we gathered them up in one FigJam file. After that we started, to <span className='text-atlassian font-semibold'>categories and completed affinity mapping</span>. </p>
                <p className='mb-5'>Then we used <span className='text-atlassian font-semibold'>Imapct-efforts Matrix and MoSCoW analysis </span>to define priorities of new features, functionality or tasks.</p>
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
                <p className='mb-5'>In the beiginning, confusion between AUI token and DS tokens was creating problems. In the starting I did not used appropriate tokens but color wise those were proper. Mentor Rhys helped me with clarifying this confusion.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Technical</span> issues with new variables</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>I found one issue with DS variable mapping on AUI variables. From inspect element, I found issue with color variables not being right as mentioned in confluence document and Atlassian's figma plugin</p>
                <img className='mb-5' src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717587930/vedika-website/atlassian/token-mapping-issue_a7tvjm.png" />
                <p className='mb-5'>With the help of engineer Carlos, we addressed and resolved this issue of mapping variables.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'><span className='text-atlassian'>Leaving behind biases</span> for user interviews</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>I was a developer so I understand the product and how it should be used. And in my opinion, this was my biggest bias. Forming questions or designing an activity were getting hampered cause of my biases. Mentor and senior designers helped me to get through this problem. They opened perspective to how to look at things. Considering any user as novice in using product and then framing questions can help. Also step by step we can update questions' experty level, that way we can get answers we were looking for.</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Challenges for my <span className='text-atlassian'>designer colleagues</span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>My little technical background and knowledge helped other designers to understan and expolre how inspect element can be used for design purpose. I walked them through some tricks with colors, psuedo element, etc </p>
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
                <p className='mb-5 font-semibold'>• Learnt five values of Atlassian.</p>
                <p className='mb-5 font-semibold'>• Learnt about different products of Atlassian, their purpose and how it's interconnected.</p>
                <p className='mb-5 font-semibold'>• Atlassian's work culture, communities and heirarchy</p>
                <p className='mb-5 font-semibold'>• Design Hub, Design principle, AUI and DS tokens, Atlassian Design System</p>
              </div>
            </div>
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Thoughtful<span className='text-atlassian'> Takeaways</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5 font-semibold'>• Each designer has their own method of working.</p>
                <p className='mb-5 font-semibold'>• Play as a team - collaboration with not only designers but engineers can help us succeed.</p>
                <p className='mb-5 font-semibold'>• No input or feedback is wrong, you have to decide what would you like to take along.</p>
                <p className='mb-5 font-semibold'>• Some features need content first approach and some features need functionality first approach.</p>
              </div>
            </div>
          </div>

          {/* Thanks to support system */}
          <div className='project-section flex flex-col w-full'>
            <div className='project-section-heading text-center'>Thanks to my <span className='text-atlassian'>support system</span> </div>
            <img className="px-4 md:px-40" src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1717587113/vedika-website/atlassian/support-system_bynrsc.png" />
          </div>

      </div>

      <div className='my-20'><a className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default Atlassian