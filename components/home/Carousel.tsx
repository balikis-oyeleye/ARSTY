
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Carousel = ({ img1, img2, img3, img4, img5 }: carouselProp) => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(null)

  const images = [img1, img2, img3, img4, img5]

  const slideRight = () => {
    setCurrent(current + 1)
    if (current === images.length - 1) {
      setCurrent(0)
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     slideRight()
  //   }, 1500);
  // })


  return (
    <>
      <div className='h-[505px] relative w-[358px] overflow-hidden transition-all duration-1000'>
        {images.map((image, index) => {
          return (
            <div key={index} className={`overflow-x-hidden duration-1000 transition-all absolute ${index === current ? "" : "-translate-x-full"}`}>
              <img src={image.src} alt="carousel-img" className='' />
            </div>
          )
        })}
      </div>
      <div className='cursor-pointer' onClick={slideRight}>next</div>
    </>
  )
}

export default Carousel