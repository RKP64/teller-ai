"use client";

import { narratorData } from "@/utils/data";
import { Dispatch, SetStateAction, useState } from "react";
import { Howl } from "howler";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircleSharp } from "react-icons/io5";

interface NarratorFilterProps {
  narrator: string;
  setNarrator: Dispatch<SetStateAction<string>>;
}

const NarratorFilter = ({ narrator, setNarrator }: NarratorFilterProps) => {
  const [currentSound, setCurrentSound] = useState<Howl | null>(null);

  const playNarratorVoice = (model: string) => {
    if (currentSound) {
      currentSound.stop();
    }

    const sound = new Howl({
      src: [`/narrators/${model}.wav`],
      autoplay: true,
      volume: 1.0,
      loop: false,
      onend: () => {
        setCurrentSound(null);
      },
    });

    setCurrentSound(sound);
    sound.play();
  };

  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">
        Available Narrators
      </h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        {narratorData.map((narratorArr) => (
          <button
            onClick={() => {
              if (narrator === narratorArr.model) {
                setNarrator("");
                if (currentSound) {
                  currentSound.stop();
                }
              } else {
                setNarrator(narratorArr.model);
                playNarratorVoice(narratorArr.model);
              }
            }}
            key={narratorArr.model}
            className={`flex items-center rounded-lg text-xl border px-8 py-4 ${
              narrator === narratorArr.model
                ? "text-white bg-primaryColor border-gray-600 hover:border-white hover:text-white"
                : "text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColor"
            } transition duration-500`}
          >
            {narrator !== narratorArr.model ? (
              <IoIosPlayCircle className="mr-2 h-6 w-6" />
            ) : (
              <IoPauseCircleSharp className="mr-2 h-6 w-6" />
            )}
            {narratorArr.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NarratorFilter;
