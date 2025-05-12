// src/components/FAQ.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import faqData from "../data/faqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-blue py-20 px-4 sm:px-8 md:px-16">
      <h1
        className="text-3xl md:text-4xl font-bold text-center text-white mb-20"
        data-aos="fade-down"
      >
        Frequently Asked Questions
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-blue font-semibold text-lg focus:outline-none"
            >
              {item.question}
              <span className="text-blue text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`mt-3 text-gray-700 transition-all duration-300 ease-in-out ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
