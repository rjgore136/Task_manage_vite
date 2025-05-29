import React from "react";

const ThankYouModal = ({ setThankYou }) => {
  return (
    <div className="bg-white rounded-xl p-6 w-[350px] text-center shadow-xl">
      <div className="text-4xl mb-3">❤️</div>
      <h2 className="text-xl font-semibold mb-2">
        Thank you for connecting with us.
      </h2>
      <p className="text-gray-600 mb-6">Our team will be contacting you soon</p>
      <button
        onClick={() => setThankYou(false)}
        className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-6 rounded-lg transition cursor-pointer"
      >
        Done
      </button>
    </div>
  );
};

export default ThankYouModal;
