import React from "react";
import { guide } from "../assets";

const Button = ({ styles }) => {
  return (
    <a href={guide} target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Download Guidelines For Round 1
      </button>
    </a>
  );
};

export default Button;
