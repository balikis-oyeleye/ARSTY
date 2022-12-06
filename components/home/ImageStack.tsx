import Image from 'next/image'
import React from 'react'
import stack from '../../assets/images/stack.png'
import ellipse1 from '../../assets/images/Ellipse 70.png'
import ellipse2 from '../../assets/images/Ellipse 71.png'
import ellipse3 from '../../assets/images/Ellipse 72.png'

const ImageStack = () => {
  return (
    <div className='md:hidden grid place-items-center overflow-hidden'>
      <div className='relative'>
        <Image src={stack} />
        <img src={ellipse1.src} className='absolute -top-6 -right-4 -z-10' />
        <img src={ellipse2.src} className='absolute -bottom-6 -right-4 -z-10' />
        <img src={ellipse3.src} className='absolute -bottom-6 -left-4 -z-10' />
      </div>
    </div>
  )
}

export default ImageStack