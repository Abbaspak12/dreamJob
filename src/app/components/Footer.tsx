import React from "react";
import Image from "next/image";
import { footer } from "./assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F2937] text-[#FFFFFF] relative flex justify-center">
      <div className="w-[90%] lg:w-[80%]">
        <div className="w-full flex justify-center">
          <h1 className="font-extrabold   text-[25px] md:text-[36px]  leading-7 md:leading-10 md:pt-32 pt-24">
            Contact Us
          </h1>
        </div>
        <p className="text-[18px] font-normal leading-7 pt-14">
          Finding a job that matches your skills & interest is a lot easier now,
          You can browse the jobs & apply whenever & wherever you want. Finding
          a Job that matches your skills & interest is a lot easier now, You can
          browse the jobs & apply whenever & wherever you want.
        </p>

        <div className="flex pt-14 justify-center gap-4">
          <Image
            src={footer.google}
            alt="google"
            quality={100}
            className="cursor-pointer hover:scale-110 transition-all  "
          />
          <Image
            src={footer.facebook}
            alt="google"
            quality={100}
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={footer.instagram}
            alt="google"
            quality={100}
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={footer.twitter}
            alt="google"
            quality={100}
            className="cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="w-full flex  flex-wrap justify-between pt-20 pb-20">
          <div className="flex gap-5 items-center pb-3">
            <Image
              src={footer.mobile}
              alt="google"
              quality={100}
              className="cursor-pointer hover:scale-110 transition-all "
            />
            <h3 className="font-normal text-[16px]">+92-340-7909920</h3>
          </div>
          <div className="flex gap-5 items-center pb-3">
            <Image
              src={footer.location}
              alt="google"
              quality={100}
              className="cursor-pointer hover:scale-110 transition-all "
            />
            <h3 className="font-normal text-[16px]">
              Somewhere in Islamabad, Pakistan
            </h3>
          </div>
          <div className="flex gap-5 items-center pb-3">
            <Image
              src={footer.email}
              alt="google"
              quality={100}
              className="cursor-pointer hover:scale-110 transition-all "
            />
            <h3 className="font-normal text-[16px]">Someone@here.com</h3>
          </div>
        </div>
      </div>
      <Image
        src={footer.verticalDotGroup}
        alt="verticalDotGroup"
        quality={100}
        className=" absolute top-11 md:right-9 right-5 md:w-auto md:h-auto w-20 h-20"
      />
    </footer>
  );
};

export default Footer;
