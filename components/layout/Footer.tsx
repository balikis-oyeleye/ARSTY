import React from 'react'
import { footerLinks1, footerLinks2 } from '../../data/footerLinks'
import { BiEnvelope } from 'react-icons/bi'
import { GoLocation } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='container px-2 sm:px-0 mx-auto grid grid-cols-2 md:grid-cols-4 items-center'>
      <div className='self-start md:self-center'>
        <h1 className='text-dark text-3xl font-bold font-stix'>ARTSY.</h1>
      </div>
      <ul>
        {footerLinks1.map((link) => <li className='text-grey font-openSans' key={link}>{link}</li>)}
      </ul>
      <ul>
        {footerLinks2.map((link) => <li className='text-grey font-satoshi' key={link}>{link}</li>)}
      </ul>
      <div>
        <div className='flex items-center gap-1'>
          <BiEnvelope size={24} />
          <span className='text-sm text-grey font-satoshi'>artsystudios@gmail.com</span>
        </div>
        <div className='flex items-center gap-2'>
          <GoLocation size={24} />
          <span className='text-sm text-grey font-satoshi'>Lagos, Nigeria.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer