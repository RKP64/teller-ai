import React from "react";
import { genres } from "@/utils/Data";
import PageTitle from "@/utils/PageTitle";

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
        <div className="mx-32">
          <div
            id="geners-carousel"
            className="text-white px-[53px] border border-solid border-gray-400">
            <div id="opacity"></div>
            <div className="flex">
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold">Traktor tom</h3>
                <span className="text-gray-400 text-xl mb-4">Dječiji</span>
              </div>
              <div className="flex items-center">
                <span className="text-primaryColor">8-12</span>
              </div>
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati ipsa cupiditate neque doloribus quod porro, quas ad
              aperiam excepturi quis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;
