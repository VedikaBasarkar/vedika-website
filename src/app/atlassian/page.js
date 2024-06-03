import React from 'react'
import '../../app/globals.css'  
import SideTabs from '@/components/sidetabs'

function Atlassian() {
  return (
    <div className='flex flex-col px-0 md:px-32'>
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716143043/vedika-website/project-covers/atlassian-cover_os3cw9.jpg" />
      
      <div className='flex flex-row'>
        {/* side tabs */}
        <div className='none md:block w-1/4 font-semibold side-tabs'>
          <div className='text-gray-400 my-4 font-normal'>Process</div>
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
          <div className='text-gray-400 my-4'>Project</div>

          {/* Introduction */}
          <div className='project-section' id='intro'>
            <div className='project-section-heading'>Introduction</div>
          
          </div>
          
          {/* understand bitbucket first */}
          <div className='project-section' id='role'>
            <div className='project-section-heading'>Let’s understand first Bitbucket </div>
            <p>
              Bitbucket is a Git based code hosting and collaboration tool, built for teams. It allows users to do basic Git operations such as reviewing or merging code while controlling read and write access to the code. It also provides integration with other Atlassian tools. Bitbucket's best-in-class Jira and Trello integrations are designed to bring the entire software team together to execute on a project. It provides one place for your team to collaborate on code from concept to Cloud, build quality code through automated testing, and deploy code with confidence.
            </p>
          </div>

        </div>

      </div>

      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211269/vedika-website/atlassian/Slide_16_9_-_33_snejpe.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211269/vedika-website/atlassian/Slide_16_9_-_34_lrwsus.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211269/vedika-website/atlassian/Slide_16_9_-_35_bt3tkq.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211270/vedika-website/atlassian/Slide_16_9_-_36_nhenzy.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211270/vedika-website/atlassian/Slide_16_9_-_37_kvlcfy.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211270/vedika-website/atlassian/Slide_16_9_-_38_z6knou.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211273/vedika-website/atlassian/Slide_16_9_-_40_ghhg9r.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716212359/vedika-website/atlassian/components_list_hmj07u.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211273/vedika-website/atlassian/Slide_16_9_-_46_as6p4a.jpg" />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1716211273/vedika-website/atlassian/Slide_16_9_-_47_qmbhte.jpg" />
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