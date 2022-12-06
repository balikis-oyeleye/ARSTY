import Image from 'next/image'
import React from 'react'
import creator1 from '../../assets/images/Ellipse 14.png'
import creator2 from '../../assets/images/Ellipse 15.png'
import creator3 from '../../assets/images/Ellipse 16.png'
import creator4 from '../../assets/images/Ellipse 17.png'
import creator5 from '../../assets/images/Ellipse 18.png'

const Creators = () => {
  return (
    <div className='flex w-28'>
      <div className='-mr-5'>
        <Image src={creator1} />
      </div>
      <div className='-mr-5'>
        <Image src={creator2} />
      </div>
      <div className='-mr-5'>
        <Image src={creator3} />
      </div>
      <div className='-mr-5'>
        <Image src={creator4} />
      </div>
      <div className='-mr-5'>
        <Image src={creator5} />
      </div>
    </div>
  )
}

export default Creators