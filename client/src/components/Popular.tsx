"use client";

import React from "react";
import { popularData } from "@/utils/data";
import { popularSettings } from "@/utils/data";
import Slider from "react-slick";
import Image from "next/image";
import { IStory } from "@/interfaces/IStory";
import Link from "next/link";

interface PopularProps {
  stories: IStory[] | undefined;
}

const Popular = ({ stories }: PopularProps) => {
  return (
    <section className="container mx-auto px-8 my-24 lg:px-8 relative">
      <div className="flex flex-col">
        <h1 className="text-5xl text-primaryColor font-bold">Popular</h1>
        <p className="text-gray-400 max-w-[500px] mb-8 text-[17px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <Slider {...popularSettings}>
        {stories?.map((data: IStory) => (
          <Link href="/" aria-label="View Item" key={data._id}>
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl m-2">
              <Image
                src={data.scenarios[0].image}
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                height={1000}
                width={1000}
                alt={data.name}
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  {data.name}
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  {data.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default Popular;
