import React from "react";

const JoinUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white gap-8 justify-center items-center py-12 px-4 md:px-8">
      <div className="hidden md:block md:w-[40%]">
        <img
          src="./assets/Join-us.png"
          className="w-full h-[340px] object-cover rounded-lg"
          alt="Organized workspace"
        />
      </div>

      <div className="w-full md:w-[50%] max-w-[600px] space-y-6 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Start Organizing Your Life Today
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Join us now and transform your productivity with our intuitive to-do
          list platform!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#FF3E54] text-white font-semibold py-3 px-6 rounded-lg transition duration-200 cursor-pointer">
            Sign Up
          </button>
          <button className="border-2 border-[#FF3E54] hover:border-[#E6374B] text-[#FF3E54] hover:text-[#E6374B] font-semibold py-3 px-6 rounded-lg transition duration-200 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
