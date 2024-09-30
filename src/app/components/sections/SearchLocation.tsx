import React from "react";
import { heroSection } from "../assets";
import { CustomSelect } from "../ui_Elements";
import Image from "next/image";

const SearchLocation = () => {
  return (
    <div
      className="absolute
            bg-whiteColor 
          z-50 
        w-[92%] left-[20px] bottom-[20px]
       xs:w-[92%] xs:left-[10px] xs:h-auto xs:bottom-[20px] 
       sm:w-[80%] sm:left-[65px] sm:h-auto sm:bottom-[20px] 
       md:w-[80%] md:left-[100px] md:h-auto md:bottom-[20px] 
       lg:w-[150%] lg:left-[161px] lg:h-[112px] lg:bottom-[-58px] 
       xl:w-[150%] xl:left-[161px] 
       2xl:w-[150%] 2xl:left-[161px] 
      shadow-md shadow-[#c7c3c3] rounded-lg flex flex-wrap md:gap-0  text-liteBlack"
    >
      <div
        className="
       w-[100%]
       md:w-[50%]
      lg:w-[45%] 
      2xl:w-[45%] 
       border-r 
    border-[#D1D5DB] 
    pl-[5px] 
    lg:pl-[48px] 
    flex items-center"
      >
        <Image
          src={heroSection.location2}
          alt="location2"
          className=" "
          quality={100}
        />
        <h1
          className="
      text-[#374151] 
      font-normal 
      text-[18px] 
      leading-[28px] 
      pl-1
      lg:pl-4
       "
        >
          Location
        </h1>
        <span className="w-[2.2px] h-[20px] bg-[#34D399] mx-0.5 lg:mx-2" />
        <input
          id="locationName"
          placeholder="Enter Your Location Here!"
          className="hover:border-none border-none
         px-2  focus:outline-none focus:border-none
          w-auto text-xs sm:text-[14px] font-normal"
        />
      </div>
      <div
        className="
    w-[50%]
      
      sm:w-[35%]
      md:w-[25%]
      lg:w-[17%] 
      border-r border-[#D1D5DB] flex justify-center
   items-center"
      >
        <CustomSelect
          defaultValue="Category"
          optionList={["Category", "Category1", "Category2"]}
        />
      </div>
      <div
        className="
      w-[50%] 
      sm:w-[35%]
      md:w-[25%]
      lg:w-[13%]
border-r border-[#D1D5DB] flex justify-center
   items-center pt-5 md:pt-0"
      >
        <CustomSelect
          defaultValue="Skills"
          optionList={["Skills", "Skills1", "Skills2"]}
        />
      </div>

      <div
        className="
    w-[100%]
    sm:w-[30%]
    md:w-[30%]
    lg:w-[25%]
     text-center my-auto mx-auto lg:pb-0 sm:pb-4 pb-2 pt-5 md:pt-0"
      >
        <button
          className="bg-[#10B981]  px-6 lg:px-12 py-[3px] lg:py-3 
text-[#FFFFFF] rounded-lg font-medium text-base sm:text-[18px] hover:scale-105 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchLocation;
