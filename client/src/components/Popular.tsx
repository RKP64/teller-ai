"use client";

import React from "react";
import { popularSettings } from "@/utils/data";
import Slider from "react-slick";
import Image from "next/image";
import { IStory } from "@/interfaces/IStory";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface PopularProps {
  stories: IStory[] | undefined;
}

const Popular = ({ stories }: PopularProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="container mx-auto px-8 my-24 lg:px-8 relative"
      id="popular"
    >
      <div
        className="flex flex-col"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="linear"
      >
        <h1 className="text-5xl text-primaryColor font-bold">Popular</h1>
        <p className="text-gray-400 max-w-[500px] mb-8 text-[17px] mt-4">
          Browse & discover narratives in demand and embark on a captivating
          storytelling expedition.
        </p>
      </div>
      <Slider {...popularSettings}>
        {stories?.map((data: IStory) => (
          <Link
            href={`/story/${data._id}`}
            aria-label="View Item"
            key={data._id}
          >
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl m-2">
              <Image
                src={data.scenarios[0].image}
                className="object-cover w-full h-56 md:h-64 xl:h-80 opacity-80"
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
