"use client";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { whatOurUserSayData } from "@/data/whatOurUsersSay.data";

const WhatOurUsersSay = () => {
  const animation = { duration: 50000, easing: (t: number) => t };
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="lg:px-[120px] px-10 py-[61.74px]">
      <span className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-semibold text-[#121212] md:text-[32px] text-[28px] text-center tracking-wide">
          What Our Users Say About Us
        </h1>
        <p className="tracking-wide text-base text-center">
          These testimonials showcase Deximplis dedication to driving
        </p>
      </span>
      <div
        ref={sliderRef}
        className="keen-slider my-5 z-20 md:px-[4em] max-w-[80em] mx-auto flex flex-col items-center gap-5 overflow-x-hidden"
      >
        <div className="keen-slider__slide flex gap-6 z-20">
          {whatOurUserSayData[0].map((data, index) => (
            <div
              className="p-7 rounded-xl shadow-lg flex flex-col gap-[20px] w-full text-[#555555]"
              key={index}
            >
              <div className="flex items-start justify-start gap-[12px] w-[30rem]">
                <Image src={data.img} alt="" className="w-[50px]" />
                <span className="flex flex-col items-start gap-1 ">
                  <h5 className="text-[20px]">{data.name}</h5>
                  <p className="text-[16px]">{data.occupation}</p>
                </span>
              </div>
              <p className="text-[16px] w-full">{data.review}</p>
            </div>
          ))}
        </div>
        <div className="keen-slider__slide flex gap-6 z-20">
          {whatOurUserSayData[1].map((data, index) => (
            <div
              className="p-7 rounded-xl shadow-lg flex flex-col gap-[20px] w-full text-[#555555]"
              key={index}
            >
              <div className="flex items-start justify-start gap-[12px] w-[30rem]">
                <Image src={data.img} alt="" className="w-[50px]" />
                <span className="flex flex-col items-start gap-1 ">
                  <h5 className="text-[20px]">{data.name}</h5>
                  <p className="text-[16px]">{data.occupation}</p>
                </span>
              </div>
              <p className="text-[16px] w-full">{data.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurUsersSay;
