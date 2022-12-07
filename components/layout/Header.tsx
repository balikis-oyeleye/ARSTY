import React from "react";
import { navLinks } from "../../data/navLinks";
import { BiMenu } from "react-icons/bi";
import Search from '../../assets/svg/search.svg'
import Cart from '../../assets/svg/cart.svg'
import Notification from '../../assets/svg/bell.svg'

const Header = ({ setToggle }: headerProp) => {

  return (
    <header className="container mx-auto flex items-center justify-between mt-3 px-2 xs:px-0">
      <BiMenu
        size={28}
        className="cursor-pointer block sm:hidden"
        onClick={() => {
          setToggle(true);
        }}
      />
      <div>
        <h1 className="font-stix font-bold text-2xl sm:text-3xl text-dark">
          ARTSY.
        </h1>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex gap-x-[36px] lg:gap-x-[47px]">
          {navLinks.map((link) => (
            <li key={link} className='font-satoshi'>{link}</li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-4">
        <img src={Search.src} alt="search" className="w-[24px]" />
        <img src={Cart.src} alt="cart" className="w-[24px]" />
        <img src={Notification.src} alt="notification" className="w-[24px]" />
      </div>
    </header>

  );
};

export default Header;