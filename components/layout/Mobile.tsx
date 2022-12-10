import Link from "next/link";
import { BiX } from "react-icons/bi";
import { navLinks } from "../../data/navLinks";

const Mobile = ({ setToggle, toggle }: mobileProp) => {
  return (
    <aside
      className={`fixed bg-white top-0 h-full w-full duration-500 transition-all p-[30px] z-50 sm:hidden  ${
        !toggle ? "-left-full" : "left-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="font-stix font-bold">ARTSY.</h1>
        <BiX
          size={26}
          onClick={() => {
            setToggle(false);
          }}
          className="cursor-pointer"
        />
      </div>
      <nav className="mt-[30px]">
        <ul className="flex flex-col gap-y-4">
          {navLinks.map((link) => (
            <li
              className="text-grey text-lg font-roboto cursor-pointer hover:text-black font-medium"
              key={link.id}
              onClick={() => {
                setToggle((prev) => (prev = false));
              }}
            >
              <Link href={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Mobile;
