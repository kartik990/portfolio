import React from "react";
import Leetcode from "./../assets/leetcode.png";

const Achievements = () => {
  return (
    <div name="experience" className="w-full h-auto pt-[150px] pb-[200px]  ">
      <div className="max-w-[1000px] mx-auto text-gray-300">
        <div className="p-4 ">
          <p className="text-4xl pb-1 font-bold inline border-b-4 border-pink-600  ">
            Achievements
          </p>
          <div className="flex flex-col gap-12  mt-10">
            <div className="w-auto max-w-[1000px] flex gap-5">
              <a
                href="https://leetcode.com/kartik____r/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[160px]  mb-2 rounded-md"
                  src={Leetcode}
                  alt="daphnisLabs"
                />
              </a>
              <div>
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
                        1700 [top 12.4%]
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
                    <li>
                      Won{" "}
                      <span className="font-bold text-xl text-gray-100 mb-2">
                        SQL50 Badge
                      </span>{" "}
                      on leetcode
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
