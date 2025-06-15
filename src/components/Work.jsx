import React, { useState } from "react";
import admin from "./../assets/projects/AdminPanel.png";
import pizza from "./../assets/projects/pizzaApp.png";
import material from "./../assets/projects/material.png";
import hotel from "./../assets/projects/hotel.png";
import social from "./../assets/projects/socialApp.png";
import shell from "./../assets/projects/shell.png";
import exchnage from "./../assets/projects/exchange.png";
import pokemon from "./../assets/projects/pokemon.png";
import rtcapp from "./../assets/projects/rtcapp.png";

import CSS from "../assets/css.png";
import mui from "../assets/mi.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Mongo from "../assets/mongo.png";
import sass from "../assets/sass.png";
import nextjs from "../assets/nextjs.png";
import express from "../assets/express.png";
import swr from "../assets/swr.png";
import docker from "../assets/docker.png";
import redux from "../assets/redux.png";
import socket from "../assets/socket.png";
import webRTC from "../assets/webRTC.png";
import ts from "../assets/ts.png";
import redis from "../assets/redis.png";
import prisma from "../assets/prisma.png";
import postgre from "../assets/postgre.webp";
import timescale from "../assets/timescale.png";
import tailwind from "../assets/tailwind.png";
import aws from "../assets/aws.png";
import insights from "../assets/insights.png";
import gamehub from "../assets/projects/Gamehub/chess2.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto pb-[200px] text-gray-300  py-20">
      <div className="m-auto max-w-[1000px] p-4 flex flex-col justify-center w-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline pb-1 border-b-4 border-pink-600  ">
            Projects
          </p>
          <p className="py-4"> Check out some of my personal projects...</p>
        </div>

        {/* Projects Container */}
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-7 relative">
          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${exchnage})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Exchange App
                </div>
                <div className="hidden sm:block text-base font-medium text-white ">
                  A stock exchange web app build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-2 sm:my-4 flex-wrap">
                    <img className="w-12 h-12" src={nextjs} alt="CSS" />
                    <img className="w-12 h-12" src={ts} alt="CSS" />
                    <img className="w-12 h-12" src={socket} alt="CSS" />
                    <img className="w-12 h-12" src={redis} alt="CSS" />
                    <img className="w-12 h-12" src={timescale} alt="CSS" />
                    <img className="w-12 h-12" src={docker} alt="CSS" />
                    <img className="w-12 h-12" src={aws} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://github.com/kartik990/stock-exchange/blob/main/README.md"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Explore
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/stock-exchange"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${insights})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-4 md:px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Insights
                </div>
                <div className="hidden sm:block text-base font-medium text-white ">
                  An Insight sharing full stack application build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-2 sm:my-4 flex-wrap">
                    <img className="w-12 h-12" src={nextjs} alt="CSS" />
                    <img className="w-12 h-12" src={ts} alt="CSS" />
                    <img className="w-12 h-12" src={socket} alt="CSS" />
                    <img className="w-12 h-12" src={webRTC} alt="CSS" />
                    <img className="w-12 h-12" src={aws} alt="CSS" />
                    <img className="w-12 h-12" src={prisma} alt="CSS" />
                    <img className="w-12 h-12" src={postgre} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://insights-web-three.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm  bg-white text-gray-700 font-bold md:text-base">
                        Live Link
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/insights-web"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm  bg-white text-gray-700 font-bold md:text-base">
                        Code client
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/insights-server"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm bg-white text-gray-700 font-bold md:text-base">
                        Code server
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${gamehub})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-4 md:px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Gamehub
                </div>
                <div className="text-base font-medium text-white ">
                  A real-time gaming website with games chess, sudoku, flappy
                  bird and snake game.
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-2 sm:my-4  flex-wrap">
                    <img className="w-12 h-12" src={nextjs} alt="CSS" />
                    <img className="w-12 h-12" src={ts} alt="CSS" />
                    <img className="w-12 h-12" src={socket} alt="CSS" />
                    <img className="w-auto h-12" src={Node} alt="CSS" />
                    <img className="w-auto h-12" src={tailwind} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://gamehub-steel-two.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  text-sm bg-white text-gray-700 font-bold md:text-base">
                        Live Link
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/gamehub"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  text-sm bg-white text-gray-700 font-bold md:text-base">
                        Code client
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/gamehub-server"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm bg-white text-gray-700 font-bold md:text-base">
                        Code server
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${pokemon})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Pokemon Explorer
                </div>
                <div className="hidden sm:block text-base font-medium text-white ">
                  A Pokemon Explorer website to learn more pokemons build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-3 my-2 sm:my-4 flex-wrap">
                    <img className="w-12 h-12" src={nextjs} alt="CSS" />
                    <img className="w-12 h-12" src={ts} alt="CSS" />
                    <img
                      className="w-20 h-12 rounded-xl opacity-[82%]"
                      src={swr}
                      alt="swr"
                    />
                    <img className="w-12 h-12" src={tailwind} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://pokemon-explorer-umber.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Live Link
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/pokemonExplorer"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${pizza})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Pizza Shop
                </div>
                <div className="text-base font-medium text-white ">
                  A Pizza buying NextJs full stack application build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-4 flex-wrap">
                    <img className="w-12 h-12" src={nextjs} alt="CSS" />
                    <img className="w-12 h-12" src={Mongo} alt="CSS" />
                    <img className="w-auto h-12" src={CSS} alt="CSS" />
                    <img className="w-auto h-12" src={JavaScript} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://next-js-pizza-app-beta.vercel.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 bg-[white] text-gray-700 font-bold text-base">
                        Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/NextJs-PizzaApp"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}

          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${hotel})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-4 md:px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Hotel Booking
                </div>
                <div className="text-base font-medium text-white ">
                  A full stack application build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-4 flex-wrap">
                    <img className="w-12 h-12" src={ReactImg} alt="CSS" />
                    <img className="w-12 h-12" src={Node} alt="CSS" />
                    <img className="w-auto h-12" src={express} alt="CSS" />
                    <img className="w-12 h-12" src={Mongo} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://hotel-booking-client.onrender.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm bg-[white] text-gray-700 font-bold md:text-base ">
                        Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/Hotel-Booking-client"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm  bg-white text-gray-700 font-bold md:text-base">
                        Code client
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/Hotel-Booking-server"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 text-sm bg-white text-gray-700 font-bold md:text-base">
                        Code server
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${social})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Connect
                </div>
                <div className="text-base font-medium text-white ">
                  A Chat application build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-4 flex-wrap">
                    <img className="w-12 h-12" src={ReactImg} alt="CSS" />
                    <img className="w-12 h-12" src={FireBase} alt="CSS" />
                    <img className="w-auto h-12" src={sass} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://socialize-chat-application.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 bg-[white] text-gray-700 font-bold text-base ">
                        Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/Chat-application"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${admin})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Admin Panel
                </div>
                <div className="text-base font-medium text-white ">
                  A React based admin panel build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-4 flex-wrap">
                    <img className="w-12 h-12" src={ReactImg} alt="CSS" />
                    <img className="w-auto h-12" src={sass} alt="CSS" />
                    <img className="w-auto h-12" src={JavaScript} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://admin-panel-users.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 bg-[white] text-gray-700 font-bold text-base ">
                        Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/admin-panel-users"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${material})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Online Coffee House
                </div>
                <div className="text-base font-medium text-white ">
                  A Social Media application UI build using:
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-4 flex-wrap">
                    <img className="w-auto h-12" src={mui} alt="CSS" />
                    <img className="w-12 h-12" src={ReactImg} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://online-coffee-house.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 bg-[white] text-gray-700 font-bold text-base ">
                        Live
                      </button>
                    </a>
                    <a
                      href="https://github.com/kartik990/onlince-coffee-house"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2  bg-white text-gray-700 font-bold text-base">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto "
            style={{
              backgroundImage: `url( ${shell})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div px-8 py-6 group-hover:opacity-100 w-full h-full rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl font-bold text-white tracking-wider">
                  Shell Master
                </div>
                <div className="text-base font-medium text-white ">
                  Bash like Custom Shell built using NodeJs
                </div>
                <div className="flex flex-col gap-3 w-auto h-full">
                  <div className="flex gap-2 my-4 flex-wrap">
                    <img className="w-12 h-12" src={Node} alt="CSS" />
                    <img className="w-12 h-12" src={JavaScript} alt="CSS" />
                  </div>
                  <div className="pt-0 text-center flex flex-1 items-start gap-3">
                    <a
                      href="https://github.com/kartik990/Shell"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button className="text-center rounded-lg px-3 py-2 bg-[white] text-gray-700 font-bold text-base ">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container end */}
        </div>
      </div>
    </div>
  );
};

export default Work;
