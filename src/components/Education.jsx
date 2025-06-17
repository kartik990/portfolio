import React from "react";
import IIITLogo from "./../assets/iiitm.png"; // Replace with your IIIT Gwalior logo path

const Education = () => {
  return (
    <div name="education" className="w-full h-auto pt-[150px] pb-[200px]">
      <div className="max-w-[1000px] mx-auto text-gray-300">
        <div className="p-6">
          <p className="text-3xl md:text-4xl pb-1 font-bold inline border-b-4 border-pink-600">
            Education
          </p>
          <div className="flex flex-col gap-12 mt-10">
            <div className="flex flex-col md:flex-row gap-5">
              <a
                href="https://www.iiitm.ac.in/index.php/en/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[160px] mb-2 rounded-md"
                  src={IIITLogo}
                  alt="IIIT Gwalior"
                />
              </a>
              <div className="w-auto">
                <p className="font-extrabold text-2xl md:text-3xl mb-4">
                  Indian Institute of Information Technology,
                  <br /> Gwalior
                </p>
                <p className="font-medium text-md md:text-lg text-left text-gray-300">
                  <span className="font-bold text-xl text-gray-100">
                    B.Tech | Information Technology | 2024
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
