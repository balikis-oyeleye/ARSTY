
import React, { useRef } from 'react'
import ImageSlider from './ImageSlider'


const Carousel = ({ img1, img2, img3, img4, img5 }: carouselProp) => {

  const images = [img1, img2, img3, img4, img5]


  return (
    <div className='carousel h-[505px]'>
      <ImageSlider slides={images} />
    </div>
  )
}

export default Carousel