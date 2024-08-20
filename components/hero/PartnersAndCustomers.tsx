"use client";
import { useKeenSlider } from "keen-slider/react";
import brandOne from "../../public/assets/logos/brand_one.svg";
import brandTwo from "../../public/assets/logos/brand_two.svg";
import brandThree from "../../public/assets/logos/brand_three.svg";
import Image from "next/image";

const PartnersAndCustomers = () => {
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
    <div className="w-full bg-[#52516580] flex flex-col items-center overflow-hidden py-3">
      <p>
        Trusted by <span className="text-brandColor text-xl">50%</span> Partners
        & Customers
      </p>
      <div
        ref={sliderRef}
        className="keen-slider my-5 z-20 md:px-[4em] max-w-[80em] mx-auto flex items-center overflow-x-hidden"
      >
        <div className="keen-slider__slide flex gap-6 z-20">
          <Image src={brandOne} alt="" />
          <Image src={brandTwo} alt="" />
          <Image src={brandOne} alt="" />
          <Image src={brandTwo} alt="" />
          <Image src={brandThree} alt="" />
        </div>
        <div className="keen-slider__slide flex gap-6 z-20">
          <Image src={brandOne} alt="" />
          <Image src={brandTwo} alt="" />
          <Image src={brandOne} alt="" />
          <Image src={brandTwo} alt="" />
          <Image src={brandThree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnersAndCustomers;
