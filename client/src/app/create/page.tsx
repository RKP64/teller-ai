"use client";

import BackButton from "@/components/BackButton";
import AgeRangeFilter from "@/components/Filters/AgeRange";
import GenreFilter from "@/components/Filters/Genre";
import Header from "@/components/Filters/Header";
import UserPrompt from "@/components/Filters/UserPrompt";
import { useState } from "react";

const CreateStoryPage = () => {
  const [step, setStep] = useState<number>(1);
  const [genre, setGenre] = useState<string>("");
  const [ageRange, setAgeRange] = useState<string>("");
  const [userPrompt, setUserPrompt] = useState<string>("");

  const handleNextStep = (step: number) => {
    setStep(step);
    if (step > 3) {
      return true;
    }
  };

  return (
    <div className="h-screen">
      <section className="relative overflow-hidden">
        <div className="mt-2 md:mt-0 py-12 pb-6 sm:py-16 lg:pb-24 overflow-hidden">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div className="relative mt-12 lg:mt-20 bg-gray-800 rounded-lg p-10">
              <BackButton link="/" />
              <div className="absolute inset-x-2 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28 p-10">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="#D4D4D8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 12"
                  />
                </svg>
              </div>
              <Header
                genre={true}
                ageRange={step === 2 || step === 3 ? true : false}
                prompt={step === 3 ? true : false}
              />
              {step === 1 && <GenreFilter genre={genre} setGenre={setGenre} />}
              {step === 2 && (
                <AgeRangeFilter age={ageRange} setAgeRange={setAgeRange} />
              )}
              {step === 3 && (
                <UserPrompt
                  userPrompt={userPrompt}
                  setUserPrompt={setUserPrompt}
                />
              )}
              <div className="mt-40 flex items-end">
                <button
                  onClick={() => handleNextStep(step + 1)}
                  className="bg-primaryColor text-white px-14 py-4 text-2xl rounded-lg shadow-md shadow-primaryColor hover:bg-primaryColor/80 transition duration-500 hover:text-white/80 ml-auto"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateStoryPage;
