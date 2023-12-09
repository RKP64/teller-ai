"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { headerSettings } from "@/utils/data";
import { IScenario, IStory } from "@/interfaces/IStory";
import { shuffle } from "@/utils/shuffle";
import { calculateReadingTime } from "@/utils/utils";
import { IoPlaySharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeaderProps {
  stories: IStory[] | undefined;
}

const Header = ({ stories }: HeaderProps) => {
  const shuffledStories = shuffle(stories);
  const words = shuffledStories && shuffledStories[0]?.name?.split(" ");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="relative"
      style={{
        backgroundImage: `url(${
          shuffledStories && shuffledStories[0]?.scenarios[0]?.image
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}>
      <div id="opacity"></div>
      <div className="container mx-auto pt-4 md:pt-16 mb-16 px-8 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="pb-12 flex flex-col pt-8">
            <h1
              data-aos="fade-right"
              className="text-white text-5xl md:text-5xl xl:text-7xl mb-4 font-bold max-w-[500px] leading-[1.2]">
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
              {shuffledStories && shuffledStories[0]?.scenarios[0]?.text}
            </p>
            <div>
              <Link
                href={`/story/${shuffledStories && shuffledStories[0]?._id}`}
                className="text-white font-bold bg-gray-400/80 flex items-center max-w-max rounded-xl shadow-lg shadow-gray-400 p-4 hover:bg-gray-400 duration-300">
                <IoPlaySharp className="mr-1 font-bold w-6 h-6" /> Play a story
              </Link>
            </div>
          </div>
          <div className="lg:ml-16 xl:pl-[63px] 2xl:pl-[180px] xl:ml-16 mb-6 xl:mb-12">
            <Slider {...headerSettings}>
              {shuffledStories &&
                shuffledStories.map((data: IStory) => {
                  let title = data.name;
                  let words = title.split(" ");
                  const createdAt = new Date(data.createdAt);
                  const date = createdAt.toISOString().split("T")[0];

                  const allScenarios = shuffledStories.flatMap(
                    (story: IStory) =>
                      story.scenarios.map(
                        (scenario: IScenario) => scenario?.text
                      )
                  );

                  const allTexts = allScenarios.join(" ");
                  const totalReadingTime = calculateReadingTime(allTexts);

                  return (
                    <Link
                      key={data._id}
                      id="header-item"
                      href={`/story/${data._id}`}
                      className="text-white border border-solid border-[#142630] p-[20px] rounded-lg">
                      <div className="flex flex-col gap-4 mb-6">
                        <h3 className="text-2xl font-bold">
                          {words &&
                            words.map((word: string, index: number) => (
                              <span
                                key={index}
                                className={
                                  index === 1 ? "text-primaryColor" : ""
                                }>
                                {word}
                                {index !== words.length - 1 && " "}{" "}
                              </span>
                            ))}
                        </h3>
                        <p className="text-gray-400">Date: {date}</p>
                        <p className="text-gray-400">
                          Reading time: {totalReadingTime} minutes
                        </p>
                      </div>
                      <div className="flex gap-2 flex-col mb-4">
                        <h3 className="font-bold text-2xl text-primaryColor">
                          Reviews
                        </h3>
                        <div className="flex gap-4">
                          {[0, 1, 2, 3, 4].map((star, i) => (
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
                        <p className="mt-4">{data.scenarios[0].text}</p>

                        <h3 className="font-bold text-2xl mt-4 text-primaryColor">
                          Gallery
                        </h3>
                        <div className="flex gap-4 justify-center items-center py-5">
                          <div className="flex gap-4">
                            {data.scenarios
                              ?.slice(0, 3)
                              .map((gallery: IScenario, i: number) => (
                                <div key={i}>
                                  <Image
                                    src={gallery.image}
                                    alt="story"
                                    width={1000}
                                    height={1000}
                                    className="cursor-pointer"
                                    style={{
                                      width: "160px",
                                      height: "130px",
                                    }}
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </Link>
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
