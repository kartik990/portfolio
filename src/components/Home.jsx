import React, { useEffect, useState } from "react";
import { GiDirectionSign } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  const [words, setWords] = useState("");
  const phrase = "I'm a full stack developer.        ";

  useEffect(() => {
    let currentIndex = 0;
    let tm = 4;

    let typing = true;

    const TypeInterval = setInterval(() => {
      if (currentIndex <= phrase.length && typing) {
        setWords(phrase.substring(0, currentIndex));
        currentIndex++;
      }

      if (currentIndex === phrase.length) {
        typing = false;
      }
    }, (tm * 1000) / phrase.length);

    const deleteInterval = setInterval(() => {
      if (currentIndex <= phrase.length && !typing) {
        setWords(phrase.substring(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex === 0) {
        typing = true;
      }
    }, (tm * 1000) / phrase.length);

    return () => {
      clearInterval(TypeInterval);
      clearInterval(deleteInterval);
    };
  }, []);

  return (
    // bg-[#150050]
    <div
      name="home"
      className={`pl-2 sm:pl-10 pt-44 mb-20 pb-20 w-1-full h-screen`}
    >
      {/* container */}
      <div
        className={`ml-15 max-w-[1000px] mx-auto text-white px-8 flex flex-col justify-center h-full`}
      >
        <p className={`text-[#fb2576]`}>Hi, my name is</p>
        <h1
          className={`text-[#ccd6f6] text-5xl sm:text-7xl font-bold mx-[-4px]`}
        >
          Kartik Rai
        </h1>
        <h2 className={`text-[#8892b0] text-xl sm:text-4xl font-bold w-fit`}>
          <div className="writer-text h-6 sm:h-10">{words}</div>
        </h2>
        <p className={`text-[#8892b0] py-2 max-w-[700px]`}>
          I'm a full-stack developer specializing in diverse web application
          tech stacks. My strong problem-solving skills contribute to creating
          robust applications.
        </p>
        <div className="flex gap-5">
          <Link to="work" smooth={true} duration={500}>
            <button
              className={`flex gap-2 justify-between items-center border-2 px-2 sm:px-6 py-3 my-2 hover:bg-pink-600  hover:border-pink-600 hover: duration-500`}
            >
              <span className="text-sm sm:text-base">View Projects</span>
              <GiDirectionSign />
            </button>
          </Link>

          <a
            href="https://drive.google.com/file/d/1kaTB1vrLFvQYl_y_RRFro4_OZn_NZyYM/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <button
              className={`flex gap-2 justify-between items-center border-2 px-2 sm:px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 hover:duration-500 `}
            >
              <span className="text-sm sm:text-base">Download CV</span>{" "}
              <FiDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
