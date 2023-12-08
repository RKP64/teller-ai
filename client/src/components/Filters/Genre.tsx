"use client";

import { genres } from "@/utils/data";

const GenreFilter = () => {
  return (
    <div className="mt-40">
      <h1 className="text-white text-5xl font-bold mb-8">Available Genres</h1>
      <div className="gap-x-16 flex flex-wrap gap-y-4">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="rounded-lg text-xl border text-gray-200 border-gray-600 px-8 py-4 hover:border-primaryColor hover:text-primaryColor transition duration-500"
          >
            {genre.genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
