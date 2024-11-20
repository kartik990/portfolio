import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import django from "../assets/django.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import aws from "../assets/aws.png";
import reactNative from "../assets/react-naitve.png";
import astro from "../assets/astro.png";
import gatsby from "../assets/gatsby.png";
import GitHub from "../assets/github.png";
import material from "../assets/mi.png";
import cpp from "../assets/cpp.png";
import boot from "../assets/bookt.png";
import Mongo from "../assets/mongo.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import figma from "../assets/figma.png";
import linux from "../assets/linux.png";
import postman from "../assets/postman.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";
import docker from "../assets/docker.png";
import vercel from "../assets/vercel.png";
import redux from "../assets/redux.png";
import socket from "../assets/socket.png";
import webRTC from "../assets/webRTC.png";
import ts from "../assets/ts.png";
import graphql from "../assets/graphql.png";
import postgre from "../assets/postgre.webp";
import netlify from "../assets/netlify.png";
import python from "../assets/python.webp";
import apollo from "../assets/apollo.png";
import strapi from "../assets/strapi.jpg";
import redis from "../assets/redis.png";
import prisma from "../assets/prisma.png";

const Skills = () => {
  return (
    <div name="skills" className=" text-gray-300 w-full h-screeen py-[100px]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline text-gray-300 font-bold pb-1 border-b-4 border-pink-600">
            Skills
          </p>
          <p className="mt-5">These are the technologies I've worked with...</p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-8 gap-6 text-center py-8">
          <div className="flex flex-col justify-between items-center hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={HTML} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={CSS} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2"
              src={JavaScript}
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={ts} alt="CSS" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={python} alt="CSS" />
            <p>Python</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-200">
            <img className="w-20 mx-auto mb-2" src={cpp} alt="cpp" />
            <p>C++</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={FireBase} alt="FireBase" />
            <p>Firebase</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={strapi} alt="CSS" />
            <p>Strapi</p>
          </div>
          <div className="flex flex-col justify-end items-center relative hover:scale-110 duration-300 pb-1">
            <img
              className="w-20 mx-auto scale-125 mb-6"
              src={astro}
              alt="CSS"
            />
            <p className="absolute bottom-0">Astro</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2 rounded-full"
              src={gatsby}
              alt="CSS"
            />
            <p>Gatsby</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={nextjs} alt="nextjs" />
            <p>NEXTjs</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={ReactImg} alt="ReactImg" />
            <p>React</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={redux} alt="CSS" />
            <p>Redux</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={Node} alt="Node" />
            <p>Node</p>
          </div>
          <div className="flex flex-col justify-end gap-4 items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={express} alt="Mongo" />
            <p>Express</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={Mongo} alt="Mongo" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-end gap-4 items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2"
              src={material}
              alt="materialUI"
            />
            <p>Material Ui</p>
          </div>
          <div className="flex flex-col justify-end gap-4 items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={boot} alt="CSS" />
            <p>Bootstrap</p>
          </div>
          <div className="flex flex-col justify-end gap-4 items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={sass} alt="sass" />
            <p>Sass</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={tailwind} alt="CSS" />
            <p>TailWind</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={figma} alt="CSS" />
            <p>Figma</p>
          </div>
          <div className="flex flex-col justify-end gap-4 items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2 rounded-md"
              src={linux}
              alt="CSS"
            />
            <p>Linux</p>
          </div>{" "}
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={netlify} alt="CSS" />
            <p>Netlify</p>
          </div>{" "}
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={vercel} alt="CSS" />
            <p>Vercel</p>
          </div>{" "}
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={graphql} alt="CSS" />
            <p>Graphql</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2 rounded-md"
              src={apollo}
              alt="CSS"
            />
            <p>Apollo Client</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={prisma} alt="CSS" />
            <p>Prisma</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2 scale-90"
              src={postgre}
              alt="CSS"
            />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col justify-end items-center gap-4 hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2 scale-110"
              src={mysql}
              alt="CSS"
            />
            <p>MySQL</p>
          </div>{" "}
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={GitHub} alt="CSS" />
            <p>GitHub</p>
          </div>
          <div className="flex flex-col justify-between items-center relative hover:scale-110 duration-300 pb-1">
            <img
              className="w-20 mx-auto mb-2 scale-[70%]"
              src={django}
              alt="CSS"
            />
            <p className="absolute bottom-0">Django</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={postman} alt="CSS" />
            <p>Postman</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={socket} alt="CSS" />
            <p>Socket.IO</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={webRTC} alt="CSS" />
            <p>WebRTC</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={redis} alt="CSS" />
            <p>Redis</p>
          </div>
          <div className="flex flex-col justify-end items-center  hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto mb-2 scale-105"
              src={docker}
              alt="CSS"
            />
            <p>Docker</p>
          </div>{" "}
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img className="w-20 mx-auto mb-2" src={aws} alt="aws" />
            <p>AWS</p>
          </div>
          <div className="flex flex-col justify-between items-center  hover:scale-110 duration-300">
            <img
              className="w-32 mx-auto scale-110 rounded-lg"
              src={reactNative}
              alt="reactNative"
            />
            <p>React Native</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
