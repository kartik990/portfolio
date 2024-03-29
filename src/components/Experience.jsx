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
                  Full Stack Developer Intern | Oct 2023 - Jan 2024 |
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
                    <li>
                      Revamped and fixed the UI of 10+ web pages of the project,
                      significantly improving the SEO score.
                    </li>
                    <li>
                      {" "}
                      Build portal UI using radixUI and build forms services
                      using formik and react-query.{" "}
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
            <div className="w-auto max-w-[1000px] flex gap-5">
              <a
                href="https://www.linkedin.com/company/rotaract-club-abv-iiitm/?originalSubdomain=in"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[160px] mx-auto mb-2 rounded-md"
                  src={rotaractImg}
                  alt="daphnisLabs"
                />
              </a>
              <div>
                <a
                  href="https://www.linkedin.com/company/rotaract-club-abv-iiitm/?originalSubdomain=in"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="font-extrabold text-2xl mb-0">Rotaract</p>
                </a>
                <p className="font-bold text-lg text-gray-400 mb-2">
                  Head of Humans of Gwalior | Aug 2021 - Mar 2022
                </p>
                <p className="w-auto max-w-[800px] font-medium text-left text-slate-400">
                  <ul className="list-disc list-inside">
                    <li>
                      Organised events and interviews to understand not so
                      common life of common people of Gwalior.
                      <br />
                      <a
                        href="https://medium.com/@rotaractiiitm"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="underline font-bold italic">
                          Medium Link
                        </span>
                      </a>
                    </li>
                    <li>
                      Managed volunteers to organise interviews and blogs based
                      on peoples real life exepreiences and events that define
                      their life.
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
