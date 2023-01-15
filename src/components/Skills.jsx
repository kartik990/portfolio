import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import SQL from "../assets/sql.png";
import material from "../assets/mi.png";
import cpp from "../assets/cpp.png";
import boot from "../assets/bookt.png";
import Mongo from "../assets/mongo.png";
import sass from "../assets/sass.png";
import nextjs from "../assets/nextjs.png";
import figma from "../assets/figma.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#150050] text-gray-300 w-full h-screeen py-[100px]"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline text-gray-300 font-bold py-2 border-b-2 border-pink-600">
            Skills
          </p>
          <p className="mt-5">\\ These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="flex flex-col justify-center items-center hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={HTML} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={CSS} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={JavaScript} alt="CSS" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={cpp} alt="CSS" />
            <p>C++</p>
          </div>

          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={nextjs} alt="CSS" />
            <p>NEXTjs</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={ReactImg} alt="CSS" />
            <p>React</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={Node} alt="CSS" />
            <p>Node</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={Mongo} alt="CSS" />
            <p>MongoDB</p>
          </div>

          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={FireBase} alt="CSS" />
            <p>Firebase</p>
          </div>

          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={SQL} alt="CSS" />
            <p>SQL</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={material} alt="CSS" />
            <p>Material Ui</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={boot} alt="CSS" />
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={GitHub} alt="CSS" />
            <p>GitHub</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={sass} alt="sass" />
            <p>Sass</p>
          </div>
          <div className="flex flex-col justify-center items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={figma} alt="CSS" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
