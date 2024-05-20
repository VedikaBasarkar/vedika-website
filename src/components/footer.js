import React from 'react'
import '../app/globals.css'

const Footer = () => {
  return (
    <div className='px-4 md:px-40 py-10'>
      <div className='font-yeseva text-3xl py-6'>Got a design dilemma?</div>
      <div className='font-yeseva text-4xl'>Don't worry, I specialize in <br />turning 'uh-oh' into 'ah-ha!' <br />Let's chat!</div>
      <div className='py-4 text-xl'>Contact me full time job roles, freelance work, or just to say hello <br /> I promise, I have zero inbox </div>
      <div className='flex justify-between py-10'>
        <a href="https://github.com/VedikaBasarkar" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1716133642/vedika-website/icons/mingcute_github-line_wevps1.svg' /></a>
        <a href="https://www.instagram.com/vedzzb/" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1716133642/vedika-website/icons/mdi_instagram_ayvxn2.svg' /></a>
        <a href="https://www.linkedin.com/in/vedbasarkar/" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1716133641/vedika-website/icons/formkit_linkedin_ciwuo2.svg' /></a>
        <a href="https://www.behance.net/vedbasarkar" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1716133641/vedika-website/icons/bi_behance_xuowh2.svg' /></a>
        <a href="https://github.com/VedikaBasarkar" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1716133641/vedika-website/icons/cib_gmail_oqmfuy.svg' /></a>
        <a href="https://www.behance.net/vedbasarkar" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1716134477/vedika-website/icons/heroicons-outline_document-download_puxdgb.svg' /></a>
      </div>
    </div>
  )
}

export default Footer
