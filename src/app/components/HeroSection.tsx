import React from "react";
import { heroSection } from "./assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full  text-[#374151] bg-[#f9fafb] relative ">
      <div className=" w-full flex box-content">
        <div className="w-[50%] h-[716px] bg-[#1F2937] relative">
          <div className="pl-[160px] pr-[133px] pt-[128px]">
            <h1 className="text-[#FFFFFF] font-black text-[60px] leading-[60px]  ">
              Your Dream Job is waiting for you!
            </h1>
            <p className="text-[#FFFFFF] font-normal leading-[28px] text-[18px] pt-8 ">
              Finding a Job that matches your skills & interest is a lot easier
              now, You can browse the Jobs & apply whenever & wherever you want.
            </p>
            <div className="w-full flex pt-[34px] gap-[32px]">
              '
              <label className="inline-flex items-center cursor-pointer">
                <span className="text-[#FFFFFF] font-normal text-[18px] pr-4">
                  Remote
                </span>
                <input type="checkbox" value="" className="sr-only peer " />
                <div
                  className="relative w-[50px] h-6 bg-[#FFFFFF] peer-focus:outline-none peer-focus:ring-4
                   rounded-full peer
                  dark:bg-[#FFFFFF] peer-checked:after:translate-x-full
                   rtl:peer-checked:after:-translate-x-full peer-checked:after:border-green-400 after:content-[''] 
                   after:absolute after:top-[2px] after:start-[2px] after:bg-green-400  after:border-gray-300 
                   after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                   "
                ></div>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <span className="text-[#FFFFFF] font-normal text-[18px] pr-4">
                  Onsite
                </span>
                <input type="checkbox" value="" className="sr-only peer " />
                <div
                  className="relative w-[50px] h-6 bg-[#FFFFFF] peer-focus:outline-none peer-focus:ring-4
                   rounded-full peer
                  dark:bg-[#FFFFFF] peer-checked:after:translate-x-full
                   rtl:peer-checked:after:-translate-x-full peer-checked:after:border-green-400 after:content-[''] 
                   after:absolute after:top-[2px] after:start-[2px] after:bg-green-400  after:border-gray-300 
                   after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                   "
                ></div>
              </label>
            </div>
          </div>
          <Image
            src={heroSection.vector4}
            alt="aimHigh"
            className=" absolute  bottom-[98px] left-[134px] "
            quality={100}
          />
          <Image
            src={heroSection.vector4}
            alt="vector4"
            className=" absolute  top-[96px] right-[-55px] z-10 "
            quality={100}
          />
          <Image
            src={heroSection.vectorGroup13}
            alt="aimHigh"
            className=" absolute  top-[76px] left-[142px] z-10 "
            quality={100}
          />
<div className="absolute bg-[#FFFFFF] h-[112px] bottom-[-58px] z-50 left-[161px] w-[1400px] shadow-lg rounded-lg">
    
</div>
        </div>
        <div className="w-[50%] h-[850px] bg-[#1F2937] ">
          <Image
            src={heroSection.heroImage}
            alt="aimHigh"
            width={500}
            height={500}
            className="w-full  "
            quality={100}
          />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
