"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Slider from "react-slick";
import { genres } from "@/utils/data";
import { genresSettings } from "@/utils/data";
import Image from "next/image";
import { IStory } from "@/interfaces/IStory";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

interface GenresProps {
  stories: IStory[] | undefined;
  selectedGenre: string;
  setSelectedGenreFilter: Dispatch<SetStateAction<string>>;
}

const Genres = ({
  stories,
  selectedGenre,
  setSelectedGenreFilter,
}: GenresProps) => {
  const maxLength = 333;
  useEffect(() => {
    AOS.init();
  }, []);

  const handleGenreClick = (genre: any) => {
    setSelectedGenreFilter(genre);
  };

  return (
    <section className="container mx-auto my-16 px-8 lg:px-8 relative pb-12">
      <div>
        <div className="flex flex-col" data-aos="fade-up">
          <h1 className="text-5xl text-primaryColor font-bold">Genres</h1>
          <p className="text-gray-400 max-w-[500px] mb-8 text-[17px] mt-4">
            Explore Teller&apos;s genre options: select one, weave a tale. Genre
            choices shape stories & create worlds.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex flex-wrap gap-4 text-white">
            {genres.slice(0, 4).map((data, i) => (
              <div
                key={i}
                className={`border rounded border-solid border-gray-400 px-3 py-2 hover:bg-primaryColor duration-300 text-white cursor-pointer ${
                  selectedGenre === data.genre ? "bg-primaryColor" : ""
                }`}
                onClick={handleGenreClick.bind(null, data.genre)}
              >
                {data.genre}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-white">
            {genres.slice(4, 7).map((data, i) => (
              <div
                key={i}
                className={`border rounded border-solid border-gray-400 px-3 py-2 hover:bg-primaryColor duration-300 text-white cursor-pointer ${
                  selectedGenre === data.genre ? "bg-primaryColor" : ""
                }`}
                onClick={handleGenreClick.bind(null, data.genre)}
              >
                {data.genre}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-white">
            {genres.slice(7).map((data, i) => (
              <div
                key={i}
                className={`border rounded border-solid border-gray-400 px-3 py-2 hover:bg-primaryColor duration-300 text-white cursor-pointer ${
                  selectedGenre === data.genre ? "bg-primaryColor" : ""
                }`}
                onClick={handleGenreClick.bind(null, data.genre)}
              >
                {data.genre}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 lg:ml-32 lg:mt-[-10rem]">
          <Slider {...genresSettings}>
            {stories?.map((data: IStory) => {
              return (
                <Link key={data._id} href={`/story/${data._id}`}>
                  <Image
                    src={data.scenarios[0].image}
                    className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96 opacity-80"
                    alt={data.name}
                    height={1000}
                    width={1000}
                  />
                  <h5 className="mb-2 text-xl text-white font-bold leading-none sm:text-2xl">
                    {data.name}
                  </h5>
                  <p className="text-white">
                    {data.summary.length > maxLength
                      ? `${data.summary.substring(0, maxLength)}...`
                      : data.summary}
                  </p>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Genres;
