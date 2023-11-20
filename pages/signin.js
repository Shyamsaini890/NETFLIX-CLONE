import React from "react";
import Image from "next/image";
import { MdLanguage } from "react-icons/md";
const Signin = () => {
  return (
    <div
      className=" text-white flex flex-col gap-20"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url('/home.png')`,
        backgroundPosition: "fixed",
      }}
    >
      <div>
        <Image
          src={"/netflixlogo.png"}
          width={"150"}
          height={"0"}
          className="relative top-3 left-3"
        />
      </div>
      <div className="sm:w-[30%] flex gap-10 mx-auto bg-[#000000cc] flex-col py-20 px-10 rounded ">
        <h1 className="text-2xl font-bold ">Sign in</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full bg-[#333333] p-2 rounded"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full bg-[#333333] p-2 rounded"
          />
          <button className="w-full bg-[#E50914] p-2 rounded">Sign In</button>
          <div className="flex  justify-between ">
            <div className="flex gap-1 text-[#ffffffcc] ">
              <input type="checkbox" className=" " />
              Remember Me
            </div>
            <a href="#">Need help?</a>
          </div>
        </div>
        <div className=" flex  flex-col gap-1">
          <div className="flex">
            <p className=" text-[#ffffffcc]"> New to Netflix?</p>
            <a href="#" className=" font-black">
              Sign up now.
            </a>
          </div>
          <div className="text-[#ffffffcc]">
            <p>
              This page is protected by Google reCAPTCHA to ensure youre not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#12121277] text-[#737373]  sm:px-44 px-10 py-20 flex flex-col gap-5 w-[100%] text-sm lg:text-lg">
        <h1>
          Questions? <span className="underline">Call 000-000-000</span>
        </h1>
        <div className="flex sm:gap-28 gap-8 ">
          <a href="#">FAQ</a>
          <a href="#" className="sm:pl-14">
            Help center
          </a>
          <a href="#">Terms of Use</a>
          <a href="#">Privicy</a>
        </div>
        <div className="flex sm:gap-10 gap-4 ">
          <a href="#">Coockie prefrences</a>
          <a href="#" className="pl-6">
            Corporate Information
          </a>
        </div>
        <span className="relative flex items-center">
          <MdLanguage className="absolute text-[#ffffffaa] sm:text-xl " />
          <select
            name="English"
            className=" pl-6 smLtext-lg  border border-gray-700 rounded-md bg-[#00000077] text-[#ffffffaa]"
          >
            <option value="English">English</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Signin;
