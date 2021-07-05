import React, { useState } from "react";
import { motion } from "framer-motion";
import { Faqdata } from "../data/faqdata";

const FAQ = () => {
  const [isOpen, setOpen] = useState(false);

  //   function to toggle the accordion
  const collapseAnswer = (index) => {
    if (isOpen === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <section className="py-16 bg-white md:py-20 lg:py-24">
      <div className="max-w-5xl px-12 mx-auto xl:px-0">
        <h2 className="text-3xl font-black md:text-4xl lg:text-6xl xl:text-7xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-xl font-thin text-gray-700 lg:text-2xl">
          Here are some of the most common frequently asked questions
        </p>
        <div className="relative mt-12 space-y-3">
          {Faqdata.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => collapseAnswer(index)}
                  key={index}
                  className="flex justify-between relative overflow-hidden border-b border-gray-100 select-none"
                >
                  <h1 className="flex items-center justify-between px-2 text-lg font-medium text-gray-700 cursor-pointer sm:text-xl md:text-2xl py-7 hover:text-gray-900">
                    {item.question}
                  </h1>
                  <span>
                    {isOpen === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 11l7-7 7 7M5 19l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {isOpen === index ? (
                  <motion.div initial={{ y: -25 }} animate={{ y: 25 }}>
                    <p className="px-2 pt-0 -mt-2 text-gray-400 sm:text-lg py-7">
                      {item.answer}
                    </p>
                  </motion.div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
