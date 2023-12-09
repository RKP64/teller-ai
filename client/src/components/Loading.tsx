"use client";

import Image from "next/image";
import { Progress } from "@nextui-org/react";

import { FaRegImages } from "react-icons/fa";
import { TbPrompt } from "react-icons/tb";
import { PiSpeakerHigh, PiConfettiLight } from "react-icons/pi";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface StepProps {
  progress: number;
}

const Step = ({ progress }: StepProps) => {
  const itemStyle = (condition: boolean) => {
    return condition
      ? "transition-opacity opacity-100"
      : "transition-opacity opacity-30";
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-30 lg:py-20">
      <div className="grid gap-20 lg:grid-cols-3 sm:grid-cols-2">
        <div className={itemStyle(progress > 0)}>
          <div className="flex items-center justify-between mb-6 text-white">
            <p className="text-2xl font-bold">Reviewing prompt</p>
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
            Teller meticulously examines the provided prompt, unraveling the
            fundamental themes, characters, settings, and conflicts embedded
            within.
          </p>
        </div>
        <div className={itemStyle(progress > 100)}>
          <div className="flex items-center justify-between mb-6 text-white">
            <p className="text-2xl font-bold">Generating images</p>
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
            TellerAI crafts a visual narrative by summoning a repository of
            diverse images, conjuring up scenes, scenarios, and concepts
            tailored to the context.
          </p>
        </div>
        <div className={itemStyle(progress > 200)}>
          <div className="flex items-center justify-between mb-6 text-white">
            <p className="text-2xl font-bold">Preparing the speech</p>
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
            TellerAI curates and organizes information from vast knowledge
            sources, weaving together a coherent narrative aligned with the
            prompt&apos;s requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(
      () => {
        progress < 300
          ? setProgress(
              progress +
                (progress <= 100 ? 0.5 : progress <= 200 ? 0.805 / 8 : 0.5)
            )
          : router.push("/");
      },
      progress <= 100 ? 250 / 2 : progress <= 200 ? 1000 / 8 : 250 / 2
    );
    return () => clearInterval(id);
  }, [progress, router]);

  const circleStyle = (condition: boolean) => {
    return condition
      ? "p-2 bg-green-500 rounded-full text-white text-2xl"
      : "p-2 bg-[#0b3142] rounded-full text-white text-2xl";
  };

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#001E2B] overflow-x-hidden">
        <div className="h-[100vh] overflow-hidden absolute">
        <Image
          src={"./images/circle.svg"}
          alt="circle"
          width={1500}
          height={1500}
          className="opacity-20 max-h-[100vh] transition duration-800 animate-ping"
        />
        </div>
      <div className="pl-[4rem] md:pr-[7rem] md:pl-[7rem] pr-[4rem] pt-[5rem]">
        

        <h1 className="text-white text-4xl md:text-6xl font-black text-center leading-snug relative z-1">
          Generating your new
          <br />
          beautiful <span className="text-primaryColor">story<div className="w-max inline-flex">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap pr-1 text-5xl font-bold text-primaryColor">. . .</h1>
            </div></span>
        </h1>
        <p className="text-gray-500 text-2xl mt-5 text-center">
          Your story must pass several phases, it will be finished in no time
        </p>
      </div>
      <div className="h-[50%] w-full mt-[6rem] backdrop-blur-lg bg-[#001E2B] opacity-80">
        <div className="flex flex-row gap-2 bg-white/[.00] justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className={circleStyle(progress >= 0)}>
              <TbPrompt />
            </div>
            <div className="w-[2rem] sm:w-[8rem] md:w-[9rem] lg:w-[17rem] h-2 ml-2 rounded-full">
              <Progress
                size="md"
                color="success"
                aria-label="Loading..."
                value={progress}
                className="h-2 bg-[#0e3648] rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className={circleStyle(progress >= 100)}>
              <FaRegImages />
            </div>
            <div className="w-[2rem] sm:w-[8rem] md:w-[9rem] lg:w-[17rem] h-2 ml-2 rounded-full">
              <Progress
                size="md"
                color="success"
                aria-label="Loading..."
                value={progress - 100}
                className="h-2 bg-[#0e3648] rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className={circleStyle(progress >= 200)}>
              <PiSpeakerHigh />
            </div>
            <div className="w-[2rem] sm:w-[8rem] md:w-[9rem] lg:w-[17rem] h-2 ml-2 rounded-full">
              <Progress
                size="md"
                color="success"
                aria-label="Loading..."
                value={progress - 200}
                className="h-2 bg-[#0e3648] rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className={circleStyle(progress >= 300)}>
              <PiConfettiLight />
            </div>
          </div>
        </div>

        <Step progress={progress} />
      </div>
    </div>
  );
};

export default LoadingPage;
