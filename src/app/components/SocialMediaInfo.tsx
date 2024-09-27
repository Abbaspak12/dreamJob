import React from "react";
import Image from "next/image";
import { socialMediaInfo } from "./assets";

const SocialMediaInfo = () => {
  const socialMediaList = [
    {
      ImagePath: socialMediaInfo.bWhite,
    },
    {
      ImagePath: socialMediaInfo.socail2,
    },
    {
      ImagePath: socialMediaInfo.googleWhite,
    },
    {
      ImagePath: socialMediaInfo.facebookwhite,
    },
    {
      ImagePath: socialMediaInfo.tuttorwhite,
    },
    {
      ImagePath: socialMediaInfo.tuttorwhite,
    },
    {
      ImagePath: socialMediaInfo.lindinWhite,
    },
    {
      ImagePath: socialMediaInfo.lindinWhite,
    },
    {
      ImagePath: socialMediaInfo.instagramWhite,
    },
    {
      ImagePath: socialMediaInfo.tuttorwhite,
    },
    {
      ImagePath: socialMediaInfo.pWhite,
    },
    {
      ImagePath: socialMediaInfo.instagramWhite,
    },
    {
      ImagePath: socialMediaInfo.bWhite,
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] text-[#111827] relative flex justify-center">
      <div className="w-[90%] lg:w-[80%]">
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
        <div className="pt-20 flex flex-wrap justify-center  gap-[30px] pb-36">
          {socialMediaList.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.ImagePath}
                alt="socail images"
                quality={100}
                className=" w-[91px] h-[91px] cursor-pointer hover:scale-110 transition-all "
              />
            );
          })}
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
