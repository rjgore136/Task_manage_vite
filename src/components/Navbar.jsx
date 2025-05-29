import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const navItems = ["About Us", "Features", "Explore", "Contact Us"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full px-6 sm:px-10 md:px-16 lg:px-[6rem] h-[100px] flex items-center justify-between Z-41">
      <img
        className="w-[120px] h-auto object-cover"
        src="./assets/logo.png"
        alt="Company Logo"
      />

      <ul className="hidden md:flex gap-6 items-center text-[#170F49]">
        {navItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-[#FF3E54] transition-colors duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-4">
        <button className="px-4 min-w-[130px] text-[#FF3E54] h-[44px] border border-[#FF3E54] rounded-md">
          Log In
        </button>
        <button className="px-4 min-w-[130px] text-white h-[44px] bg-[#FF3E54] rounded-md">
          Sign Up
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#FF3E54] focus:outline-none"
        >
          {menuOpen ? <RxCross1 /> : <CiMenuBurger />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md z-10 flex flex-col items-center md:hidden py-4 gap-4 transition-all duration-300">
          {navItems.map((item) => (
            <a
              key={item}
              className="cursor-pointer hover:text-[#FF3E54] transition-colors duration-300"
              href="#"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <button className="w-[200px] text-[#FF3E54] h-[44px] border border-[#FF3E54] rounded-md cursor-pointer">
              Log In
            </button>
            <button className="w-[200px] text-white h-[44px] bg-[#FF3E54] rounded-md cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
