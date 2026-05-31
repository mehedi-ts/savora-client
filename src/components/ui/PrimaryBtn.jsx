import React from "react";

const PrimaryBtn = ({ children, className }) => {
  return (
    <button
      className={`btn rounded-lg text-white font-semibold  bg-brand py-6 ${className} `}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
