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
                      Addressed Automated customer engagement workflows using
                      <b className="font-extrabold"> corn jobs in Strapi</b>,
                      increasing timely reminder delivery by 25%.
                    </li>
                    <li>
                      Integrated
                      <b className="font-extrabold"> AWS Rekognition</b> to
                      extract data from ID documents and validate live selfies,
                      reducing manual verification time by 60%.
                    </li>
                    <li>
                      Overhauled <b className="font-extrabold">Sentry</b>{" "}
                      integration in client and admin portals to enable
                      real-time error monitoring, alerting, and debugging of
                      user-facing issues.
                    </li>
                    <li>
                      Consolidated{" "}
                      <b className="font-extrabold">Stripe webhooks</b> to
                      handle post-payment logic—verifying transactions, updating
                      the database, sending confirmation emails, and granting
                      service access.
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
                  Full Stack Developer Intern | October 2023 - June 2024 |
                </p>
                <p className="w-full max-w-[800px] font-medium text-left text-slate-400">
                  <ul className="list-disc list-inside">
                    <li>
                      Accelerated{" "}
                      <b className="font-extrabold">SEO strategies,</b>{" "}
                      increasing organic traffic by 30% and ranking city based
                      pages in{" "}
                      <b className="font-extrabold">Google's Top 10.</b>
                    </li>
                    <li>
                      Collaborated design and content teams to develop
                      multi-country landing and service pages and forms for{" "}
                      <b className="font-extrabold">
                        40+ countries and 6+ services.
                      </b>
                    </li>
                    <li>
                      Implemented Technologies:{" "}
                      <b className="font-extrabold">
                        Next js, React js, Javascript, Typescript, Styled
                        Components, Material UI ,Stripe, Sentry.
                      </b>
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
                      Developed and Managed client-facing web applications
                      (e-commerce, warehouse, booking) by building reusable UI
                      components with{" "}
                      <b className="font-extrabold">
                        {" "}
                        Next.js, React, Redux, Material UI, and Tailwind CSS.
                      </b>
                    </li>
                    <li>
                      Implemented secure{" "}
                      <b className="font-extrabold">Email OTP verification</b>{" "}
                      workflows for sensitive user operations such as login and
                      checkout.
                    </li>
                    <li>
                      Integrated{" "}
                      <b className="font-extrabold">
                        Google Maps Autocomplete API
                      </b>{" "}
                      to streamline address entry, improving user input accuracy
                      and form completion speed.
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
