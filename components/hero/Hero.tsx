"use client";
import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import PartnersAndCustomers from "./PartnersAndCustomers";
import HeroOne from "./HeroOne";
import HeroTwo from "./HeroTwo";

const Hero = () => {
  const [showHeroOne, setShowHeroOne] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowHeroOne((prevShowHeroOne) => !prevShowHeroOne);
    }, 3000); // Toggle every 3 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero w-full flex flex-col ">
        <div className="h-screen w-full flex flex-col items-start justify-center p-[22px] lg:px-[120px] px-10 relative">
          <div className="bg-gradient-to-b from-[#020024]/50 via-[#020024] to-[#020024] opacity-50 absolute object-cover inset-0" />
          <div className="relative w-full h-full flex items-center">
            <div
              className={`absolute transition-opacity duration-1000 ease-in-out ${
                showHeroOne ? "opacity-100" : "opacity-0"
              }`}
            >
              <HeroOne />
            </div>
            <div
              className={`absolute transition-opacity duration-1000 ease-in-out ${
                showHeroOne ? "opacity-0" : "opacity-100"
              }`}
            >
              <HeroTwo />
            </div>
          </div>
        </div>
        <PartnersAndCustomers />
      </div>
    </>
  );
};

export default Hero;
