"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { headerSettings } from "@/utils/Data";
import { headerData } from "@/utils/Data";

const Header = () => {
  return (
    <section className="container mx-auto my-16 px-8 lg:px-8 relative">
      <div className="grid grid-cols-2">
        <div className="pb-12 flex flex-col pt-8">
          <h1 className="text-white text-7xl mb-4 font-bold max-w-[451px] leading-[1.2]">
            This is <span className="text-primaryColor">text</span> example
          </h1>
          <p className="text-gray-400 leading-[1.7] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <Link
              href={"/"}
              className="text-white border border-solid border-primaryColor p-4 hover:bg-primaryColor duration-300 mt-8">
              Generate story
            </Link>
          </div>
        </div>
        <div className="px-[90px] ml-16 mb-12">
          <Slider {...headerSettings}>
            {headerData.map((data) => {
              let title = data.title;
              let words = title.split(" ");
              let lastWord = words[words.length - 1];
              return (
                <div
                  key={data.id}
                  className="text-white border border-solid border-gray-400 p-[20px] rounded-lg">
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
    </section>
  );
};

export default Header;
