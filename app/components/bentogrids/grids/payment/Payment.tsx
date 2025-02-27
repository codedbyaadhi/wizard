"use client";
import { useTextScramble } from "@/hooks/useTextScramble";
import { motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";
import PaymentMachine from "./machine/PaymentMachine";

const Payment = () => {
  const [hovered, isHovered] = useState(false);
  const title = useTextScramble("Secure Payments", hovered);
  const description = useTextScramble(
    "Built for ultra secure and reliable payment gateways that keeps you going",
    hovered
  );

  // Motion value to track card's x position
  const x = useMotionValue(-450);

  return (
    <div
      className="flex justify-center items-center w-[370px] h-[485px] bg-gradient-to-b from-[#050717] to-[#292e43] rounded-[33px] overflow-hidden"
      onMouseOver={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
    >
      <div className="flex flex-col items-center w-[369px] h-[483.5px] bg-gradient-to-b from-[#030115] to-[#0E0C20] rounded-[33px] overflow-hidden">
        {/* Card animation wrapper */}
        <div className="flex leading-tight w-full items-center justify-center h-[325px] overflow-hidden rounded-t-[33px] relative cursor-pointer">
          {/* Overflow hidden layer */}
          <div className="absolute inset-0 z-10 pointer-events-none" />

          <div className="flex items-start absolute w-[369px] h-[85px]">
            <motion.div
              className="flex items-center w-[132px] h-[82px] bg-[#1E1D32] border border-[#6a67991e] rounded-[3px]"
              initial={{
                x: -450,
                opacity: 1,
              }}
              animate={{
                x: [-450, 50, 420],
                opacity: [1, 1, 0.2],
              }}
              style={{ x }} // Bind motion value to track position
              transition={{
                duration: 6,
                times: [0, 0.7, 1],
                ease: ["easeInOut", "linear", "easeOut"],
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="w-[5px] h-[30px] rounded-full bg-[#060419] relative left-2"></div>
            </motion.div>
          </div>
          {/* Pass x position to PaymentMachine */}
          <PaymentMachine cardX={x} />
        </div>
        <div className="flex flex-col items-center justify-center relative w-full top-10 gap-1 cursor-default">
          <motion.h2
            className="font-sf text-[22px]"
            animate={{
              filter: hovered ? ["blur(2px)", "blur(0px)"] : "blur(0px)",
            }}
            transition={{
              duration: 1,
              times: [0, 1],
            }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="font-inter text-[16px] opacity-40 font-light text-center w-[320px]"
            animate={{
              filter: hovered ? ["blur(2px)", "blur(0px)"] : "blur(0px)",
            }}
            transition={{
              duration: 1,
              times: [0, 1],
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
