import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  text-gray-300">
      <div className="flex flex-col p-4 justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-2xl sm:text-4xl font-bold">
            <p>Hi I'm kartik. nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building applications that improves the
              lives of people. Highly skilled and motivated software development
              professional with some good experience in frontend development.
              Strong expertise in building intuitive user interfaces using
              modern web technologies like React, Next.js, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
