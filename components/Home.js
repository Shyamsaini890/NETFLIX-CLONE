import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
const Home = () => {
  return (
    <div
      className=" h-[100vh] w-[100%] text-white flex items-center justify-center flex-col gap-3 "
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url('/home.png')`,
      }}
    >
      <h1 className="sm:text-5xl text-3xl font-extrabold text-center ">
        Unlimited movies, TV shows and more
      </h1>
      <p className="sm:text-2xl text-xl">Watch anywhere. Cancel anytime.</p>
      <p className="sm:text-xl text-sm text-center mb-10 lg:mb-0">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex-col lg:flex-row flex items-center justify-center gap-5 mx-20  ">
        <input
          type="email"
          placeholder="Email address"
          className="bg-[#00000088] border border-[#737373] rounded-md py-5 sm:pr-40 pr-16 pl-5"
        />
        <button className="flex items-center h-full bg-[#E50914] px-5 rounded-md text-2xl font-semibold">
          Get Started
          <LiaAngleRightSolid />
        </button>
      </div>
    </div>
  );
};

export default Home;
