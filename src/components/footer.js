'use client'

import React, { useState, useEffect } from 'react';
import '../app/globals.css'

const Footer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = storedCount ? Number(storedCount) : 0;
    setCount(initialCount + 1);
    localStorage.setItem("pageVisits", initialCount + 1);   
    }, []);

  let pathURL = '';

    if (typeof window !== "undefined"){
      pathURL = window.location.pathname;
    }
  return (
    <div className='px-4 md:px-40 py-10' style={pathURL == '/about'? {backgroundColor:'#020317', color:'#ffffff'} : {backgroundColor:'#ffffff'}}>
      <div className='font-semibold text-xl md:text-3xl py-6'>Got a design dilemma?</div>
      <div className='font-yeseva text-3xl md:text-4xl'>Don't worry, I specialize in <br />turning 'uh-oh' into 'ah-ha!' <br />Let's chat!</div>
      <div className='py-4 text-lg md:text-xl'>Contact me for full time job roles, freelance work, or just to say hello. <br /> I promise, I have zero inbox rule, so definitely you will hear back from me. </div>
      {pathURL == '/about' ? 
      <div className='flex flex-row justify-between py-4 md:py-10 flex-wrap px-4 md:px-0'>
        <a name="Github link" className='py-4 w-1/2 md:w-1/6' href="https://github.com/VedikaBasarkar" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1720172432/vedika-website/icons/mingcute_github-line_qgo6uh.svg' /></a>
        <a name="Instagram link" className='py-4 w-1/2 md:w-1/6' href="https://www.instagram.com/vedzzb/" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1720172427/vedika-website/icons/mdi_instagram_yuyses.svg' /></a>
        <a name="LinkedIn link" className='py-4 w-1/2 md:w-1/6' href="https://www.linkedin.com/in/vedbasarkar/" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1720172417/vedika-website/icons/formkit_linkedin_kjxhh3.svg' /></a>
        <a name="Behance link" className='py-4 w-1/2 md:w-1/6' href="https://www.behance.net/vedbasarkar" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1720172405/vedika-website/icons/bi_behance_e4t5f6.svg' /></a>
        <a name="Email ID" className='py-4 w-1/2 md:w-1/6' href="mailto:vedika.basarkar30@gmail.com" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1720172410/vedika-website/icons/cib_gmail_yig2dq.svg' /></a>
        <a name="Resume link" className='py-4 w-1/2 md:w-1/6' href="https://drive.google.com/file/d/1In48dW5_E7Z2crm7QtNC0X02UCI1Qi2W/view?usp=sharing" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1720172424/vedika-website/icons/heroicons-outline_document-download_iuaygx.svg' /></a>
      </div> :
      <div className='flex flex-row justify-between py-4 md:py-10 flex-wrap px-4 md:px-0'>
        <a name="Github link" className='py-4 w-1/2 md:w-1/6' href="https://github.com/VedikaBasarkar" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590200/vedika-website/icons/mingcute_github-line_kzee7i.svg' /></a>
        <a name="Instagram link" className='py-4 w-1/2 md:w-1/6' href="https://www.instagram.com/vedzzb/" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590192/vedika-website/icons/mdi_instagram_pnapyy.svg' /></a>
        <a name="LinkedIn link" className='py-4 w-1/2 md:w-1/6' href="https://www.linkedin.com/in/vedbasarkar/" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590177/vedika-website/icons/formkit_linkedin_c1chxo.svg' /></a>
        <a name="Behance link" className='py-4 w-1/2 md:w-1/6' href="https://www.behance.net/vedbasarkar" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590163/vedika-website/icons/bi_behance_dpxix8.svg' /></a>
        <a name="Email ID" className='py-4 w-1/2 md:w-1/6' href="mailto:vedika.basarkar30@gmail.com" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590165/vedika-website/icons/cib_gmail_b5rf6d.svg' /></a>
        <a name="Resume link" className='py-4 w-1/2 md:w-1/6' href="https://drive.google.com/file/d/1In48dW5_E7Z2crm7QtNC0X02UCI1Qi2W/view?usp=sharing" target='_blank'><img className="h-10 md:h-14 hover:-translate-y-1" src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1717590189/vedika-website/icons/heroicons-outline_document-download_xz74df.svg' /></a>
      </div>}
      <div className='opacity-0 text-xs'>Visit count{count}</div>
      {/* <div className='w-40 h-40'>
        <video autoPlay controls muted loop>
        <source src="https://res.cloudinary.com/db3h7h0pa/video/upload/v1717647264/vedika-website/EmojiMovie739337940_npkyck.mov" type="video/mov"/>
        </video>
      </div> */}
    </div>
  )
}

export default Footer
