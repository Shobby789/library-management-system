import React from "react";

const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="p-3 text-center bg-[#E7C9A5] text-black font-semibold rounded-md w-full"
    >
      {text}
    </button>
  );
};

export default Button;
