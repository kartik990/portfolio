import React from "react";
import { GiMailbox } from "react-icons/gi";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div name="contact" className="w-full">
      <div className="max-w-[1000px] mx-auto pb-10">
        <div className="kr:flex justify-between px-10 py-10">
          <div className="pb-8">
            <p className="text-4xl font-bold inline pb-1 border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">Lets talk...</p>
          </div>
          <div className="flex flex-col mb-15">
            <div className="mb-5 flex justify-start items-center">
              <GiMailbox
                color="#FB2576"
                size={30}
                className="hidden sm:block"
              />
              <GiMailbox
                color="#FB2576"
                size={20}
                className="block sm:hidden overflow-visible"
              />
              <span className="text-xl md:text-2xl font-bold text-gray-300 ml-3">
                rai.kartik99@gmail.com
              </span>
            </div>
            <div className="flex justify-start items-center">
              <BsFillTelephoneFill
                color="#FB2576"
                size={20}
                className="hidden sm:block
              "
              />
              <BsFillTelephoneFill
                color="#FB2576"
                size={15}
                className="block sm:hidden"
              />
              <span className="text-xl md:text-2xl font-bold text-gray-300 ml-3">
                +91 7860593626
              </span>
            </div>
          </div>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/aa63dac9-998f-4617-a8e3-8ea8ce901b22"
          className="flex flex-col px-10"
        >
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="7"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-8 mb-10 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>

        <div className="flex justify-center align-middle md:hidden">
          <ul className="flex justify-evenly">
            <li className="w-[65px] h-[50px]">
              <a
                href="https://www.linkedin.com/in/kartikrai007/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex justify-between items-center">
                  <FaLinkedin color="#ccd6f6" size={30} />
                </div>
              </a>
            </li>
            <li className="w-[65px] h-[50px]">
              <a
                href="https://www.instagram.com/kartik____r/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex justify-between items-center">
                  <BsInstagram color="#ccd6f6" size={30} />
                </div>
              </a>
            </li>
            <li className="w-[65px] h-[50px]">
              <a
                href="https://github.com/kartik990"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex justify-between items-center">
                  <FaGithub color="#ccd6f6" size={30} />
                </div>
              </a>
            </li>
            <li className="w-[65px] h-[50px]">
              <a
                href="https://leetcode.com/kartik____r/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex justify-between items-center">
                  <SiLeetcode color="#ccd6f6" size={30} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
