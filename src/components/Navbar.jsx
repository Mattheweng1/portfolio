import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-8 mb-16 flex items-center justify-between">
      <NavLink
        to={"/"}
        className="flex flex-shrink-0 items-end font-bold select-none z-10"
      >
        <span className="text-red-500 text-3xl leading-[0.74]">ME</span>
        <span className="leading-[0.74]">dev</span>
      </NavLink>
      <div className="items-center justify-center gap-4 text-xl hidden md:flex">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <FaLinkedin />
        <FaGithub />
      </div>
      <div className="md:hidden z-10">
        <button onClick={toggleNavbar}>
          {isOpen ? <FaX /> : <FaBarsStaggered />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 z-1 h-full w-full flex items-center flex-col justify-evenly text-5xl">
          <NavLink to="/about" onClick={toggleNavbar}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={toggleNavbar}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={toggleNavbar}>
            Contact
          </NavLink>
          <FaLinkedin />
          <FaGithub />
        </div>
      )}
    </nav>
  );
};
export default Navbar;
