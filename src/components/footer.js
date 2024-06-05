import React from 'react'
import '../app/globals.css'

const Footer = () => {
  return (
    <div className='px-4 md:px-40 py-10'>
      <div className='font-yeseva text-3xl py-6'>Got a design dilemma?</div>
      <div className='font-yeseva text-4xl'>Don't worry, I specialize in <br />turning 'uh-oh' into 'ah-ha!' <br />Let's chat!</div>
      <div className='py-4 text-xl'>Contact me for full time job roles, freelance work, or just to say hello. <br /> I promise, I have zero inbox rule, so definitely you will hear back from me. </div>
      <div className='flex justify-between py-10'>
        <a href="https://github.com/VedikaBasarkar" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590200/vedika-website/icons/mingcute_github-line_kzee7i.svg' /></a>
        <a href="https://www.instagram.com/vedzzb/" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590192/vedika-website/icons/mdi_instagram_pnapyy.svg' /></a>
        <a href="https://www.linkedin.com/in/vedbasarkar/" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590177/vedika-website/icons/formkit_linkedin_c1chxo.svg' /></a>
        <a href="https://www.behance.net/vedbasarkar" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590163/vedika-website/icons/bi_behance_dpxix8.svg' /></a>
        <a href="mailto:vedika.basarkar30@gmail.com" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590165/vedika-website/icons/cib_gmail_b5rf6d.svg' /></a>
        <a href="https://drive.google.com/file/d/17hPQoa3uzykHMAh-Tan5sFsk-0R3gHnN/view?usp=sharing" target='_blank'><img className="h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590189/vedika-website/icons/heroicons-outline_document-download_xz74df.svg' /></a>
      </div>
    </div>
  )
}

export default Footer
