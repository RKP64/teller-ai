"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import { IStory } from "@/interfaces/IStory";
import StoryAPI from "@/interceptor/Story/Story";
import { GoMute, GoUnmute } from "react-icons/go";

const StoryPage = () => {
  const [story, setStory] = useState<IStory | undefined>();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);

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
      <audio
        src={story?.scenarios[currentStep].voice}
        autoPlay={true}
        onEnded={handleNextButton}
        muted={soundMuted}
      />

      <div id="opacity-fade"></div>
      <div id="opacity-story"></div>
      <div className="absolute right-10 top-6">
        {soundMuted ? (
          <GoMute
            className="text-white/80 hover:text-white transition duration-500 cursor-pointer w-12 h-12"
            onClick={() => setSoundMuted(!soundMuted)}
          />
        ) : (
          <GoUnmute
            className="text-white/80 hover:text-white transition duration-500 cursor-pointer w-12 h-12"
            onClick={() => setSoundMuted(!soundMuted)}
          />
        )}
      </div>
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
                <h2 className="text-5xl font-bold text-white drop-shadow-lg">
                  {story.name.split(" ").map((word, index, wordsArray) =>
                    index === wordsArray.length - 1 ? (
                      <span key={index} className="text-primaryColor">
                        {word}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  )}
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
              {currentStep !== 0 && (
                <button
                  onClick={handlePreviousButton}
                  className={`rounded-lg text-xl border px-8 py-4 text-white shadow-md shadow-gray-500 border-gray-500 bg-gray-500 hover:border-primaryColor hover:text-primaryColortransition duration-500`}
                >
                  Previous
                </button>
              )}
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
