import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        className=" flex flex-row justify-start items-center my-8 mx-4 text-md font-medium text-white hover:text-green-400 "
        onClick={() => handleClick && handleClick()}
        key={item.name}
        to={item.to}
      >
        <item.icon className="w-8 h-8 mr-2 cursor-pointer" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#2b3729]">
        <a href="/">
          <img src={logo} alt="logo" className="w-full h-14 object-contain " />
        </a>
        <NavLinks />
      </div>

      {/* mobile sidebar */}
      <div className="absolute md:hidden  block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-8 h-8 text-green-400 mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenuAlt2
            className="w-8 h-8 text-green-400 mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#2b3729] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
				  mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14  object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
