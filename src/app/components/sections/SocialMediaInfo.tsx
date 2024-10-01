import React from "react";
import Image from "next/image";
import { socialMediaInfo } from "../assets";

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
      ImagePath: socialMediaInfo.lindinWhite,
    },
    {
      ImagePath: socialMediaInfo.social1,
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
      ImagePath: socialMediaInfo.bWhite,
    },
  ];

  return (
    <section className="w-full bg-whiteColor text-[#111827] relative flex justify-center">
      <div className="w-[90%] lg:w-[80%]">
        <div className="w-full text-center pt-16">
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
        <div className="pt-20 flex flex-wrap justify-center  gap-[12px] pb-36 lg:px-[300px] px-0 ">
          {socialMediaList.map((image, index) => {
            return (
              <Image
                key={index}
                src={image.ImagePath}
                alt="socail images"
                quality={100}
                className="w-[75px] h-[75px] cursor-pointer hover:scale-110 transition-all  "
              />
            );
          })}
        </div>
      </div>
      <Image
        src={socialMediaInfo.closeRectCirle}
        alt="vectorGroup3"
        quality={100}
        className="absolute 
        left-[10px] top-[5px]   
        xs:left-[10px] xs:top-[5px]     
        sm:left-[20px]  sm:top-[5px]    
        md:left-[40px]  md:top-[5px]    
        lg:left-[40px]  lg:top-[20px]    
        xl:left-[100px]  xl:top-[60px]   
        2xl:left-[117px] 2xl:top-[60px] 
          hidden md:block"
      />
      <Image
        src={socialMediaInfo.layerRectClose}
        alt="vectorGroup2"
        quality={100}
        className="absolute 
    right-[10px] top-[10px] 
    xs:right-[20px] xs:top-[5px] 
    sm:right-[20px] sm:top-[5px] 
    md:right-[40px] md:top-[5px] 
    lg:right-[40px] lg:top-[20px] 
    xl:right-[117px] xl:top-[60px] 
    2xl:right-[90px] 2xl:top-[50px]    hidden md:block"
      />
      <Image
        src={socialMediaInfo.closeCirleLayer}
        alt="vectorGroup1"
        quality={100}
        className="absolute 
         left-[10px] bottom-[5px]   
        xs:left-[10px] xs:bottom-[5px]     
        sm:left-[20px]  sm:bottom-[5px]    
        md:left-[40px]  md:bottom-[5px]    
        lg:left-[40px]  lg:bottom-[20px]    
        xl:left-[100px]  xl:bottom-[60px]   
        2xl:left-[117px] 2xl:bottom-[60px] 
          hidden md:block
        
        "
      />
      <Image
        src={socialMediaInfo.rectIccon}
        alt="Vector"
        quality={100}
        className="absolute right-[140px] bottom-[120px]   hidden md:block"
      />
    </section>
  );
};

export default SocialMediaInfo;
