"use client";

import Image from "next/image";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const Step = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-30 lg:py-20">
        <div className="grid gap-20 lg:grid-cols-3 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between mb-6 text-white">
              <p className="text-2xl font-bold">Step 1</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
              If one examines precultural libertarianism, one is faced with a
              choice: either accept rationalism or conclude that context.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6 text-white">
              <p className="text-2xl font-bold">Step 2</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
              That is the true genius of America - a faith in simple dreams, an
              insistence on small miracles.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6 text-white">
              <p className="text-2xl font-bold">Step 3</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
              Those options are already baked in with this model shoot me an email
              clear blue water but we need distributors.
            </p>
          </div>
        </div>
      </div>
    );
  };

const LoadingPage = () => {
    const customStyles = {
        width: 'calc(100% - 2.5rem - 1rem)',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      };
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#001E2B] overflow-hidden">
        <div className="pl-[7rem] pr-[7rem] pt-[5rem]">
            <Image src={"./images/circle.svg"} alt="circle" width={1500} height={1500}
                className="absolute opacity-40"/>

            <h1 className="text-white text-6xl font-black text-center leading-snug">Generating your new<br />beautiful <span className="text-primaryColor">story</span></h1>
            <p className="text-gray-500 text-2xl mt-5 text-center">Your story must pass several phases, it will be finished in no time</p>
        
        </div>
        <div className="h-[100%] w-full mt-[6rem] backdrop-blur-lg bg-[#001E2B] opacity-80"> 

        <div className="flex flex-row gap-2 bg-white/[.00] justify-center">
            <div className="flex flex-row items-center justify-center">
                <div className="p-1 bg-green-500 rounded-full text-white text-3xl">
                    <IoChevronForwardCircleOutline />
                </div>
                <div className="w-[20rem] h-2 bg-white ml-2 rounded-full">
                    <div className="w-[50%] h-2 bg-green-300 rounded-full">

                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="p-1 bg-green-500 rounded-full text-white text-3xl">
                    <IoChevronForwardCircleOutline />
                </div>
                <div className="w-[20rem] h-2 bg-white ml-2 rounded-full">
                    <div className="w-[0%] h-2 bg-green-300 rounded-full">

                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="p-1 bg-green-500 rounded-full text-white text-3xl">
                    <IoChevronForwardCircleOutline />
                </div>
                <div className="w-[20rem] h-2 bg-white ml-2 rounded-full">
                    <div className="w-[0%] h-2 bg-green-300 rounded-full">

                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="p-1 bg-green-500 rounded-full text-white text-3xl">
                    <IoChevronForwardCircleOutline />
                </div>
            </div>
        </div>

        <Step />

        </div>
    </div>
  );
};

export default LoadingPage;
