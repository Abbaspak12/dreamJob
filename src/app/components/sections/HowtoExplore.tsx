import React from "react";
import { ourExplore } from "../assets";
import Image from "next/image";

const HowtoExplore = () => {
  return (
    <section className="w-full flex-wrap bg-[#f9fafb] text-liteBlack relative flex  pt-0 lg:pt-20 ">
      <div
        className="
        w-[100%] h-auto
       xs:h-auto xs:w-[100%]
       sm:h-auto sm:w-[100%]
       md:h-auto md:w-[100%]
       lg:h-[850px] lg:w-[50%]
       xl:h-[850px] xl:w-[50%]
       2xl:h-[850px] 2xl:w-[50%]
       hidden lg:block
    "
      >
        <Image
          src={ourExplore.aimHigh}
          alt="aimHigh"
          width={500}
          height={500}
          quality={100}
          className=" w-[100%] h-[100%]"
        />
        <Image
          src={ourExplore.multipleLayer}
          alt="vector8"
          quality={100}
          className="absolute 
          top-[71px] left-[60px] w-[112px] h-[60px]"
        />
      </div>

      <div
        className="
   relative 
   bg-[url('/aimHighBanner.png')] bg-cover bg-no-repeat bg-center
         xs:w-[100%]
         sm:w-[100%]
         md:w-[100%]
         lg:w-[50%] lg:bg-none  lg:pl-[141px] lg:pr-[162px] 
         xl:w-[50%]
         2xl:w-[50%]
      pl-[40px] pr-[40px] 
      "
      >
        <Image
          src={ourExplore.singleLayer}
          alt="vector8"
          quality={100}
          className="absolute left-[147px] lg:top-[129px] top-11
          
          "
        />
        <div className="w-full lg:pt-[175px] pt-20">
          <h1 className="text-[#111827] font-extrabold text-[36px] leading-10">
            How to Explore the Best Opportunities for Yourself?
          </h1>
          <p className="text-[#374151] font-normal leading-[28px] text-[18px] pt-10 ">
            Finding a Job that matches your skills & interest is a lot easier
            now, You can browse the Jobs & apply whenever & wherever you want.
          </p>
        </div>

        <div className="w-full flex items-center gap-[54px] pt-[40px] flex-wrap">
          <div className="flex gap-3 ">
            <Image
              src={ourExplore.location1}
              alt="location1"
              quality={100}
              className="w-[44px] h-[44px]"
            />
            <div className="w-full">
              <h1 className="text-[#374151] font-extrabold text-[36px] leading-10">
                5000+
              </h1>
              <p className="text-[#374151] font-normal leading-[28px] text-[18px]">
                Total Jobs
              </p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <Image
              src={ourExplore.pocket}
              alt="pocket"
              className="w-[44px] h-[44px]"
            />
            <div className="w-full">
              <h1 className="text-[#374151] font-extrabold text-[36px] leading-10">
                80+
              </h1>
              <p className="text-[#374151] font-normal leading-[28px] text-[18px]">
                Total Employees
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center gap-[54px] pt-[40px] flex-wrap">
          <div className="flex gap-3 ">
            <Image
              src={ourExplore.admin}
              alt="admin"
              quality={100}
              className="w-[44px] h-[44px]"
            />
            <div className="w-full">
              <h1 className="text-[#374151] font-extrabold text-[36px] leading-10">
                2000+
              </h1>
              <p className="text-[#374151] font-normal leading-[28px] text-[18px]">
                Total Seekers
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Image
              src={ourExplore.watch}
              alt="watch"
              quality={100}
              className="w-[44px] h-[44px]"
            />
            <div className="w-full">
              <h1 className="text-[#374151] font-extrabold text-[36px] leading-10">
                5 years
              </h1>
              <p className="text-[#374151] font-normal leading-[28px] text-[18px]">
                Total Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={ourExplore.circlesRectImage}
        alt="vector8"
        quality={100}
        className="absolute right-[81px] top-[115px] w-[106px] h-[104px] "
      />
    </section>
  );
};

export default HowtoExplore;
