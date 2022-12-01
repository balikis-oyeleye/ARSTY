import React from 'react'
import { navLinks } from '../../data/navLinks'
import { BiSearch } from 'react-icons/bi'
import { TbShoppingCart } from 'react-icons/tb'
import { IoNotificationsOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <header className='container mx-auto flex items-center justify-between mt-[30px]'>
      <div>
        <h1 className='font-stix font-bold font-[32px]leading-[90px] text-dark'>ARTSY.</h1>
      </div>
      <nav>
        <ul className='flex gap-x-[47px]'>
          {navLinks.map((link) => <li key={link}>{link}</li>)}
        </ul>
      </nav>
      <div className='flex gap-x-4'>
        <BiSearch />
        <TbShoppingCart />
        <IoNotificationsOutline />
      </div>
    </header>
  )
}

export default Header