"use client";

import React from "react";
import { stepData } from "@/utils/data";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Step = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="container mx-auto my-24 px-8 lg:px-8 relative pb-12">
      <div
        className="flex flex-col"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-easing="linear">
        <h1 className="text-5xl text-primaryColor font-bold">Steps</h1>
        <p className="text-gray-400 max-w-[500px] mb-8 text-[17px] mt-4">
          Introduction: Crafting a story is a journey in three steps: choose a
          genre, define the age range, and set a creative prompt.
        </p>
      </div>
      <div>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            {stepData.map((step, i) => (
              <div
                className="flex"
                key={i}
                data-aos="fade-up"
                data-aos-duration={`${step.duration}`}
                data-aos-easing="linear">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <svg
                        className="w-4 text-white"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24">
                        <line
                          fill="none"
                          strokeMiterlimit="10"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                        />
                        <polyline
                          fill="none"
                          strokeMiterlimit="10"
                          points="19,15 12,22 5,15"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold">{step.title}</p>
                  <p className="text-white">{step.paragraph}</p>
                </div>
              </div>
            ))}

            <div
              className="flex"
              data-aos="fade-up"
              data-aos-duration="5000"
              data-aos-easing="linear">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-6 text-white"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <polyline
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="pt-1"
                data-aos="fade-up"
                data-aos-duration="5000"
                data-aos-easing="linear">
                <p className="mb-2 text-lg font-bold text-white">Success</p>
                <p className="text-white" />
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
