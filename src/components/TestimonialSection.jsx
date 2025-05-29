import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="max-w-[100%] bg-[#FFFFFF] mx-auto px-6 py-12 mb-[2rem]">
      <div className="text-left mb-12 px-[7.8rem]">
        <h2 className="text-4xl font-bold text-[#0E1F51]">
          Customer Testimonials
        </h2>
        <p className="text-[#0E1F51] text-[13px] mt-[1rem] h-[27px] px-[0.2rem]">
          This tool has transformed my productivity and organization!
        </p>
      </div>

      <div className="grid w-[100%] md:grid-cols-2 gap-[8rem] items-center px-[7rem]">
        <div className="absolute">
          <img
            src="./assets/Vector.png"
            className="object-cover"
            alt="vector"
          />
        </div>
        <div className="relative p-8">
          <p className="text-2xl font-semibold text-[#222] mb-6">
            "Using this website has made my tasks so much easier! I can't
            imagine my day without it."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#FF3E54]" />
            <div>
              <p className="font-bold text-[#222]">Sherri Cronin</p>
              <p className="text-sm text-gray-600">Project Manager, TechCorp</p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button className="w-8 h-8 border-2 border-[#FF3E54] rounded-full flex items-center justify-center text-[#FF3E54]">
              <FaChevronLeft size={12} />
            </button>
            <button className="w-8 h-8 bg-[#FF3E54] rounded-full flex items-center justify-center text-white">
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        <div className="relative p-2">
          <img
            src="/assets/testimonial.png"
            alt="Sherri Cronin"
            className="w-[348px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
