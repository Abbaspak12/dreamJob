import React from "react";
import Image from "next/image";
import { socialMediaInfo } from "./assets";

const SocialMediaInfo = () => {
  return (
    <section className="w-full bg-[#f9fafb] text-[#111827] relative">
      <div className="w-full px-40">
        <div className="w-full text-center pt-40">
          <h1 className="text-[#111827] font-extrabold text-3xl leading-10 ">
            We’re available on more than 20+
          </h1>
          <h1 className="text-[#111827] font-extrabold text-3xl leading-10">
            Social Media Companies World Wide!
          </h1>
          <p className="text-[#374151] font-normal leading-[18px] text-[18px] pt-9">
            We’ve all the required Catagories that you can Explore from
          </p>
        </div>
        <div className="pt-20 flex flex-wrap justify-center  gap-[30px]">
          <Image
            src={socialMediaInfo.bWhite}
            alt="bWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.socail2}
            alt="social2"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.googleWhite}
            alt="googleWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.facebookwhite}
            alt="facebookwhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.tuttorwhite}
            alt="googleWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.lindinWhite}
            alt="tuttorwhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.instagramWhite}
            alt="instagramWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="pt-5 flex flex-wrap justify-center  gap-[30px] pb-40 ">
          <Image
            src={socialMediaInfo.social1}
            alt="social1"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.tuttorwhite}
            alt="tuttorwhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.pWhite}
            alt="pWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.instagramWhite}
            alt="instagramWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={socialMediaInfo.bWhite}
            alt="bWhite"
            className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all"
          />
        </div>
      </div>
      <Image
        src={socialMediaInfo.vectorGroup3}
        alt="vectorGroup3"
        className="absolute left-[117px] top-[124px] "
      />
      <Image
        src={socialMediaInfo.vectorGroup2}
        alt="vectorGroup2"
        className="absolute right-[96px] top-[124px]"
      />
      <Image
        src={socialMediaInfo.vectorGroup1}
        alt="vectorGroup1"
        className="absolute left-[112px] bottom-[54px]"
      />
      <Image
        src={socialMediaInfo.Vector}
        alt="Vector"
        className="absolute right-[148px] bottom-[131px]"
      />
    </section>
  );
};

export default SocialMediaInfo;
