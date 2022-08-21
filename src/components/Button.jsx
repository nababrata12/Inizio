import React from "react";

const Button = ({ styles }) => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeuLZRKyxBO0r-NgVWiTGmr8vb7uUu5Ecr-wAaLihXo5zE_gQ/viewform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Register For Round 1
      </button>
    </a>
  );
};

export default Button;
