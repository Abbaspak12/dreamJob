import React from "react";
import { heroSection } from "../assets";
import { CustomSwitch, CustomSelect } from "../ui_Elements";
import SearchLocation from "./SearchLocation";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className=" flex flex-wrap
     bg-[#f9fafb] lg:text-whiteColor text-liteBlack w-full 
       relative box-border"
    >
      <div
        className="w-[100%]  h-[650px]
     xs:h-[600px] xs:w-[100%]
     sm:h-[600px] sm:w-[100%]
     md:h-[600px] md:w-[100%]
     lg:h-[720px] lg:w-[50%]
     xl:h-[720px] xl:w-[50%]
     2xl:h-[720px] 2xl:w-[50%]
   bg-liteBlack relative flex justify-center
     lg:bg-none
     bg-[url('/heroImageBanner.png')]
    bg-cover bg-no-repeat bg-center
       "
      >
        <div
          className="
        w-[95%]
        xs:w-[90%]
        sm:w-[90%]
        md:w-[80%]
       lg:w-[60%]
       2xl:w-[60%]
      pt-[80px] 
        2xl:pt-[140px]"
        >
          <h1
            className=" font-black 
          text-[24px] leading-[24px] 
           sm:text-[25px] sm:leading-[25px]
           md:text-[32px] md:leading-[32px]
          lg:text-[45px] lg:leading-[45px] 
          xl:text-[55px] xl:leading-[55px] 
           2xl:text-[60px]  2xl:leading-[60px] "
          >
            Your Dream Job is waiting for you!
            <Image
              src={heroSection.textDotIcon}
              alt="aimHigh"
              className="inline ml-2 mt-5 "
              quality={100}
            />
          </h1>
          <p
            className=" 
          font-normal
           text-[16px] leading-[24px]
           sm:text-[16px] sm:leading-[24px]
           md:text-[16px] md:leading-[24px]
          lg:text-[18px] lg:leading-[28px] 
          xl:text-[20px] xl:leading-[30px] 
          2xl:text-[20px] 2xl:leading-[32px] 
           pt-8"
          >
            Finding a Job that matches your skills & interest is a lot easier
            now, You can browse the Jobs & apply whenever & wherever you want.
          </p>
          <div className="w-full flex pt-[34px] gap-[32px] justify-center md:justify-start">
            <CustomSwitch labelTittle="Remote" />
            <CustomSwitch labelTittle="Onsite" />
          </div>
        </div>
        <Image
          src={heroSection.layerIcon}
          alt="vector4"
          className="
           absolute 
           top-[10px] right-[20px]
           xs:top-[10px] xs:right-[20px]
           sm:top-[10px] sm:right-[20px]
           md:top-[10px] md:right-[20px]
           lg:top-[70px] lg:right-[-55px]
           xl:top-[70px] xl:right-[-55px]
           2xl:top-[70px] 2xl:right-[-55px]
           z-10 
           "
          quality={100}
        />
        <Image
          src={heroSection.dotAndRectacIcon}
          alt="dotAndRectacIcon"
          className=" absolute  
          top-[15px] left-[20px]
          xs:left-[40px] xs:top-[15px]
          sm:left-[20px] sm:top-[20px]
          md:left-[40px] md:top-[20px]
          lg:left-[90px]
          xl:left-[110px]
          2xl:left-[170px] 
           z-10  w h-auto"
          quality={100}
        />
        <Image
          src={heroSection.layerIcon}
          alt="layerIcon"
          className=" absolute  
            bottom-[250px] left-[20px]
            xs:bottom-[240px] xs:left-[20px] 
            sm:bottom-[240px] sm:left-[20px] 
            md:bottom-[240px] md:left-[40px] 
            lg:bottom-[100px] lg:left-[90px]
            xl:bottom-[100px] xl:left-[110px] 
            2xl:bottom-[100px] 2xl:left-[170px]
          w-[111px] 
          h-[60px]"
          quality={100}
        />

        <SearchLocation />
      </div>

      <div
        className="
       w-[100%] h-auto
       xs:h-auto xs:w-[100%]
       sm:h-auto sm:w-[100%]
       md:h-auto md:w-[100%] 
       lg:h-[850px] lg:w-[50%] hidden lg:block
       xl:h-[850px] xl:w-[50%]
      2xl:h-[850px] 2xl:w-[50%]
      
      bg-liteBlack "
      >
        <Image
          src={heroSection.heroImage}
          alt="heroImage"
          width={500}
          height={500}
          className="w-[100%] h-[100%]  "
          quality={100}
        />
      </div>
    </div>
  );
};

export default HeroSection;
