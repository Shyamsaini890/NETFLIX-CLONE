import Category from "@/components/Category";
import FAQ from "@/components/FAQ";
import Home from "@/components/Home";
import Subscribe from "@/components/Subscribe";
import React, { useState } from "react";

const Index = () => {
  const [active, setActive] = useState(null);
  const faqData = [
    {
      que: "What is Netflix?",
    },
    {
      que: "How much does Netflix cost?",
    },
    {
      que: "Where can I watch?",
    },
    {
      que: "How do I cancel?",
    },
    {
      que: "What can I watch on Netflix?",
    },
    {
      que: "Is Netflix good for kids?",
    },
  ];
  return (
    <>
      <Home />
      <Category />
      <div className="flex flex-col gap-2  pt-20 pb-10 px-5 bg-black text-white border-t-8 border-[#ffffff22]">
        <h1 className="sm:text-5xl font-extrabold text-center mb-8 text-xl">
          Frequently asked Questions
        </h1>
        {faqData.map((item, i) => {
          return (
            <FAQ
              isActive={active == i}
              setActive={setActive}
              index={i}
              que={item.que}
            />
          );
        })}
      </div>
      <Subscribe />
    </>
  );
};

export default Index;
