"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Pagination } from "@nextui-org/react";
import { IStory } from "@/interfaces/IStory";
import useStories from "../hooks/useStory";

const StoriesPage = () => {
  const { stories, storiesLoading } = useStories();
  return (
    <>
      <Navbar />
      <section className="container mx-auto mt-16 px-8 lg:px-8 relative pb-12">
        <div className="flex flex-col">
          <h1 className="text-5xl text-primaryColor font-bold">All Stories</h1>
        </div>
        <div className="grid grid-cols-3 mt-16 gap-8">
          {stories &&
            stories?.map((storie: IStory) => (
              <a
                key={storie._id}
                href="/storie/storieID"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={storie.scenarios[0].image}
                  alt=""
                  width={100}
                  height={100}
                  style={{
                    width: "auto",
                  }}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {storie.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {storie.scenarios[0].text}
                  </p>
                </div>
              </a>
            ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center mt-6 pb-12">
          <Pagination total={10} initialPage={1} color={"success"} />
        </div>
      </section>
    </>
  );
};

export default StoriesPage;
