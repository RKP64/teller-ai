"use client";

import { ageRange } from "@/utils/data";
import { Dispatch, SetStateAction } from "react";

interface AgeRangeFilterProps {
  age: string;
  setAgeRange: Dispatch<SetStateAction<string>>;
}

const AgeRangeFilter = ({ age, setAgeRange }: AgeRangeFilterProps) => {
  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">
        Available Age Ranges
      </h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        {ageRange.map((ageArr) => (
          <button
            onClick={() => setAgeRange(ageArr)}
            key={ageArr}
            className={`rounded-lg text-xl border px-8 py-4 ${
              age === ageArr
                ? "text-white bg-primaryColor border-gray-600 hover:border-white hover:text-white"
                : "text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColor"
            } transition duration-500`}
          >
            {ageArr}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeRangeFilter;
