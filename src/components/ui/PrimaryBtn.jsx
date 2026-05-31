import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="btn rounded-lg text-white font-semibold  bg-brand">
      {children}
    </button>
  );
};

export default PrimaryBtn;
