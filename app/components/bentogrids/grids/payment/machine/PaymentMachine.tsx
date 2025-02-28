"use client";
import React, { useState, useEffect } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";
import { MotionValue } from "framer-motion";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono({
  weight: "400", // Specify the font weight(s) you need, e.g., "400", "700"
  subsets: ["latin"], // Specify the character subsets, e.g., "latin"
});

const PaymentMachine = ({ cardX }: { cardX?: MotionValue<number> }) => {
  // State to control gibberish effect for "ACCEPTED"
  const [scrambleAccepted, setScrambleAccepted] = useState(true); // Start as gibberish

  // Listen to cardX changes and trigger scramble effect
  useEffect(() => {
    if (!cardX) {
      console.error("cardX is undefined. Cannot subscribe to changes.");
      return; // Exit early if cardX is not provided
    }

    const unsubscribe = cardX.on("change", (latestX) => {
      // Normal "ACCEPTED" when card is around x: 50
      if (latestX >= 40 && latestX <= 60) {
        setScrambleAccepted(false); // Show "ACCEPTED" clearly at x: 50
      }
      // Gibberish before x: 50 (start) and after x: 60 (moving forward)
      else if (latestX < 40 || latestX > 60) {
        setScrambleAccepted(true); // Gibberish at start and after moving forward
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [cardX]);

  // Apply scramble effect to "ACCEPTED"
  const acceptedText = useTextScramble("ACCEPTED", scrambleAccepted);

  return (
    <div className="flex flex-col items-center w-[186px] h-[320px] z-20">
      {/* The head of the machine */}
      <div className="flex items-center justify-center w-[186px] h-[87px] bg-gradient-to-b from-[#020015] to-[#6661af53]">
        <div className="flex items-center justify-center w-[185.3px] h-[83px] bg-gradient-to-b from-[#050317] to-[#191931] relative bottom-[0.5px] shadow-md"></div>
      </div>
      {/* The machine container */}
      <div className="flex items-center justify-center w-[148px] h-[237px] bg-gradient-to-b from-[#aca6fc53] to-[#262345] shadow-md">
        <div className="flex items-center justify-center w-[148px] h-[237px] bg-gradient-to-b from-[#181930] to-[#0B081C]">
          <div className="flex flex-col items-center justify-center gap-1 w-[131px] h-[223px] rounded-t-[9px] bg-gradient-to-b from-[#23233D] to-[#0B081C] shadow-inner">
            {/* The display of the payment machine */}
            <div className="flex items-center justify-center text-center w-[112px] h-[50px] bg-[#141429] shadow-inner rounded-[5px] border-[#2623455d] border">
              <p
                className={`text-[15px] text-[#484863] ${victorMono.className}`}
              >
                {acceptedText}
              </p>
            </div>
            <div className="flex items-center justify-between w-full h-[118px]">
              {/* The left border line */}
              <div className="flex">
                <svg
                  width="25"
                  height="124"
                  viewBox="0 0 25 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_894_55)">
                    <path
                      d="M4.5 0.834473L9 5.33165L19.5 100.222L9 115.063"
                      stroke="url(#paint0_linear_894_55)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_894_55"
                      x="0.146484"
                      y="0.480957"
                      width="23.8713"
                      height="122.871"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_894_55"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_894_55"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_894_55"
                      x1="12"
                      y1="0.834473"
                      x2="12"
                      y2="115.063"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2A2A48" />
                      <stop offset="1" stopColor="#0A091E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* The keybars */}
              <div className="flex flex-col items-center justify-evenly w-[68px] h-full">
                <div className="flex items-center justify-between gap-1 opacity-40">
                  <div className="flex items-center justify-center w-[14px] h-[7px] bg-[#232240] transition-all duration-150 hover:bg-[#383471bc]">
                    <p className="text-[3px] opacity-50">◀</p>
                  </div>
                  <div className="flex items-center justify-center w-[14px] h-[7px] bg-[#232240] transition-all duration-150 hover:bg-[#383471bc]">
                    <p className="text-[5px] opacity-50">-</p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[25px] h-[13px] bg-[#232240] rounded-[1px] shadow-md transition-all duration-150 hover:bg-[#383471bc]">
                    <p className="text-[3px] opacity-50">▲</p>
                    <p className="text-[3px] opacity-50">▼</p>
                  </div>
                  <div className="flex items-center justify-center w-[14px] h-[7px] bg-[#232240] transition-all duration-150 hover:bg-[#383471bc]">
                    <p className="text-[5px] opacity-50">-</p>
                  </div>
                  <div className="flex items-center justify-center w-[14px] h-[7px] bg-[#232240] transition-all duration-150 hover:bg-[#383471bc]">
                    <p className="text-[3px] opacity-50">▶</p>
                  </div>
                </div>
                {/* The number key container */}
                <div className="flex flex-col items-center justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div
                      className="flex items-center justify-evenly gap-2"
                      key={idx}
                    >
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <div
                          className="flex-items-center justify-center text-center w-[13px] h-[8px] rounded-[1px] bg-[#1e1c3879] shadow-md transition-all duration-150 hover:bg-[#2d2a55bc]"
                          key={idx}
                        >
                          <p className="text-[7px] opacity-10">x</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* The right border */}
              <div className="flex">
                <svg
                  width="25"
                  height="124"
                  viewBox="0 0 25 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_894_56)">
                    <path
                      d="M20 0.834473L15.5 5.33165L5 100.222L15.5 115.063"
                      stroke="url(#paint0_linear_894_56)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_894_56"
                      x="0.482178"
                      y="0.480957"
                      width="23.8713"
                      height="122.871"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_894_56"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_894_56"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_894_56"
                      x1="12.5"
                      y1="0.834473"
                      x2="12.5"
                      y2="115.063"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2A2A48" />
                      <stop offset="1" stopColor="#0A091E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMachine;
