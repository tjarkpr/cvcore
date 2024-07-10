import React from "react";
import "./active-circle.css";

export const ActiveCircle: React.FC = () => (
    <svg
      width="8"
      height="8"
      xmlns="http://www.w3.org/2000/svg"
      className="pulse-animation"
    >
      <circle cx="4" cy="4" r="4" fill="#9CFF93" />
    </svg>
);