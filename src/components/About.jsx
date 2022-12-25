import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#150050] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline  border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm kartik. nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of thosea around me. I specialize in creating software
              for cilents ranging from individuals to small-businesses all the
              way to large enterprise corporations. What would you like to do if
              you also had a software expert at your finger tips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
