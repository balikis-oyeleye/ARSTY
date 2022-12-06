import Image from 'next/image'
import React from 'react'
import bg from '../../assets/images/Rectangle 91.png'

const Upcoming = () => {
  return (
    <section className='upcoming md:h-[780px] -z-10 mt-32 h-[336px]'>
      <div className='upcoming-container container mx-auto px-2 xs:px-0 h-full grid place-items-center'>
        <div className='relative'>
          <Image src={bg} />
          <div className='absolute top-0 w-full bottom-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores vel possimus sapiente nulla, similique iure doloremque commodi vero accusantium. Tempora sit quae, sunt incidunt exercitationem error ipsum officia iusto aut!
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upcoming