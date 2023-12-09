"use client";

import React from "react";
import { genresData } from "@/utils/Data";
import PageTitle from "@/utils/PageTitle";
import Slider from "react-slick";
import { genres } from "@/utils/Data";
import { genresSettings } from "@/utils/Data";

const Genres = () => {
  return (
    <section className="container mx-auto my-16 px-8 lg:px-8 relative pb-12">
      <div>
        <div className="flex flex-col">
          <h1 className="text-5xl text-primaryColor font-bold">Genres</h1>
          <p className="text-gray-400 max-w-[500px] mb-8 text-[17px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex gap-4 text-white">
            {genres.slice(0, 4).map((data, i) => (
              <div
                key={i}
                className="border rounded border-solid border-gray-400 px-3 py-2 hover:bg-primaryColor duration-300 text-white cursor-pointer">
                {data.genre}
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-white">
            {genres.slice(4, 7).map((data, i) => (
              <div
                key={i}
                className="border rounded border-solid border-gray-400 px-3 py-2 hover:bg-primaryColor duration-300 text-white cursor-pointer">
                {data.genre}
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-white">
            {genres.slice(7).map((data, i) => (
              <div
                key={i}
                className="border rounded border-solid border-gray-400 px-3 py-2 hover:bg-primaryColor duration-300 text-white cursor-pointer">
                {data.genre}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-32 mt-[-10rem]">
          <Slider {...genresSettings}>
            {genresData.map((data) => (
              <div>
                <img
                  className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
                  src={data.image}
                  alt=""
                />
                <h5 className="mb-2 text-xl text-white font-bold leading-none sm:text-2xl">
                  {data.title}
                </h5>
                <p className="text-white">{data.paragraph}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Genres;
