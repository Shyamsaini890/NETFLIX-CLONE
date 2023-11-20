import React from "react";
import { BiPlus } from "react-icons/bi";

const FAQ = (props) => {
  const showAnswer = () => {
    if (props.isActive) {
      props.setActive(null);
    } else {
      props.setActive(props.index);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div
        onClick={showAnswer}
        className="flex flex-col gap-5 w-[100%] md:w-[60%] lg:w-[78%] p-5 bg-[#ffffff30]  cursor-pointer
      "
      >
        <div>
          <div className="flex items-center justify-between gap-1 sm:text-2xl  ">
            {props.que}
            <BiPlus
              className={` transition-transform duration-100 sm:text-5xl ${
                props.isActive ? "rotate-45" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`${
              props.isActive ? "block" : "hidden"
            } flex flex-col border-t-2 border-black text-2xl py-5 `}
          >
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. <br /> You can watch as
            much as you want, whenever you want, without a single ad – all for
            one low monthly price. There's always something new to discover, and
            new TV shows and movies are added every week!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
