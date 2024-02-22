import React from "react";
import Leetcode from "./../assets/leetcode.png";

const Achievements = () => {
  return (
    <div name="achievement" className="w-full h-auto pt-[150px] pb-[200px]  ">
      <div className="max-w-[1000px] mx-auto text-gray-300">
        <div className="p-6">
          <p className="text-4xl pb-1 font-bold inline border-b-4 border-pink-600  ">
            Accomplishment
          </p>
          <div className="flex flex-col gap-12  mt-10">
            <div className="flex gap-5">
              <img
                className="w-[160px]  mb-2 rounded-md"
                src={Leetcode}
                alt="leetcode"
              />

              <div className="w-auto">
                <a
                  href="https://leetcode.com/kartik____r/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="font-extrabold text-3xl mb-0">Leetcode</p>
                </a>
                <p className="w-full max-w-[800px] font-medium text-lg text-left text-gray-300">
                  <ul className="list-disc list-inside">
                    <li>
                      Highest Contest rating :{" "}
                      <span className="font-bold text-xl text-gray-100 mb-2">
                        1704 [top 12.4%]
                      </span>{" "}
                    </li>
                    <li>
                      Highest Global rank in contest{" "}
                      <span className="font-bold text-xl text-gray-100 mb-2">
                        2,834th in 20,949
                      </span>{" "}
                      participants
                    </li>
                    <li>
                      Solved{" "}
                      <span className="font-bold text-xl text-gray-100 mb-2">
                        1000+
                      </span>{" "}
                      DSA questions
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

export default Achievements;
