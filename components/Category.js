import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="bg-black text-white ">
      <div className="flex flex-col lg:flex-row items-center sm:px-44 py-16 border-t-8 border-[#ffffff22]">
        <div className="flex flex-col gap-5 text-center sm:text-start">
          <h1 className="sm:text-5xl text-3xl font-extrabold">
            Enjoy on your TV
          </h1>
          <p className="sm:text-2xl text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <Image src={"/tv.png"} width={580} height={0} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center sm:px-40 py-16 border-t-8 border-[#ffffff22]">
        <Image src={"/mobile.jpg"} width={580} height={0} />
        <div className="flex flex-col gap-5 text-center sm:text-start">
          <h1 className="sm:text-5xl text-3xl font-extrabold">
            Download your shows to watch offline
          </h1>
          <p className="sm:text-2xl text-xl ">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center sm:px-48 py-16 border-t-8 border-[#ffffff22]">
        <div className="flex flex-col gap-5 text-center sm:text-start">
          <h1 className="sm:text-5xl text-3xl font-extrabold">
            Watch everywhere
          </h1>
          <p className="sm:text-2xl text-xl ">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <Image src={"/device.png"} width={580} height={0} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center sm:px-44 py-16 border-t-8 border-[#ffffff22]">
        <Image src={"/children.png"} width={580} height={0} />
        <div className="flex flex-col gap-5 text-center sm:text-start">
          <h1 className="sm:text-5xl text-3xl font-extrabold ">
            Create profiles for kids
          </h1>
          <p className="sm:text-2xl text-xl ">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
