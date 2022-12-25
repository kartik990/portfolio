import React from "react";
import admin from "./../assets/projects/AdminPanel.png";
import pizza from "./../assets/projects/pizzaApp.png";
import material from "./../assets/projects/material.png";
import hotel from "./../assets/projects/hotel.png";
import social from "./../assets/projects/socialApp.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-auto pb-[170px] text-gray-300 bg-[#150050] py-20"
    >
      <div className="m-auto max-w-[1000px] p-4 flex flex-col justify-center w-full ">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Work
          </p>
          <p className="py-6">\\ Check out my some recent work</p>
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
                    href="https://next-js-pizza-app-kartik990.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a href="/">
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
                  Full Stack Hotel Booking App
                </span>
                <div className="pt-8 text-center">
                  <a href="https://hotel-booking-client.onrender.com/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a href="/">
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
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a href="/">
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
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a href="/">
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
                  <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[white] text-gray-700 font-bold text-lg">
                      Live
                    </button>
                  </a>
                  <a href="/">
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
