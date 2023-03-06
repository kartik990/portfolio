import React from "react";
import { GiMailbox } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#150050] ">
      <div className="max-w-[1000px] mx-auto">
        <div className="kr:flex justify-between px-20 py-10">
          <div className="pb-8">
            <p className="text-4xl font-bold inline pb-1 border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below to talk...
            </p>
          </div>
          <div className="flex flex-col mb-15">
            <div className="mb-5 flex justify-center items-center">
              <GiMailbox color="#FB2576" size={30} />
              <span className="text-2xl font-bold text-gray-300 ml-5">
                rai.kartik99@gmail.com
              </span>
            </div>
            <div className="flex justify-start items-center">
              <BsFillTelephoneFill color="#FB2576" size={25} />
              <span className="text-2xl font-bold text-gray-300 ml-5">
                +91 7860593626
              </span>
            </div>
          </div>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/aa63dac9-998f-4617-a8e3-8ea8ce901b22"
          className="flex flex-col px-20"
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
      </div>
    </div>
  );
};

export default Contact;
