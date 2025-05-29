import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const SignupForm = ({ setShowForm, data, setData, setThankYou }) => {
  const languages = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "marathi", label: "Marathi" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "female",
    language: ["english"],
    email: "",
    terms: false,
  });

  const toggleLanguage = (value) => {
    setFormData((prev) => {
      const alreadySelected = prev.language.includes(value);
      return {
        ...prev,
        language: alreadySelected
          ? prev.language.filter((lang) => lang !== value)
          : [...prev.language, value],
      };
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("name", name);

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleData = (e) => {
    setData((prevData) => [...prevData, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      gender: "female",
      language: ["english"],
      email: "",
      terms: false,
    });
    setShowForm(false);
    setThankYou(true);
  };

  return (
    <div className="max-w-[450px] mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#222] mb-2">
          Get Started Today!
        </h2>
        <div
          className="cursor-pointer text-2xl"
          onClick={() => setShowForm(false)}
        >
          <RxCross2 />
        </div>
      </div>
      <p className="text-gray-600 mb-6">
        Fill in your details and take control of your tasks.
      </p>

      <form className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between mb-1 w-[48%]">
            <span className="text-sm font-medium text-gray-700">
              First Name
            </span>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="flex-1 px-4 py-2 rounded bg-[#FFDEE287]"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-[48%] ">
            <span className="text-sm font-medium text-gray-700">Last Name</span>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="flex-1 px-4 py-2 rounded bg-[#FFDEE287]"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 p-[0.6rem] bg-[#FFDEE287] w-[133px] rounded cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="w-4 h-4 text-[#FF3E54] checked:text-[FFDEE287] border-gray-300"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2 bg-[#FFDEE287] w-[133px] p-[0.5rem] cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="w-4 h-4 text-[#FF3E54] border-gray-300"
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Language
          </label>
          <div className="space-y-2">
            {languages.map((lang) => {
              const isSelected = formData.language.includes(lang.value);
              return (
                <label
                  key={lang.value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md cursor-pointer transition-colors ${
                    isSelected ? "bg-red-50" : "bg-red-50"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-[#FF3E54] border-[#FF3E54] text-white"
                        : "border-gray-300 bg-white text-transparent"
                    }`}
                  >
                    <FaCheck size={10} />
                  </div>
                  <input
                    type="checkbox"
                    value={lang.value}
                    checked={isSelected}
                    onChange={() => toggleLanguage(lang.value)}
                    className="hidden"
                  />
                  <span className="text-gray-700">{lang.label}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 rounded bg-[#FFDEE287]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#FF3E54] border-gray-300 rounded checked:bg-[#FF3E54]"
          />
          <span className="text-sm">
            I agree to the{" "}
            <span className="text-[#FF3E54]">terms and conditions</span>
          </span>
        </label>

        <button
          type="button"
          className="w-full bg-[#FF3E54] text-white py-2 px-4 rounded font-medium cursor-pointer"
          onClick={() => handleData()}
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
