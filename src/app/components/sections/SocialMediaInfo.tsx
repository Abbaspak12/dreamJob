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
        className="absolute 
        left-[10px] top-[5px]   w-[70px]  h-[50px]
        xs:left-[10px] xs:top-[5px]     xs:w-[80px]   xs:h-[50px]
        sm:left-[20px]  sm:top-[5px]    sm:w-[90px] sm:h-[60px]
        md:left-[40px]  md:top-[5px]    md:w-[100px] md:h-[70px]
        lg:left-[40px]  lg:top-[20px]    lg:w-[120px] lg:h-[120px]
        xl:left-[100px]  xl:top-[60px]   xl:w-[121px] xl:h-[138px]
        2xl:left-[117px] 2xl:top-[60px] 2xl:w-[121px] 2xl:h-[138px]
        
    
"
      />
      <Image
        src={socialMediaInfo.vectorGroup2}
        alt="vectorGroup2"
        className="absolute 
    right-[10px] top-[10px] w-[70px] h-[50px]
    xs:right-[20px] xs:top-[5px] xs:w-[80px] xs:h-[60px]
    sm:right-[20px] sm:top-[5px] sm:w-[90px] sm:h-[60px]
    md:right-[40px] md:top-[5px] md:w-[100px] md:h-[70px]
    lg:right-[40px] lg:top-[20px] lg:w-[120px] lg:h-[120px]
    xl:right-[117px] xl:top-[60px] xl:w-[121px] xl:h-[138px]
    2xl:right-[90px] 2xl:top-[50px] 2xl:w-[180px] 2xl:h-[110px]

       
        
        
        "
      />
      <Image
        src={socialMediaInfo.vectorGroup1}
        alt="vectorGroup1"
        className="absolute 
         left-[10px] bottom-[5px]   w-[70px]  h-[50px]
        xs:left-[10px] xs:bottom-[5px]     xs:w-[80px]   xs:h-[50px]
        sm:left-[20px]  sm:bottom-[5px]    sm:w-[90px] sm:h-[60px]
        md:left-[40px]  md:bottom-[5px]    md:w-[100px] md:h-[70px]
        lg:left-[40px]  lg:bottom-[20px]    lg:w-[120px] lg:h-[120px]
        xl:left-[100px]  xl:bottom-[60px]   xl:w-[121px] xl:h-[138px]
        2xl:left-[117px] 2xl:bottom-[60px] 2xl:w-[121px] 2xl:h-[138px]
        
        
        "
      />
      <Image
        src={socialMediaInfo.Vector}
        alt="Vector"
        className="absolute right-[140px] bottom-[120px] h-[17px] w-[18px]"
      />
    </section>
  );
};

export default SocialMediaInfo;
