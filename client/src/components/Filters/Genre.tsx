"use client";

import { genres } from "@/utils/data";
import { Dispatch, SetStateAction } from "react";

interface GenreFilter {
  genre: string;
  setGenre: Dispatch<SetStateAction<string>>;
}

const GenreFilter = ({ genre, setGenre }: GenreFilter) => {
  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">Available Genres</h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        {genres.map((genreArr) => (
          <button
            key={genreArr.id}
            onClick={() => setGenre(genreArr.genre)}
            className={`rounded-lg text-xl border px-8 py-4 ${
              genre === genreArr.genre
                ? "text-white bg-primaryColor border-gray-600 hover:border-white hover:text-white"
                : "text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColor"
            } transition duration-500`}
          >
            {genreArr.genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
