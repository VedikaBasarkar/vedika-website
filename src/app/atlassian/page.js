import React from 'react'
import '../../app/globals.css'  
import SideTabs from '@/components/sidetabs'

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
                  <p>I got am opportunity to work at <span className='text-atlassian font-semibold'>Atlassian</span>, as a <span className='text-atlassian font-semibold'>Product Design Intern</span>. internship was of 8 weeks (2 months) internship.</p>
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
                <p className='mb-5'>One important that was affect while assigning the tokens to dark theme, <span className='text-atlassian font-semibold'>All tokens do affect light mode as well</span>. So It is important to choose appropriate tokens by taking care of both, light and dark modes</p>
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

      </div>

      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211272/vedika-website/atlassian/Slide_16_9_-_49_yz8qzo.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211274/vedika-website/atlassian/Slide_16_9_-_50_s9srqt.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211275/vedika-website/atlassian/Slide_16_9_-_51_slb1sg.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211274/vedika-website/atlassian/Slide_16_9_-_53_zwo9xu.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211277/vedika-website/atlassian/Slide_16_9_-_54_ndei2q.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716212059/vedika-website/atlassian/key_learnings_qjgune.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211295/vedika-website/atlassian/Slide_16_9_-_61_xazp2t.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211295/vedika-website/atlassian/Slide_16_9_-_62_zystk2.jpg" />
      <a className="text-xl my-20" href="/">&#60;&#60; Back to home page</a>
    </div>
  )
}
export default Atlassian