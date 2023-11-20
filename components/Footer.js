import React from "react";
import { MdLanguage } from "react-icons/md";
const Footer = (props) => {
  return (
    <div
      className={
        "bg-black  border-t-8 border-[#ffffff22] text-[#ffffffaa] sm:p-16 p-5 sm:pl-44 flex flex-col sm:gap-6 gap-10 text-sm " +
        props.className
      }
    >
      <p className="lg:text-xl">
        Questions? Call <span className="underline">000-800-919-1694</span>
      </p>
      <div className="underline flex sm:gap-56 gap-5 lg:text-lg ">
        <div className="flex flex-col gap-4">
          <a>FAQ</a>
          <a>Media Centre</a>
          <a>Ways to Watch</a>
          <a>Cookie Preferences</a>
          <a>Speed Test</a>
        </div>
        <div className="flex flex-col gap-4">
          <a>Help Centre</a>
          <a>Investor Relations</a>
          <a>Terms of Use</a>
          <a>Corporate Information</a>
          <a>Legal Notices</a>
        </div>
        <div className="flex flex-col gap-4">
          <a>Account</a>
          <a>Jobs</a>
          <a>Privacy</a>
          <a>Contact Us</a>
          <a>Only on Netflix</a>
        </div>
      </div>
      <span className="relative flex items-center lg:text-lg">
        <MdLanguage className="absolute text-[#ffffffdd] text-xl " />
        <select
          name="English"
          className=" pl-6 text-lg  border border-gray-700 rounded-md bg-[#00000077] text-[#ffffffdd]"
        >
          <option value="English">English</option>
        </select>
      </span>
      <p className="lg:text-lg">Netflix India</p>
    </div>
  );
};

export default Footer;
