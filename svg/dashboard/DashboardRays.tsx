"use client";
import { motion } from "motion/react";
import React from "react";

const DashboardRays = ({ className = "" }) => {
  return (
    <motion.svg
      className={className}
      width="648"
      height="571"
      viewBox="0 0 648 571"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 0.85, filter: "blur(0px)" }}
      transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter0_f_10_11)"
      >
        <rect
          x="-34"
          y="20.653"
          width="85"
          height="650"
          transform="rotate(-41.798 -34 20.653)"
          fill="url(#paint0_linear_10_11)"
        />
      </g>
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter1_f_10_11)"
      >
        <rect
          x="129"
          y="-37.4877"
          width="85"
          height="510.685"
          transform="rotate(-41.798 129 -37.4877)"
          fill="url(#paint1_linear_10_11)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_10_11"
          x="-99"
          y="-101"
          width="626.596"
          height="671.228"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="32.5"
            result="effect1_foregroundBlur_10_11"
          />
        </filter>
        <filter
          id="filter1_f_10_11"
          x="14.6"
          y="-208.541"
          width="632.542"
          height="666.169"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="57.2"
            result="effect1_foregroundBlur_10_11"
          />
        </filter>
        <linearGradient
          id="paint0_linear_10_11"
          x1="8.5"
          y1="20.653"
          x2="8.5"
          y2="670.653"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C339D" stopOpacity="0.85" />
          <stop offset="1" stopColor="#4C339D" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10_11"
          x1="171.5"
          y1="-37.4877"
          x2="171.5"
          y2="473.197"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C339D" stopOpacity="0.85" />
          <stop offset="1" stopColor="#4C339D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default DashboardRays;
