import React from "react";
import { navLinks } from "../../data/navLinks";
import { BiMenu } from "react-icons/bi";
import Search from "../../assets/svg/search.svg";
import Cart from "../../assets/svg/cart.svg";
import Notification from "../../assets/svg/bell.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const Header = ({ setToggle }: headerProp) => {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.cartItems);

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
            <li
              key={link.id}
              className={`font-satoshi hover:underline cursor-pointer ${
                router.pathname == link.to ? "underline" : ""
              }`}
            >
              <Link href={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-x-4 mr-1">
        <img src={Search.src} alt="search" className="w-[24px]" />
        <div className="relative">
          <Link href="/marketplace/cart" className="relative">
            <img
              src={Cart.src}
              alt="cart"
              className="w-[24px] cursor-pointer"
            />
          </Link>
          <div className="absolute text-white bg-[#3247e2] text-[11px] rounded-full py-1 px-2 -top-3 -right-2 font-black">
            {cart.length}
          </div>
        </div>
        <img
          src={Notification.src}
          alt="notification"
          className="w-[24px] hidden sm:block"
        />
      </div>
    </header>
  );
};

export default Header;
