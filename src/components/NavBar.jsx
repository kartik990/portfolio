import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-[60px] flex justify-between p-4 items-center z-20 bg-[#0000007d] text-gray-300 `}
    >
      {/* logo */}
      <Link to="home" smooth={true} duration={500}>
        <div
          className={`w-[px] text-xl font-thin text-[#FB2576] cursor-pointer`}
        >
          <span className="text-3xl font-bold ">K</span>artik
          <span className="text-3xl font-bold">R</span>ai
        </div>
      </Link>

      {/* list */}
      <ul className="hidden md:flex">
        <li className={`hover:text-[#fb2576] hover:scale-125 duration-200`}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={`hover:text-[#fb2576] hover:scale-125 duration-200`}>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className={`hover:text-[#fb2576] hover:scale-125 duration-200`}>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className={`hover:text-[#fb2576] hover:scale-125 duration-200`}>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className={`hover:text-[#fb2576] hover:scale-125 duration-200`}>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile list */}
      <ul
        className={
          nav
            ? `absolute top-0 left-0 w-full h-screen flex flex-col justify-around items-center bg-[#000000] md:hidden`
            : "hidden"
        }
      >
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-4 text-4xl">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* side bar */}
      <div className={`hidden md:flex fixed top-[35%] left-0 `}>
        <ul>
          <li className="w-[160px] h-[50px] ml-[-110px] hover:ml-[0px] duration-300">
            <a
              href="https://www.linkedin.com/in/kartikrai007/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex justify-between items-center">
                Linkedin
                <FaLinkedin size={30} />
              </div>
            </a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-110px] hover:ml-[0px] duration-300">
            <a
              href="https://github.com/kartik990"
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex justify-between items-center">
                <span>GitHub</span>
                <FaGithub size={30} />
              </div>
            </a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-110px] hover:ml-[0px] duration-300">
            <a
              href="https://leetcode.com/kartik____r/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex justify-between items-center">
                <span>LeetCode</span>
                <SiLeetcode size={30} />
              </div>
            </a>
          </li>
          <li className="w-[160px] h-[60px]">
            <a href="/">
              <div className="flex justify-between items-center"></div>
            </a>
          </li>
          <li className="w-[160px] h-[60px]">
            <a href="/">
              <div className="flex justify-between items-center"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
