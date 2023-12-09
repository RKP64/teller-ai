"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { headerSettings } from "@/utils/data";
import { headerData } from "@/utils/data";
import { IStory } from "@/interfaces/IStory";
import { shuffle } from "@/utils/shuffle";

interface HeaderProps {
  stories: IStory[] | undefined;
}

const Header = ({ stories }: HeaderProps) => {
  const shuffledStories = shuffle(stories);
  const words = shuffledStories && shuffledStories[0].name.split(" ");

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${
          shuffledStories && shuffledStories[0].scenarios[0].image
        })`,
      }}>
      <div id="opacity"></div>
      <div className="container mx-auto pt-16 mb-16 px-8 lg:px-8 relative">
        <div className="grid grid-cols-2">
          <div className="pb-12 flex flex-col pt-8">
            <h1 className="text-white text-7xl mb-4 font-bold max-w-[500px] leading-[1.2]">
              {words &&
                words.map((word: string, index: number) => (
                  <span
                    key={index}
                    className={index === 1 ? "text-primaryColor" : ""}>
                    {word}
                    {index !== words.length - 1 && " "}{" "}
                  </span>
                ))}
            </h1>
            <p className="text-gray-400 leading-[1.7] mb-12">
              {shuffledStories && shuffledStories[0].summary}
            </p>
            <div>
              <Link
                href={"/"}
                className="text-white border border-solid border-primaryColor p-4 hover:bg-primaryColor duration-300 mt-8">
                Generate story
              </Link>
            </div>
          </div>
          <div className="pl-[90px] ml-16 mb-12">
            <Slider {...headerSettings}>
              {headerData.map((data) => {
                let title = data.title;
                let words = title.split(" ");
                let lastWord = words[words.length - 1];
                return (
                  <div
                    id="header-item"
                    key={data.id}
                    className="text-white p-[20px] rounded-lg">
                    <div className="flex flex-col gap-4 mb-6">
                      <h3 className="text-2xl font-bold">
                        {data.title.split(" ")[0]}{" "}
                        <span className="text-primaryColor">{lastWord}</span>
                      </h3>
                      <p className="text-gray-400">{data.date}</p>
                      <p className="text-gray-400">{data.time}</p>
                    </div>
                    <div className="flex gap-2 flex-col mb-4">
                      <h3 className="font-bold text-2xl text-primaryColor">
                        Reviews
                      </h3>
                      <div className="flex gap-4">
                        {data.stars?.map((star, i) => (
                          <div key={i}>
                            <FaStar />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-bold text-2xl text-primaryColor">
                        Storyline
                      </h3>
                      <p className="mt-4">{data.pararagraph}</p>

                      <h3 className="font-bold text-2xl mt-4 text-primaryColor">
                        Gallery
                      </h3>
                      <div className="flex gap-4 justify-center items-center py-5">
                        <div className="flex gap-4">
                          {data.gallery?.map((gallery, i) => (
                            <div key={i}>
                              <Image
                                src={gallery.image}
                                alt="story"
                                width={1000}
                                height={1000}
                                style={{
                                  width: "100px",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
