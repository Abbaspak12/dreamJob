import React from "react";
import { ourExplore } from "../assets";
import Image from "next/image";

const HowtoExplore = () => {
  return (
    <section className="w-full flex-wrap  text-liteBlack relative flex bg-whiteColor">
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
         md:w-[100%] pb-40
         lg:w-[50%] lg:bg-none lg:pb-0  
         xl:w-[50%]
         2xl:w-[50%] lg:h-auto h-[900px]
        flex justify-center "
      >
        <div className="absolute inset-0 bg-black opacity-55 lg:hidden block"></div>
        <div className=" lg:pt-[175px] pt-20 w-[90%] lg:w-[80%] lg:text-liteBlack text-whiteColor z-20">
          <div className="w-full">
            <h1
              className="
            lg:font-extrabold  lg:text-[36px]  lg:leading-10
            md:font-bold  md:text-[30px]  md:leading-8
               
           font-semibold  text-[28px] leading-7
            
            "
            >
              How to Explore the Best Opportunities for Yourself?
            </h1>
            <p
              className="   text-[16px] leading-[24px]
           sm:text-[16px] sm:leading-[24px]
           md:text-[16px] md:leading-[24px]
          lg:text-[18px] lg:leading-[28px] 
          xl:text-[20px] xl:leading-[30px] 
          2xl:text-[20px] 2xl:leading-[32px]  pt-10 "
            >
              Finding a Job that matches your skills & interest is a lot easier
              now, You can browse the Jobs & apply whenever & wherever you want.
            </p>
          </div>

          <div className="w-full  lg:pt-0 pt-5 flex">
            <div className="w-[50%]">
              <div className="flex gap-3 w-full ">
                <Image
                  src={ourExplore.location1}
                  alt="location1"
                  quality={100}
                  className="w-[44px] h-[44px]"
                />
                <div className="w-full">
                  <h1
                    className=" lg:font-extrabold  lg:text-[36px]  lg:leading-10
            font-bold  md:text-[30px]  md:leading-8 text-[20px] lg:text-liteBlack"
                  >
                    5000+
                  </h1>
                  <p className=" font-normal md:leading-[28px] md:text-[18px] text-[16px] leading-6 lg:text-liteBlack">
                    Total Jobs
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full pt-10 md:pt-0">
                <Image
                  src={ourExplore.pocket}
                  alt="pocket"
                  quality={100}
                  className="w-[44px] h-[44px]"
                />
                <div className="w-full">
                  <h1
                    className="lg:font-extrabold  lg:text-[36px]  lg:leading-10
            font-bold  md:text-[30px]  md:leading-8 text-[20px] lg:text-liteBlack"
                  >
                    80+
                  </h1>
                  <p className="font-normal md:leading-[28px] md:text-[18px] text-[16px] leading-6 lg:text-liteBlack">
                    Total Employees
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex gap-3 ">
                <Image
                  src={ourExplore.admin}
                  alt="admin"
                  quality={100}
                  className="w-[44px] h-[44px]"
                />
                <div className="w-full">
                  <h1
                    className=" lg:font-extrabold  lg:text-[36px]  lg:leading-10
            font-bold  md:text-[30px]  md:leading-8 text-[20px] lg:text-liteBlack"
                  >
                    2000+
                  </h1>
                  <p className="text-liteBlack font-normal md:leading-[28px] md:text-[18px] text-[16px] leading-6 lg:text-liteBlack">
                    Total Seekers
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-10 md:pt-0">
                <Image
                  src={ourExplore.watch}
                  alt="watch"
                  quality={100}
                  className="w-[44px] h-[44px]"
                />
                <div className="w-full">
                  <h1
                    className=" lg:font-extrabold  lg:text-[36px]  lg:leading-10
            font-bold  md:text-[30px]  md:leading-8 text-[20px] lg:text-liteBlack"
                  >
                    5 years
                  </h1>
                  <p className="font-normal md:leading-[28px] md:text-[18px] text-[16px] leading-6 lg:text-liteBlack">
                    Total Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={ourExplore.singleLayer}
          alt="vector8"
          quality={100}
          className="absolute lg:left-[10%] lg:top-[129px] top-11

        left-[5%]
          
          "
        />
      </div>
      <Image
        src={ourExplore.circlesRectImage}
        alt="vector8"
        quality={100}
        className="
        absolute 
        lg:right-[81px]  lg:top-[-81px] 
         md:right-[81px]  md:top-[-81px]
        top-5 right-[40px]
        "
      />
    </section>
  );
};

export default HowtoExplore;
