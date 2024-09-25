import React from "react";
import Image from "next/image";
import { footer } from "./assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F2937] text-[#FFFFFF] relative">
      <div className="px-40 ">
        <div className="w-full flex justify-center">
          <h1 className="font-extrabold text-[36px]  leading-10 pt-32">
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
            className="cursor-pointer hover:scale-110 transition-all "
          />
          <Image
            src={footer.facebook}
            alt="google"
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={footer.instagram}
            alt="google"
            className="cursor-pointer hover:scale-110 transition-all"
          />
          <Image
            src={footer.twitter}
            alt="google"
            className="cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="w-full flex justify-between pt-20 pb-20">
          <div className="flex gap-5 items-center">
            <Image
              src={footer.mobile}
              alt="google"
              className="cursor-pointer hover:scale-110 transition-all "
            />
            <h3 className="font-normal text-[16px]">+92-340-7909920</h3>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              src={footer.location}
              alt="google"
              className="cursor-pointer hover:scale-110 transition-all "
            />
            <h3 className="font-normal text-[16px]">
              Somewhere in Islamabad, Pakistan
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <Image
              src={footer.email}
              alt="google"
              className="cursor-pointer hover:scale-110 transition-all "
            />
            <h3 className="font-normal text-[16px]">Someone@here.com</h3>
          </div>
        </div>
      </div>
      <Image
              src={footer.verticalDotGroup}
              alt="verticalDotGroup"
              className=" absolute top-11 right-9"
            />
    </footer>
  );
};

export default Footer;
