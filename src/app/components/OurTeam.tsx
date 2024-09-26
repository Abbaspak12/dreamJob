import React from "react";
import { ourTeam } from "./assets";
import Image from "next/image";
const OurTeam = () => {
  const clientsReview = [
    {
      tittle: "Muhammad Ali",
      story: `Finding a Job that matches your skills & interest is a lot easier
             now, You can browse the Jobs & apply whenever & wherever you want. Let’s 
             do it something earlier.`,
      picturepath: ourTeam.man1,
    },
    {
      tittle: "Abbas Ali",
      story: `Finding a Job that matches your skills & interest is a lot easier
             now, You can browse the Jobs & apply whenever & wherever you want. Let’s 
             do it something earlier.`,
      picturepath: ourTeam.man2,
    },
    {
      tittle: "Muhammad Ali",
      story: `Finding a Job that matches your skills & interest is a lot easier
             now, You can browse the Jobs & apply whenever & wherever you want. Let’s 
             do it something earlier.`,
      picturepath: ourTeam.girl1,
    },
    {
      tittle: "Muhammad Ali",
      story: `Finding a Job that matches your skills & interest is a lot easier
             now, You can browse the Jobs & apply whenever & wherever you want. Let’s 
             do it something earlier.`,
      picturepath: ourTeam.girl2,
    },
    {
      tittle: "Muhammad Ali",
      story: `Finding a Job that matches your skills & interest is a lot easier
             now, You can browse the Jobs & apply whenever & wherever you want. Let’s 
             do it something earlier.`,
      picturepath: ourTeam.girl1,
    },
    {
      tittle: "Muhammad Ali",
      story: `Finding a Job that matches your skills & interest is a lot easier
               now, You can browse the Jobs & apply whenever & wherever you want. Let’s 
               do it something earlier.`,
      picturepath: ourTeam.girls3,
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] text-[#111827] relative">
      <div className="px-40 ">
        <div className="w-full text-center pt-40">
          <h1 className="text-[#111827] font-extrabold text-[36px] leading-10 ">
            Our Team
          </h1>
          <p className="text-[#374151] font-normal leading-[18px] text-[18px] pt-4 ">
            It’s consists of the best memebers gathered & collected to make the
            perfect team that cna deliver the best results & in record time.
          </p>
        </div>

        <div className="w-full pt-[152px] pb-5 ">
          <div className="w-full flex flex-wrap gap-9 justify-center ">
            {clientsReview.slice(0, 3).map((item, index) => {
              return (
                <div
                  className="w-[329px] px-[33px] relative shadow-lg  rounded-xl cursor-pointer hover:scale-105 transition-all"
                  key={index}
                >
                  <h1 className="text-[#374151] font-bold text-[24px] leading-10 pt-[84px] text-center">
                    {item.tittle}
                  </h1>
                  <p className="text-[#374151] font-normal leading-[28px] text-[16px] pt-6 text-center">
                    {item.story}
                  </p>
                  <div className="w-full text-center py-9">
                    <button
                      className="bg-[#F3F4F6]  px-7 py-[10px] text-[#10B981] rounded-lg font-medium 
                    shadow text-[18px] cursor-pointer hover:scale-105 transition-all"
                    >
                      Learn More!
                    </button>
                  </div>
                  <Image
                    src={item.picturepath}
                    alt="man1"
                    className="absolute left-[50%] translate-x-[-50%] top-[-50px]  "
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-wrap gap-9 justify-center  pt-20">
            {clientsReview.slice(3, 6).map((item, index) => {
              return (
                <div
                  className="w-[329px] px-[33px] relative shadow-lg  rounded-xl cursor-pointer hover:scale-105 transition-all"
                  key={index}
                >
                  <h1 className="text-[#374151] font-bold text-[24px] leading-10 pt-[84px] text-center">
                    {item.tittle}
                  </h1>
                  <p className="text-[#374151] font-normal leading-[28px] text-[16px] pt-6 text-center">
                    {item.story}
                  </p>
                  <div className="w-full text-center py-9">
                    <button
                      className="bg-[#F3F4F6]  px-6 py-[12px] text-[#10B981] rounded-lg 
                     shadow font-medium
                     text-[18px] cursor-pointer hover:scale-105 transition-all"
                    >
                      Learn More!
                    </button>
                  </div>
                  <Image
                    src={item.picturepath}
                    alt="man1"
                    className="absolute left-[50%] translate-x-[-50%] top-[-50px]  "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Image
        src={ourTeam.vectorGroup5}
        alt="man1"
        className="absolute left-[33px] top-[31px] w-[234px] h-[248px]  "
      />

      <Image
        src={ourTeam.vectorGroup4}
        alt="man1"
        className="absolute right-[116px] top-[77px]  w-[223px] h-[160px]  "
      />
    </section>
  );
};

export default OurTeam;
