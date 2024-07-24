'use client'

import React from 'react'
import '../app/globals.css'

const Photos = [
    {
        "id":1,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/a_90/v1721725168/vedika-website/photo-gallery/IMG_20200823_181619_nilcpt.jpg",
    },
    {
        "id":2,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725041/vedika-website/photo-gallery/20190216_163439_b5oqny.jpg"
    },
    {
        "id":3,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725042/vedika-website/photo-gallery/IMG_0039_a4owwc.jpg",
    },
    {
        "id":4,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725047/vedika-website/photo-gallery/IMG_0264_itig5j.jpg",
    },
    {
        "id":5,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725057/vedika-website/photo-gallery/IMG_0620_f8e04v.jpg",
    },
    {
        "id":6,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725053/vedika-website/photo-gallery/IMG_0290_whwdlu.jpg",
    },
    {
        "id":7,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725047/vedika-website/photo-gallery/IMG_0208_atkkzv.jpg",
    },
    {
        "id":8,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725041/vedika-website/photo-gallery/IMG_0029_veiimi.jpg",
    },
    {
        "id":9,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725043/vedika-website/photo-gallery/IMG_0073_sjjtkw.jpg",
    },
    {
        "id":10,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725046/vedika-website/photo-gallery/IMG_0186_uigzut.jpg",
    },
    {
        "id":11,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725046/vedika-website/photo-gallery/IMG_0192_svp6lh.jpg",
    },
    {
        "id":12,
        "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725055/vedika-website/photo-gallery/IMG_0383_gt6jic.jpg",
    },
]
const PhotoGallery = () => {
  
  return (
    <div className='px-4 md:px-40 py-10'>
        <div className='grid grid-cols-4 grid-flow-row gap-4'>
        {Photos.map(item => (
            <img key={item.id} className='' src={item.url} />
        ))
        }
        </div>
        
    </div>
  )
}

export default PhotoGallery
