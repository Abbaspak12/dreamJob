import React from "react";
import { ourExplore } from "./assets";
import Image from "next/image";

const HowtoExplore = () => {
  return (
    <section className="w-full bg-[#f9fafb] text-[#374151] relative flex  pt-40">
      <div className="w-[50%] h-[810px] relative">
        <Image
          src={ourExplore.aimHigh}
          alt="aimHigh"
          width={500}
          height={500}
          className="w-full "
        />
        <Image
          src={ourExplore.vector8}
          alt="vector8"
          className="absolute top-[71px] left-[60px] w-[112px] h-[60px]"
        />
      </div>

      <div className="w-[50%] relative pl-[141px] pr-[162px] ">
        <Image
          src={ourExplore.vector7}
          alt="vector8"
          className="absolute left-[147px] top-[129px]"
        />
        <div className="w-full pt-[175px]">
          <h1 className="text-[#111827] font-extrabold text-[36px] leading-10">
            How to Explore the Best Opportunites for Yourself?
          </h1>
          <p className="text-[#374151] font-normal leading-[28px] text-[18px] pt-10 ">
            Finding a Job that matches your skills & interest is a lot easier
            now, You can browse the Jobs & apply whenever & wherever you want.
          </p>
        </div>

        <div className="w-full flex items-center gap-[54px] pt-[40px]">
          <div className="flex gap-3">
            <Image
              src={ourExplore.location1}
              alt="location1"
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
          <div className="flex gap-3">
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

        <div className="w-full flex items-center gap-[54px] pt-[40px]">
          <div className="flex gap-3">
            <Image
              src={ourExplore.admin}
              alt="admin"
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
        src={ourExplore.vector6}
        alt="vector8"
        className="absolute right-[81px] top-[115px] w-[106px] h-[104px] "
      />
    </section>
  );
};

export default HowtoExplore;
