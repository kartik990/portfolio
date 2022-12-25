import React from "react";
import { GiDirectionSign } from "react-icons/gi";

const Home = () => {
  return (
    <div name="home" className={`pl-10 w-1-full h-screen  bg-[#150050]`}>
      {/* container */}
      <div
        className={` ml-15 max-w-[1000px] mx-auto text-white px-8 flex flex-col justify-center h-full`}
      >
        <p className={`text-[#fb2576]`}> Hi, my name is</p>
        <h1 className={`text-[#ccd6f6] text-4xl sm:text-7xl font-bold`}>
          Kartik Rai
        </h1>
        <h2 className={`text-[#8892b0] text-3xl sm:text-5xl font-bold`}>
          I'm a full stack developer.
        </h2>
        <p className={`text-[#8892b0] py-4 max-w-[700px]`}>
          I'm a full stack developer specializing in building MERN stack
          projects with amazing UI desgins and efficent server.{" "}
        </p>
        <div>
          <button
            className={`flex gap-2 justify-between items-center border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600`}
          >
            View Work <GiDirectionSign> </GiDirectionSign>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
