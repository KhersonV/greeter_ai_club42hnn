import React from "react";

function RightArrow() {
  return (
    <svg width="50" height="50">
      <rect x="0" y="0" width="50" height="50" fill="#eee" />
      <path d="M 10 25 L 25 40 L 30 35 L 20 25 L 30 15 L 25 10 Z" fill="aquamarine">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0 0; 10 0; 0 0" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function LeftArrow(handlePrevSlide) {
  return (
    <svg width="50" height="50">
      <rect x="0" y="0" width="50" height="50" fill="#eee" />
      <path d="M 40 25 L 25 10 L 20 15 L 30 25 L 20 35 L 25 40 Z" fill="aquamarine">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="translate" values="0 0; -10 0; 0 0" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export { RightArrow, LeftArrow };
