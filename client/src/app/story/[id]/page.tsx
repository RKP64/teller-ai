"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import { IStory } from "@/interfaces/IStory";
import StoryAPI from "@/interceptor/Story/Story";

const StoryPage = () => {
  const [story, setStory] = useState<IStory | undefined>();
  const [currentStep, setCurrentStep] = useState<number>(0);

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    async function fetchStory() {
      if (typeof id === "string") {
        try {
          const response = await StoryAPI.getStoryById(id);
          setStory(response.data);
        } catch (error) {
          router.push("/");
        }
      }
    }

    if (!story) {
      fetchStory();
    }
  }, [story, id, router]);

  const handlePreviousButton = () => {
    if (currentStep <= 0) return true;
    else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextButton = () => {
    if (story) {
      if (currentStep >= story?.scenarios.length - 1) {
        router.push("/");
        return true;
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url('${story?.scenarios[currentStep].image}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className={`crossfade relative`}
    >
      <div id="opacity-fade"></div>
      <div className="container mx-auto px-8 lg:px-8 relative">
        <div className="w-full h-full flex justify-center items-center flex-col gap-20">
          <div className="mt-16 w-full">
            <Link href="/">
              <IoReturnUpBackOutline className="h-16 w-16 text-primaryColor cursor-pointer z-30" />
            </Link>
          </div>
          <div className="w-full">
            {story && (
              <div>
                <h2 className="text-5xl font-bold text-white">
                  {story.name.split(" ")[0]}{" "}
                  <span className="text-primaryColor">
                    {story.name.split(" ")[1]}
                  </span>
                </h2>

                <div className="mt-12 border backdrop-blur-md border-solid border-black p-[33px] rounded-[15px]">
                  <p className="text-[26px] leading-normal text-white">
                    {story.scenarios[currentStep].text}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between w-full mb-20">
            <div>
              <button
                onClick={handlePreviousButton}
                className={`rounded-lg text-xl border px-8 py-4 text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColortransition duration-500`}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={handleNextButton}
                className="bg-primaryColor text-white px-14 py-4 text-2xl rounded-lg shadow-md shadow-primaryColor hover:bg-primaryColor/80 transition duration-500 hover:text-white/80 ml-auto"
              >
                {story && currentStep === story?.scenarios.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryPage;
