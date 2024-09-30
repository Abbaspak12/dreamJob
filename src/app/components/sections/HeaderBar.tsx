import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { header } from "../assets";
import Image from "next/image";

const HeaderBar = () => {
  return (
    <header
      className={`w-full bg-liteBlack
     text-whiteColor flex justify-center`}
    >
      <div className="w-[90%] lg:w-[80%] py-6 flex justify-between items-center">
        <Image src={header.logo} alt="logo" quality={100} className="h-fit" />
        <div className="lg:flex justify-end gap-10 hidden ">
          <h1 className="font-semibold text-[18px]  cursor-pointer ">
            Product
          </h1>
          <BiDotsHorizontalRounded className=" " size={30} />
          <h1 className="font-semibold text-[18px]  cursor-pointer">
            Performance
          </h1>
          <BiDotsHorizontalRounded className=" " size={30} />
          <h1 className="font-semibold text-[18px]  cursor-pointer">
            Dashboard
          </h1>
        </div>
        <div className="lg:flex  gap-9 hidden  ">
          <button className="text-liteGreen  font-semibold text-[18px]">
            Login
          </button>
          <button
            className="bg-liteGreen px-7 py-[10px]
           text-[#FFFFFF] rounded-lg font-medium text-[18px]"
          >
            Sign Up
          </button>
        </div>
        <FiAlignJustify className=" lg:hidden cursor-pointer" size={40} />
      </div>
    </header>
  );
};

export default HeaderBar;
