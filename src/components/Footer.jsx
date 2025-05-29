import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 w-full">
      <div className="max-w-[80%] px-5 py-8 ml-[9%] gap-[1rem]">
        <div className="flex gap-[2rem]  lg:justify-between flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:items-start md:items-start">
            <img
              className="w-[120px] h-[100px] object-cover"
              src="./assets/logo.png"
              alt="Company Logo"
            />
            <p className="pb-[1rem] text-center lg:text-start">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </p>
            <div className="w-full flex gap-3 flex-col md:flex-row lg:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Your email here"
                className="px-4 py-2 border border-gray-300 rounded flex-grow"
              />
              <button className="bg-[#FF3E54] text-white px-6 py-2 rounded w-[100px] cursor-pointer">
                Join
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center sm:text-left">
              <h3 className="font-bold mb-3">Useful Links</h3>
              <ul className="space-y-2 text-sm text">
                {[
                  "Home Page",
                  "About Us",
                  "Contact Us",
                  "Blog Posts",
                  "FAQs",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-bold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Help Center",
                  "User Guide",
                  "Community Forum",
                  "Feedback",
                  "Support",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-bold mb-3">Connect With Us</h3>
              <ul className="space-y-2 text-sm">
                {["Facebook", "Instagram", "X", "LinkedIn", "YouTube"].map(
                  (item) => (
                    <li key={item} className="flex gap-1">
                      <img src={`./assets/${item}.png`} alt="" />
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-1 text-sm">
          {/* Copyright */}
          <p className="text-center text-sm">
            © 2025 Osumare. All rights reserved.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <a key={item} href="#" className="hover:underline p-[0.5rem]">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
