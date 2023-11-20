import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white gap-5">
      <h1 className="sm:text-xl text-center font-semibold">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div className="flex flex-col items-center lg:flex-row gap-5 pb-16">
        <input
          type="email"
          placeholder="Email address"
          className="bg-[#00000088] border border-[#737373] rounded-md py-4 sm:pr-40 pl-5"
        />
        <button className="flex items-center h-full bg-[#E50914] sm:px-8 px-2 sm:py-3 rounded-md sm:text-2xl font-semibold">
          Get Started
          <LiaAngleRightSolid />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
