import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Image from "next/image";
import logoImage from "@/assets/image/header/logo.png";

const HeaderBar = () => {
  return (
    <header className="w-full bg-[#1F2937]">
      <div className="px-40 py-6 flex justify-between items-center">
        <div>
          <Image src={logoImage} alt="logo" />
        </div>
        <div className="flex justify-end gap-10">
          <h1 className="font-semibold text-[18px] text-[#FFFFFF] cursor-pointer">
            Product
          </h1>
          <BiDotsHorizontalRounded className=" text-[#FFFFFF]" size={30} />
          <h1 className="font-semibold text-[18px] text-[#FFFFFF] cursor-pointer">
            Performance
          </h1>
          <BiDotsHorizontalRounded className=" text-[#FFFFFF]" size={30} />
          <h1 className="font-semibold text-[18px] text-[#FFFFFF] cursor-pointer">
            Dashboard
          </h1>
        </div>
        <div className="flex gap-9">
          <button className="text-[#34D399]  font-semibold text-[18px]">
            Login
          </button>
          <button className="bg-[#10B981] px-7 py-[10px] text-[#FFFFFF] rounded-lg font-medium text-[18px]">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
