import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

const NavLinks = () => {
  return (
    <>
      <a to="About">About</a>
      <a to="Projects">Projects</a>
      <a to="Contact">Contact</a>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between p-6">
      <div className="flex flex-shrink-0 items-end font-bold select-none">
        <span className="text-red-500 text-3xl leading-[0.74]">ME</span>
        <span className="leading-[0.74]">dev</span>
      </div>
      <div className="m-8 items-center justify-center gap-4 text-xl hidden md:flex">
        <NavLinks />
        <FaLinkedin />
        <FaGithub />
      </div>
      <div className="md:hidden z-10">
        <button onClick={toggleNavbar}>
          {isOpen ? <FaX /> : <FaBarsStaggered />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-1 h-full w-full flex items-center flex-col justify-evenly text-5xl">
          <NavLinks />
          <FaLinkedin />
          <FaGithub />
        </div>
      )}
    </nav>
  );
};
export default Navbar;
