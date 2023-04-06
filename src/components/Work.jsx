import React from "react";
import admin from "./../assets/projects/AdminPanel.png";
import pizza from "./../assets/projects/pizzaApp.png";
import material from "./../assets/projects/material.png";
import hotel from "./../assets/projects/hotel.png";
import social from "./../assets/projects/socialApp.png";
import shell from "./../assets/projects/shell.png";
import blockchain from "./../assets/projects/blockchain.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto pb-[200px] text-gray-300  py-20">
      <div className="m-auto max-w-[1000px] p-4 flex flex-col justify-center w-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Projects
          </p>
          <p className="py-6"> Check out my some of my personal projects...</p>
        </div>

        {/* Projects Container */}
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-7">
          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${pizza})`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Next Js Pizza shop
                </span>

                <div className="pt-8 text-center">
                  <a
                    href="https://next-js-pizza-app-beta.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a
                    href="https://github.com/kartik990/NextJs-PizzaApp"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${hotel} )`,
              "background-size": `contain`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  MERN Stack Hotel Booking App
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://hotel-booking-client.onrender.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a
                    href="https://github.com/kartik990/Hotel-Booking-client"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code UI
                    </button>
                  </a>
                  <a
                    href="https://github.com/kartik990/Hotel-Booking-server"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code server
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${shell} )`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  NodeJs Bash like Custom Shell
                </span>

                <div className="pt-8 text-center">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg cursor-not-allowed">
                    Live
                  </button>
                  <a
                    href="https://github.com/kartik990/Shell"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${social} )`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React & Firebase Based Chat App
                </span>

                <div className="pt-8 text-center">
                  <a
                    href="https://socialize-chat-application.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a
                    href="https://github.com/kartik990/Chat-application"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${blockchain} )`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Web3 Retail Store
                </span>

                <div className="pt-8 text-center">
                  <button className="text-center cursor-not-allowed rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                    Live
                  </button>
                  <a
                    href="https://github.com/kartik990/Web3-Retail-store"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${material} )`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Material UI Social Media UI
                </span>

                <div className="pt-8 text-center">
                  <a
                    href="https://online-coffee-house.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a
                    href="https://github.com/kartik990/onlince-coffee-house"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto"
            style={{
              backgroundImage: `url( ${admin} )`,
              "background-size": `cover`,
              "background-repeat": `no-repeat`,
            }}
          >
            <div className="opacity-0 content-div group-hover:opacity-100 w-full h-ful flex justify-center items-center container rounded-lg">
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  React JS Admin Dashboard
                </span>

                <div className="pt-8 text-center">
                  <a
                    href="https://admin-panel-users.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a
                    href="https://github.com/kartik990/admin-panel-users"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
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
