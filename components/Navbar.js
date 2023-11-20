import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdLanguage } from "react-icons/md";
import Signin from "@/pages/signin";

const Navbar = (props) => {
  return (
    <div
      className={
        "absolute flex items-center justify-between w-[100%] sm:px-36 z-30 " +
        props.className
      }
    >
      <Image
        src={"/netflixlogo.png"}
        width={"150"}
        height={"0"}
        className="relative top-0 -left-3"
      />
      <div className="flex gap-2 lg:gap-5">
        <span className="relative flex items-center px-3">
          <MdLanguage className="absolute text-white sm:text-xl " />
          <select
            name="English"
            className=" pl-6 sm:text-lg  border border-[#737373] rounded-md bg-[#00000077] text-white"
          >
            <option value="English">English</option>
          </select>
        </span>
        <button className="text-white px-3 text-sm lg:font-bold font-semibold bg-[#E50914] rounded-md mr-2">
          <Link href={"/signin"}> Sign In</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
