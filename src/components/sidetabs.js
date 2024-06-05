import React from 'react'

function SideTabs() {
  return (
    <div>
        <div className='flex flex-row'>
        {/* atlassian side tabs */}
          {/* <div className='none md:block w-1/4 font-semibold side-tabs'>
            <div className='text-gray-400 my-4 font-normal'>Process</div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
          </div> */}

        {/* Ripple */}
        {/* <div className='flex flex-row'> */}
          {/* side tabs */}
          {/* <div className='none md:block w-1/4 font-semibold side-tabs'>
            <div className='text-gray-400 my-4 font-bold'>Process</div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>What's happening currently?</a></div>
            <div className='text-gray-400 my-1 font-normal'>Discover</div>
            <div className='side-tab-element'><a href='#intro'>Competitive analysis</a></div>
            <div className='side-tab-element'><a href='#role'>Potential Opportunities</a></div>
            <div className='side-tab-element'><a href='#intro'>Interviews</a></div>
            <div className='side-tab-element'><a href='#role'>Focus group study</a></div>
            <div className='side-tab-element'><a href='#intro'>Personae</a></div>
            <div className='side-tab-element'><a href='#role'>Scenario</a></div>
            <div className='text-gray-400 my-1 font-normal'>Define</div>
            <div className='side-tab-element'><a href='#role'>Defining problem</a></div>
            <div className='side-tab-element'><a href='#role'>Ideations</a></div>
            <div className='side-tab-element'><a href='#role'>Device Selection</a></div>
            <div className='side-tab-element'><a href='#role'>Final Concept</a></div>
            <div className='side-tab-element'><a href='#role'>Driving principle</a></div>
            <div className='side-tab-element'><a href='#role'>Vibration Patterns</a></div>
            <div className='side-tab-element'><a href='#role'>Information Architecture</a></div>
            <div className='side-tab-element'><a href='#role'>Low Fidelity Designs</a></div>
            <div className='side-tab-element'><a href='#role'>Visual Elements</a></div>
            <div className='side-tab-element'><a href='#role'>High Fidelity Designs</a></div>
            <div className='side-tab-element'><a href='#role'>Scenario</a></div>
            <div className='side-tab-element'><a href='#role'>Challenges</a></div>
          </div> */}

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
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
            <div className='side-tab-element'><a href='#intro'>Introduction</a></div>
            <div className='side-tab-element'><a href='#role'>Role and Responsibility</a></div>
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