"use client";

import { narratorData } from "@/utils/data";
import { Dispatch, SetStateAction } from "react";

interface NarratorFilterProps {
  narrator: string;
  setNarrator: Dispatch<SetStateAction<string>>;
}

const NarratorFilter = ({ narrator, setNarrator }: NarratorFilterProps) => {
  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">
        Available Narrators
      </h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        {narratorData.map((narratorArr) => (
          <button
            onClick={() => setNarrator(narratorArr.model)}
            key={narratorArr.model}
            className={`rounded-lg text-xl border px-8 py-4 ${
              narrator === narratorArr.model
                ? "text-white bg-primaryColor border-gray-600 hover:border-white hover:text-white"
                : "text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColor"
            } transition duration-500`}
          >
            {narratorArr.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NarratorFilter;
