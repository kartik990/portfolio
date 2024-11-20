import React from "react";
import daphnisImg from "./../assets/daphnis.jpeg";
import globeia from "./../assets/globeia.jpeg";
import rotaractImg from "./../assets/rotaract.jpeg";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-auto pt-[150px] pb-[200px]  ">
      <div className="max-w-[1000px] mx-auto text-gray-300 p-4">
        <div className="p-4 ">
          <p className="text-4xl pb-1 font-bold inline border-b-4 border-pink-600  ">
            Experience
          </p>
          <p className="pt-4 mb-10">Past positions and work experience...</p>
          <div className="flex flex-col gap-12 px-4 mt-8">
            <div className="w-auto max-w-[1000px] flex gap-5">
              <a
                href="https://www.globeia.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[160px] mx-auto mb-2 rounded-md"
                  src={globeia}
                  alt="daphnisLabs"
                />
              </a>
              <div>
                <a
                  href="https://www.globeia.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="font-extrabold text-2xl mb-0">Globeia Inc.</p>
                </a>
                <p className="font-bold text-lg text-gray-400 mb-2 flex">
                  Full Stack Developer - FTE | July 2024 - Present |
                </p>
                <p className="w-full max-w-[800px] font-medium text-left text-slate-400">
                  <ul className="list-disc list-inside">
                    <li>
                      Engineered automated{" "}
                      <b className="font-extrabold">cron jobs</b> on Strapi to
                      send reminder emails to clients, improving support and
                      service interaction reminders and ensuring timely customer
                      engagement.
                    </li>
                    <li>
                      Integrated{" "}
                      <b className="font-extrabold">AWS Rekognition</b> to
                      extract text from photo IDs and verify live selfies
                      against photo IDs for real-time.
                    </li>
                    <li>
                      Implemented four core services on the{" "}
                      <b className="font-extrabold">client and admin portals</b>{" "}
                      to automate customer interactions with the company,
                      enhancing productivity, security, and responsiveness.
                    </li>
                    <li>
                      Optimized SEO strategies to boost rankings for
                      city-specific criminal record check pages, achieving under{" "}
                      <b className="font-extrabold">
                        Top 10 positions on Google.
                      </b>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="w-auto max-w-[1000px] flex gap-5">
              <a
                href="https://www.globeia.ca/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[160px] mx-auto mb-2 rounded-md"
                  src={globeia}
                  alt="daphnisLabs"
                />
              </a>
              <div>
                <a
                  href="https://www.globeia.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="font-extrabold text-2xl mb-0">Globeia Inc.</p>
                </a>
                <p className="font-bold text-lg text-gray-400 mb-2 flex">
                  Full Stack Developer Intern | September 2023 - June 2024 |
                </p>
                <p className="w-full max-w-[800px] font-medium text-left text-slate-400">
                  <ul className="list-disc list-inside">
                    <li>
                      Implemented Technologies: Next js, React js, Javascript,
                      Typescript, Styled Components, CSS, applications, Material
                      UI , Strapi.
                    </li>
                    <li>
                      Integrated Strapi into Globeia website for dynamic content
                      updates.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="w-auto max-w-[1000px] flex gap-5">
              <a
                href="https://www.daphnislabs.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[160px] mx-auto mb-2 rounded-md"
                  src={daphnisImg}
                  alt="daphnisLabs"
                />
              </a>
              <div>
                <a
                  href="https://www.daphnislabs.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="font-extrabold text-2xl mb-0">Daphnis Labs</p>
                </a>
                <p className="font-bold text-lg text-gray-400 mb-2 flex">
                  Front-end Developer Intern | Jan 2023 - Mar 2023 |
                  {/*                   <a
                    href="https://drive.google.com/file/d/1WrD3WY5NOPFn0WSV4PpphSdnfdx4uWHS/view"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <p className=" italic underline ml-3">certificate</p>
                  </a> */}
                </p>
                <p className="w-full max-w-[800px] font-medium text-left text-slate-400">
                  <ul className="list-disc list-inside">
                    <li>
                      Assisted in developing multiple client-based projects,
                      including E-commerce, warehouse, and booking applications,
                      by designing and developing reusable UI components using
                      Next.js, React, Redux, and Tailwind CSS.
                    </li>
                    <li>
                      Developed various UI Elements using React.js, Next.js, and
                      Tailwind for a better user experience.
                    </li>
                    <li>
                      Build custom admin panels tailored to client requirements.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
