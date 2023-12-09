import React from "react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { storyData } from "@/utils/data";

const page = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/stories/image_a_day_at_the_park.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative">
      <div id="opacity"></div>
      <div className="container mx-auto px-8 lg:px-8 relative">
        <div className="w-full h-full flex justify-center items-center flex-col gap-20">
          <div className="mt-16 w-full">
            <Link href="/">
              <IoReturnUpBackOutline className="h-16 w-16 text-primaryColor cursor-pointer z-30" />
            </Link>
          </div>
          <div className="w-full">
            {storyData.map((data, i) => {
              const length = data.paragraph.length;
              const midpoint = Math.ceil(length / 2);
              const firstPart = data.paragraph.slice(0, midpoint);
              const secondPart =
                data.paragraph.slice(midpoint).charAt(0).toUpperCase() +
                data.paragraph.slice(midpoint);
              return (
                <div key={i}>
                  <h2 className="text-5xl font-bold">
                    {data.title.split(" ")[0]}{" "}
                    <span className="text-primaryColor">
                      {data.title.split(" ")[1]}
                    </span>
                  </h2>

                  <div className="mt-12 border backdrop-blur-md border-solid border-black p-[33px] rounded-[15px]">
                    <p className="text-[26px] leading-normal">{firstPart}</p>
                    <p className="text-[26px] leading-normal mt-4">
                      {secondPart}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between w-full mb-20">
            <div>
              <button
                className={`rounded-lg text-xl border px-8 py-4 text-gray-400 border-gray-600 hover:border-primaryColor hover:text-primaryColortransition duration-500`}>
                Previous
              </button>
            </div>
            <div>
              <button className="bg-primaryColor text-white px-14 py-4 text-2xl rounded-lg shadow-md shadow-primaryColor hover:bg-primaryColor/80 transition duration-500 hover:text-white/80 ml-auto">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
