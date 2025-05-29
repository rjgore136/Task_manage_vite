import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SignupForm from "./Form";
import ThankYouModal from "./ThankYou";

const Hero = ({ data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [ThankYou, setThankYou] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
  }, [showForm]);
  return (
    <>
      {showForm && (
        <div className="absolute top-[100px] left-0 right-0 z-40 flex items-start justify-center bg-[#3C3C3C30] bg-opacity-40 backdrop-blur-sm pt-6">
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto">
            <SignupForm
              setShowForm={setShowForm}
              data={data}
              setData={setData}
              setThankYou={setThankYou}
            />
          </div>
        </div>
      )}

      {ThankYou && (
        <div className="absolute top-[100px] left-0 right-0 z-40 flex items-start justify-center bg-[#3C3C3C30] bg-opacity-40 backdrop-blur-sm pt-6">
          <div className="max-h-[calc(100vh-100px)]">
            <ThankYouModal setThankYou={setThankYou} />
          </div>
        </div>
      )}

      <div className="flex flex-col mt-8 items-center px-4 sm:px-6 lg:px-8 gap-6 ">
        <h1 className="text-[#170F49] text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-[90%] md:max-w-[70%] lg:max-w-[40%]">
          Simplify Your Life with Our Todo App
        </h1>

        <p className="text-[#6F6C90] text-center max-w-[70%] md:max-w-[60%] lg:max-w-[42%]">
          Stay organized and boost your productivity with our intuitive todo
          website. Experience a modern approach to task management that fits
          your lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            className="px-4 min-w-[150px] text-white h-[44px] bg-[#FF3E54] rounded-3xl cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            Get Started
          </button>
          <button className="px-4 min-w-[150px] text-[#FF3E54] h-[44px] border border-[#FF3E54] rounded-3xl cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1200px] mb-6">
          <div className="w-full lg:w-[67%] h-[500px] bg-[#FF3E54] p-6 flex flex-col justify-between rounded-xl">
            <h1 className="text-6xl sm:text-7xl text-[#FFFFFFCC] p-4 leading-tight">
              <span className="text-[#FFFFFF60]">
                Organize.
                <br />
              </span>
              Achieve.
              <br />
              Relax.
            </h1>
            <p className="text-[#FFFFFF90] font-medium p-4 max-w-[100%] text-center md:max-w-[70%] md:text-left">
              Turn clutter into clarity, chaos into control, and dreams into
              done. Bold visions into market success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 p-4">
              <button className="px-4 min-w-[150px] bg-white text-[#FF3E54] h-[44px] rounded-3xl">
                Get Started Today
              </button>
              <button className="px-4 min-w-[150px] text-white h-[44px] bg-[#FFFFFF1A] rounded-3xl">
                Discover Features
              </button>
            </div>
          </div>

          <div className="relative w-full lg:w-[32%] h-[500px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('./assets/hero_img.png')] bg-cover bg-center z-0" />

            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

            <div className="relative z-20 p-5 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start p-2">
                <h1 className="text-2xl sm:text-3xl text-white font-bold">
                  <span className="text-[#FFFFFF90]">Your task.</span>
                  <br />
                  Our tools.
                </h1>
                <img
                  src="./assets/pagination.png"
                  className="w-[40px] h-[10px] object-cover mt-5"
                  alt="pagination"
                />
              </div>

              <div className="text-white flex justify-between font-bold text-xl sm:text-2xl px-2">
                <FaChevronLeft />
                <FaChevronRight />
              </div>

              <div className="flex flex-col gap-3 p-2">
                <img
                  src="./assets/title_logo.png"
                  className="h-[30px] w-auto object-contain self-start"
                  alt="title logo"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-xl sm:text-2xl">
                      Freddie Halvorson
                    </h2>
                    <p className="text-[#000000]">
                      Chief Productivity Enthusiast
                    </p>
                  </div>
                  <img
                    src="./assets/Icon.png"
                    className="w-[59px] h-[59px]"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 px-4 w-[100%] max-w-[900px] mb-8">
          <img
            src="./assets/Google.png"
            className="h-10 sm:h-12"
            alt="Google"
          />
          <img
            src="./assets/Facebook1.png"
            className="h-10 sm:h-12"
            alt="Facebook"
          />
          <img
            src="./assets/Youtube1.png"
            className="h-10 sm:h-12"
            alt="YouTube"
          />
          <img
            src="./assets/Pinterest.png"
            className="h-10 sm:h-12"
            alt="Pinterest"
          />
          <img
            src="./assets/Twitch.png"
            className="h-10 sm:h-12"
            alt="Twitch"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
