import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col justify-center items-center pt-5">
      <h1 className="text-2xl md:text-4xl lg:text-4xl  text-[#0E1F51] max-w-[80%] md:max-w-[60%] lg:max-w-[50%] font-bold text-center mt-[3rem] mb-[3rem]">
        Transform Your Productivity with Our Innovative To-Do List Features
      </h1>
      <FeatureCard />
    </div>
  );
};

export default Features;
