// components/Button.js
import React from "react";
import "./Button.css";

const Button = ({ type, text, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
