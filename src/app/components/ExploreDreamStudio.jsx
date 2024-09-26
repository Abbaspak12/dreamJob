import React from "react";
import { exploreDreamStudio } from "./assets";
import Image from "next/image";
const ExploreDreamStudio = () => {
  const exploreList = [
    {
      tittle: "Software",
      body: " View More",
      picturePath: exploreDreamStudio.pc,
    },
    {
      tittle: "Design",
      body: " View More",
      picturePath: exploreDreamStudio.router,
    },
    {
      tittle: "Finiance",
      body: " View More",
      picturePath: exploreDreamStudio.dataBase,
    },
    {
      tittle: "Photography",
      body: " View More",
      picturePath: exploreDreamStudio.chrome,
    },
    {
      tittle: "Management",
      body: " View More",
      picturePath: exploreDreamStudio.pc,
    },
  ];
  return (
    <section className="w-full bg-[#f9fafb]  relative">
      <div className="px-40 ">
        <div className="w-full text-center pt-40">
          <h1 className="text-[#10B981] font-extrabold text-[36px] leading-9 ">
            Explore Dream Studio
          </h1>
        </div>
        <div className="flex w-full gap-[20px] p-3 pt-20">
          {exploreList.map((item, index) => {
            return (
              <div
                className="w-[20%] hover:shadow-lg hover:scale-105 transition-all rounded-xl"
                key={index}
              >
                <h1 className="text-[#374151] font-bold text-[24px] leading-6  text-center pt-[31px]">
                  {item.tittle}
                </h1>
                <Image
                  src={item.picturePath}
                  alt={item.picturePath}
                  className="mx-auto pt-[34px]"
                  quality={100}
                />
                <p className="text-[#374151] font-normal leading-[16px] text-[16px] pt-8 pb-8 text-center">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={exploreDreamStudio.vector11}
        alt="vector11"
        className="absolute top-[56px] left-[154px]"
        quality={100}
      />
      <Image
        src={exploreDreamStudio.vector10}
        alt="vector10"
        className="absolute top-[41px] right-[80px]"
        quality={100}
      />
    </section>
  );
};

export default ExploreDreamStudio;
